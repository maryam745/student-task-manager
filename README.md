📌 Student Task Manager (Node.js + Express)

A simple Task Manager Web App built using Node.js, Express, HTML, CSS, and JavaScript.
This project allows users to add, view, and delete tasks with data stored in a JSON file on the backend.

🚀 Features
Add new tasks
View all tasks
Delete tasks
Data saved in tasks.json file
REST API using Node.js and Express
Simple and responsive UI
🛠️ Tech Stack
HTML5
CSS3
JavaScript (Vanilla JS)
Node.js
Express.js
File System (fs module)
📁 Project Structure
student-task-manager/
│
├── server.js
├── tasks.json
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
⚙️ Installation & Setup
1. Clone the repository
git clone <your-repo-link>
cd student-task-manager
2. Install dependencies
npm install
3. Run the server
node server.js
4. Open in browser
http://localhost:3000
📌 API Endpoints
Get all tasks
GET /tasks
Add task
POST /tasks
Request Body
{
  "text": "Learn Node.js"
}
Delete task
DELETE /tasks/:id
🧠 How It Works
User enters a task in frontend
JavaScript sends request to backend
Backend stores data in tasks.json
Tasks are displayed on UI
User can delete tasks anytime
