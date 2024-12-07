const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const listItem = document.createElement("li");
  const taskSpan = document.createElement("span");
  taskSpan.innerText = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", () => listItem.remove());

  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);

  taskInput.value = "";
}
