{
  let tasks = [];
  let hideDoneTasks = false;

  const addNewTask = (addTask) => {
    tasks.push({ addTask });
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const removeButtons = () => {
    const removeButtons = document.querySelectorAll(".js-remove");
    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });
  };

  const toggleDoneButtons = () => {
    const toggleDoneButtons = document.querySelectorAll(".js-done");
    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const renderTasks = () => {
    let htmlString = "";
    for (const task of tasks) {
      htmlString += `
    <li 
     class="list__item"
    >
     <button class="button js-done">
      ${task.done ? "✔" : ""}
     </button>
     <span class="${task.done ? "list__item--done" : ""}">
      ${task.addTask}</span>
     <button class="button button--remove js-remove ">
      🗑
     </button>
    </li>
  `;
    }
    document.querySelector(".js-list").innerHTML = htmlString;
  };

  const renderButtons = () => {
    let htmlButtons = "";
    if (tasks.length > 0) {
      htmlButtons += `
      <button class="section__button">Ukryj ukończone</button>
      <button class="section__button">Ukończ wszystkie</button>
      `;
      document.querySelector(".js-section__subHeader").innerHTML = htmlButtons;
    } else {
    }

    bindButtonsEvents();
  };

  const bindButtonsEvents = () => {};

  const render = () => {
    renderTasks();
    renderButtons();
    toggleDoneButtons();
    removeButtons();
    bindButtonsEvents();
  };

  const inputReset = (input) => {
    input.value = "";
  };

  const setFocus = (input) => {
    const button = document.querySelector(".js-form__button");
    button.addEventListener("click", () => {
      input.focus();
    });
  };

  const onFormSumbit = (event) => {
    event.preventDefault();

    const input = document.querySelector(".js-addTask");
    setFocus(input);

    const addTask = input.value.trim();
    if (addTask === "") {
      return;
    }
    addNewTask(addTask);

    inputReset(input);
  };

  const init = () => {
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSumbit);
  };

  init();
}
