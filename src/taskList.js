class TaskList {
//   constructor(description) {
//     this.description = description
// }
  //grab some data from the page
  newSubmit() {
    const submitForm = document.querySelector("create-task-form")
    submitForm.addEventListener("submit", (e) => {
        e.preventDefault();

    const descriptionContent = e.target.querySelector('[name="new-task-description"]').value
    let newTask = new Task(`${descriptionContent}`)

    const newDescriptionTemplate =`<li>${descriptionContent}</li>`
    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: descriptionContent
      })
    });
    const taskedLi = document.querySelector('ul');
    taskedLi.innerHTML += newDescriptionTemplate;
  });
}


  //render that data
  initRender () {
    fetch(`http://localhost:3000/tasks`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        const taskListed = document.querySelector('#tasks')

        const template = data.map(function(task) {
          return `<li>${task.description}</li>`
        }).join('')
        taskListed.innerHTML += template
      })
    }
}
