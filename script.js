let taskList = document.getElementById("taskList");

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => createTaskElement(task));
}

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    createTaskElement(taskText);

    saveTask(taskText);

    input.value = "";
}

function createTaskElement(taskText) {
    let li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <span class="delete-btn" onclick="deleteTask(this)">Delete</span>
    `;

    taskList.appendChild(li);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(element) {
    let taskName = element.parentElement.querySelector("span").innerText;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== taskName);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    element.parentElement.remove();
}

loadTasks();
