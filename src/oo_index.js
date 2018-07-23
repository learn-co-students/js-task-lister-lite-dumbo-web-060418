
document.addEventListener("DOMContentLoaded", init)
  // let tasklist = new TaskList();
  //
  // tasklist.initRender();
  // tasklist.newSubmit();
function init() {
  //initial render
  Adapter.getTasks().then(renderTasks)

  //looking for the task form on the page
  // and adding an event listener to listen for the form's submit
  const taskForm = document.querySelector('#create-task-form');
  taskForm.addEventListener("submit", handleTaskSubmit);

  //add an event listener to listen for clicks on delete buttons
  //inside of the task list
  const taskList = document.querySelector('#tasks')
  taskList.addEventListener('click', handleLinkDelete)
}

//create template of individual tasks
function taskTemplate(task) {
  return `<li data-id="${task.id}">${task.description}<button class="delete">Delete</button></li>`
}

//create rendering steps to push to page
function renderTasks(tasks) {
  const template = tasks.map(taskTemplate).join('');
  renderTask(template);
}

//helping renderTasks(tasks) push to the page
function renderTask(template) {
  const taskList = document.querySelector("#tasks");
  taskList.innerHTML += template
}

//running fetch calls with descripttionContent
function handleTaskSubmit(e) {
  e.preventDefault();

  const descriptionContent = e.target.querySelector('[name="new-task-description"]').value

  Adapter
    .createTask(descriptionContent)
    .then(taskTemplate)
    .then(renderTask)
}

//delete link handler
function handleLinkDelete(e) {
  if (e.target.className === 'delete') {
    const parentEl = e.target.parentElement

    //delete from database
    const id = parentEl.dataset.id
    Adapter.deleteTask(id)

    //remove from page
    parentEl.remove()
  }
}
