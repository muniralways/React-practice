import { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: ""
  });
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  // Load data from server
  useEffect(() => {
    axios.get("http://localhost:8000/users")
      .then(res => setUsers(res.data))
      .catch(err => alert(err.message));
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      // Edit existing user
      axios.put(`http://localhost:8000/users/${editId}`, formData)
        .then(res => {
          setUsers(users.map(user => user.id === editId ? res.data : user));
          setFormData({ name: "", email: "", photo: "" });
          setEditId(null);
        })
        .catch(err => alert("Error updating data"));
    } else {
      // Add new user
      axios.post("http://localhost:8000/users", formData)
        .then(res => {
          setUsers([...users, res.data]);
          setFormData({ name: "", email: "", photo: "" });
        })
        .catch(err => alert("Error adding data"));
    }
  };

  // Handle delete
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(err => alert(err.message));
  };

  // Handle edit
  const handleEdit = (user) => {
    setEditId(user.id);
    setFormData({
      name: user.name,
      email: user.email,
      photo: user.photo
    });
  };

  return (
    <div className="container-sm my-3">
      <div className="row">
        {/* Form */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header"><h1>Add Form</h1></div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className='form-control'
                    placeholder='Enter Your name'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="text"
                    className='form-control'
                    placeholder='Enter Your Email'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Photo URL</label>
                  <input
                    type="text"
                    className='form-control'
                    placeholder='Enter photo URL'
                    value={formData.photo}
                    onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-success w-100"
                  value={editId ? "Update" : "Add"}
                />
              </form>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="col-md-8">
          <table className="table table-bordered table-striped text-center align-middle shadow-sm">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td style={{ width: "80px" }}>
                    <img className="img-fluid rounded-circle" src={user.photo} alt="User" />
                  </td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(user)}>
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" className="text-center">No data found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Form;
