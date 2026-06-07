const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
app.use(express.static("public"));

// IMPORTANT FIXED PATH
const DATA_FILE = path.join(__dirname, "tasks.json");

// read tasks
function getTasks() {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
}

// save tasks
function saveTasks(tasks) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
}

// GET all tasks
app.get("/tasks", (req, res) => {
    res.json(getTasks());
});

// ADD task
app.post("/tasks", (req, res) => {
    const tasks = getTasks();

    const newTask = {
        id: Date.now(),
        text: req.body.text
    };

    tasks.push(newTask);
    saveTasks(tasks);

    res.json(newTask);
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
    let tasks = getTasks();

    const id = Number(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    saveTasks(tasks);

    res.json({ message: "Deleted" });
});

// start server
app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});