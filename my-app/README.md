# React Practice Project

This is a **React practice project** where you can:

- Add data through a form.
- Display data in a table.
- Edit and delete data.
- All data is saved to a **JSON server** for persistence.

---

## 🔹 Features

- **Add Data:** Fill the form and submit, new data will appear in the table.
- **Edit Data:** Click the pencil icon to edit a row, update the data.
- **Delete Data:** Click the trash icon to delete a row from the table and JSON server.
- **JSON Server:** Data is stored and fetched from a local JSON server (`db.json`).

---


- **`src/`** → Contains React components (Form, Table, etc.)
- **`public/`** → Static files like index.html
- **`.gitignore`** → Excludes `node_modules/` and other unnecessary files from GitHub.

---

## 💻 Installation & Setup

Follow these steps to use the project:

1. **Clone the repository:**

```bash
git clone https://github.com/muniralways/React-practice.git
````
````
npm install
````
## Install JSON Server globally (if not installed):

````
npm install -g json-server
````


## Start JSON Server:


```
json-server --watch db.json --port 8000
```

## This will run a local server at http://localhost:8000/users.

Data changes (add/edit/delete) will be stored in db.json.

Start React app:
````
npm start
````

Opens the app in your browser at http://localhost:3000.

⚡ Usage

Add Data: Fill the form (Name, Email, Photo URL) and click Add.

Edit Data: Click the pencil icon in the table row → Update the form → Submit.

Delete Data: Click the trash icon → Row is removed and deleted from JSON server.

Data Persistence: All changes are saved in db.json.

📝 Notes

Make sure JSON Server is running before starting the React app, otherwise the table will not display any data.

To reset data, edit db.json manually or restart JSON server.

Use modern browsers for best results.

📌 Commands Summary
Command	Purpose
git clone <repo>	Clone the project
npm install	Install dependencies
npm start	Run React app
json-server --watch db.json --port 8000	Run JSON server



