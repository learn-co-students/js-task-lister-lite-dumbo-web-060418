
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const taskForm = document.querySelector('#create-task-form');

  taskForm.addEventListener('submit', taskList.handleSubmit.bind(taskList));

  document.addEventListener('click', taskList.handleDelete.bind(taskList))
});
