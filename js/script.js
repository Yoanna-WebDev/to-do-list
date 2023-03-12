{
  const tasks = [];

  const render = () => {
    let htmlString = "";
    for (const task of tasks) {
      htmlString += `<li>${task.addTask}</li>`;
    }
    document.querySelector(".js-list").innerHTML = htmlString;
  };

  const addNewTask = (addTask) => {
    tasks.push({ addTask });
    render();
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
