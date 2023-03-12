{
  const tasks = [];

  const addNewTask = (addTask) => {
    tasks.push({ addTask });
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const toggleDoneButtons = () => {
    const toggleDoneButtons = document.querySelectorAll(".js-done");
    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const render = () => {
    let htmlString = "";
    for (const task of tasks) {
      htmlString += `<li>
      <button class="button js-done">${task.done ? "✔" : ""}</button>
      <span class="list__task ${task.done ? "list__task--done" : ""}">${
        task.addTask
      }</span>
      </li>`;
    }
    document.querySelector(".js-list").innerHTML = htmlString;
    toggleDoneButtons();
  };

  const onFormSumbit = (event) => {
    event.preventDefault();
    const addTask = document.querySelector(".js-addTask").value.trim();
    if (addTask === "") {
      return;
    }
    addNewTask(addTask);
  };

  const init = () => {
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSumbit);
  };

  init();
}
