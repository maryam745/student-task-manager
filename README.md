

---

# 📌 Student Task Manager

A simple and beginner-friendly full-stack web app built using **Node.js, Express, HTML, CSS, and JavaScript**.
This project helps users manage daily tasks by adding, viewing, and deleting them with backend storage.

---

## 🚀 Features

* Add new tasks
* View all tasks
* Delete tasks
* Data saved in `tasks.json` file
* Simple REST API using Node.js and Express
* Clean and responsive UI

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Node.js
* Express.js
* File System (fs module)

---

## 📁 Project Structure

```
student-task-manager/
│
├── server.js
├── package.json
├── tasks.json
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone <your-repo-link>
cd student-task-manager
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Run the server

```
node server.js
```

---

### 4. Open in browser

```
http://localhost:3000
```

---

## 📌 API Endpoints

### Get all tasks

```
GET /tasks
```

---

### Add task

```
POST /tasks
```

#### Request Body:

```json
{
  "text": "Learn Node.js"
}
```

---

### Delete task

```
DELETE /tasks/:id
```

---

## 🧠 How It Works

* User enters a task in the frontend
* Frontend sends request to backend (Express API)
* Backend stores data in `tasks.json`
* Tasks are fetched and displayed on UI
* User can delete tasks anytime

---

## 💡 Future Improvements

* Mark tasks as completed
* Edit task feature
* Filter tasks (All / Completed / Pending)
* Database integration (MongoDB)
* Better UI design (dashboard style)

---

## 👨‍💻 Author

**Maryam Nazar**
*Beginner Full-Stack Developer Project*

---

## ⭐ Learning Outcomes

After building this project, you will understand:

* REST API development
* Express server setup
* Frontend and backend integration
* JSON file handling in Node.js
* CRUD operations
* Basic full-stack architecture

---
