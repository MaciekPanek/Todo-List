// Select elements from the DOM
const submitBtn = document.querySelector(".main__box--top-submit");
const taskInput = document.querySelector(".main__box--top-input");
const taskbox = document.querySelector(".main__box--bottom-taskbox");

// Save task data to local storage
const saveData = function () {
  const tasks = Array.from(taskbox.querySelectorAll(".main__box--bottom-name")).map(function (
    task
  ) {
    return task.textContent;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Generate markup for a task and add it to the task list
const markup = function (task) {
  const html = `
    <div class="main__box--bottom-task">
    <h3 class="main__box--bottom-name">${task}</h3>
    <div class="main__box--bottom-buttons">
    <button class="main__box--bottom-edit">edit</button>
    <button class="main__box--bottom-delete">delete</button>
    </div>
    </div>
    `;
  taskbox.insertAdjacentHTML("beforeend", html);
};

// Load task data from local storage and generate markup for each task
const loadData = function () {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(function (task) {
    markup(task);
  });
};

// Handle form submission to add a new task
const submitTask = function (e) {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task !== "") {
    markup(task);
    taskInput.value = "";
    saveData();
  }
};

// Handle click events on buttons within the task list
const editiorials = function (e) {
  const target = e.target;
  if (target.classList.contains("main__box--bottom-delete")) {
    // Remove the task from the task list
    const task = target.closest(".main__box--bottom-task");
    task.remove();

    // Save updated task data to local storage
    saveData();
  } else if (target.classList.contains("main__box--bottom-edit")) {
    // Replace the task name with an input field for editing
    const taskName = target
      .closest(".main__box--bottom-task")
      .querySelector(".main__box--bottom-name");
    const originalText = taskName.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = originalText;
    taskName.textContent = "";
    taskName.appendChild(input);
    input.classList.add("main__box--top-input-hidden");
    input.focus();
    input.addEventListener("blur", function () {
      // Replace the input field with the updated task name
      const newText = input.value.trim();
      taskName.removeChild(input);
      if (newText !== "") {
        taskName.textContent = newText;
      } else {
        taskName.textContent = originalText;
      }

      // Save updated task data to local storage
      saveData();
    });
  }
};

// Load task data from local storage on page load
window.addEventListener("load", loadData);

// Add event listeners for form submission and button clicks
submitBtn.addEventListener("click", submitTask);
taskbox.addEventListener("click", editiorials);
