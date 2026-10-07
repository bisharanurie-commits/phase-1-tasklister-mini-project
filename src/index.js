
const form = document.querySelector("#create-task-form");
const taskInput = document.querySelector("#new-task-description");
const taskList = document.querySelector("#tasks");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const task = document.createElement("li");
  task.textContent = taskText;

  taskList.appendChild(task);

  taskInput.value = "";
});

