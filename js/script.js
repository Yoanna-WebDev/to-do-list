{
  const tasks = [];
  const init = () => {
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const addTask = document.querySelector(".js-addTask").value.trim();
      if (addTask === "") {
        return;
      }
      tasks.push({ addTask });
      console.log(tasks);
    });
  };

  init();
}
