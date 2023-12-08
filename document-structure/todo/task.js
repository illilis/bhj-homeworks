const tasksInput = document.getElementById("task__input");
const tasksAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

function addTask () {
  const task = document.createElement("div");
  task.classList.add("task");

  task.innerHTML = 
    `<div class="task__title">
    ${tasksInput.value.trim()}
    </div>
    <a href="#" class="task__remove">&times;</a>
    `;

  tasksList.appendChild(task);

  const taskRemove = task.querySelector(".task__remove");

  taskRemove.addEventListener("click", element => {
    element.target.closest(".task").remove();
  });

  tasksInput.value = "";
}

tasksInput.addEventListener("keyup", event => {
  event.preventDefault();

  if (event.code === "Enter" && tasksInput.value.trim() !== "") {
    addTask();
  }
});

tasksAdd.addEventListener("click", () => {
  if (tasksInput.value.trim() !== "") {
    addTask();
  }
});