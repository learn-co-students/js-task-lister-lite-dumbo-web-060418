class TaskList {

  constructor() {
    this.tasks = []
  }

  createTask(description, priority) {
    let task = new Task(description, priority);
    this.tasks.push(task);
    return task;
  }

  handleSubmit(e) {
    e.preventDefault();

    let description = e.target.querySelector('#new-task-description').value
    let priority = e.target.querySelector('#priority').value
    let task = this.createTask(description, priority)
    let color = this.priorityColor(priority)
    
    this.renderTask(task, color);
  }

  renderTask(task, color) {
    const tasks = document.querySelector('#tasks');
    const taskTemplate = `<li data-id=${task.id} style='color: ${color};'>${task.description}<button class='delete' > X </button></li>`;
    tasks.innerHTML += taskTemplate;
  }

  priorityColor(priority){
    switch (priority) {
      case '1':
        return 'red'
        break;
      case '2':
        return '#d8bf0b';
        break;
      case '3':
        return 'green';
        break;
    }
  }

  handleDelete(e) {
    if (e.target.className === 'delete') {
      const parent = e.target.parentElement;
      const id = parent.dataset.id;
      parent.remove();
      this.deleteTask(id);
    }
  }

  deleteTask(id) {
    let task = this.tasks.find(el => el.id === id)
    let index = this.tasks.indexOf(task)
    this.tasks.splice(index, 1)
  }

}
