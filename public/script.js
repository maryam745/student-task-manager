const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// load tasks
function loadTasks() {
    fetch("/tasks")
        .then(res => res.json())
        .then(data => {
            taskList.innerHTML = "";
            data.forEach(addTaskToUI);
        });
}

// add task to UI
function addTaskToUI(task) {
    const li = document.createElement("li");

    li.innerHTML = `
        <span>${task.text}</span>
        <button onclick="deleteTask(${task.id})">X</button>
    `;

    taskList.appendChild(li);
}

// add task
function addTask() {
    const text = taskInput.value.trim();

    if (!text) return alert("Enter task");

    fetch("/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    })
    .then(res => res.json())
    .then(() => {
        taskInput.value = "";
        loadTasks();
    });
}

// delete task
function deleteTask(id) {
    fetch(`/tasks/${id}`, {
        method: "DELETE"
    })
    .then(() => loadTasks());
}

// init
loadTasks();