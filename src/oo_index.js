
document.addEventListener("DOMContentLoaded", () => {
  let tasklist = new TaskList();

  tasklist.initRender();
  tasklist.newSubmit();

});


// function initRender() {
//   //get and render database users
//   fetch(`http://localhost:3000/tasks`, {
//     method: 'GET'
//   })
//     .then(res => res.json())
//     .then(data => {
//       const taskListed = document.querySelector('#tasks')
//
//       const template = data.map(function(task) {
//         return `<li>${task.description}</li>`
//       }).join('')
//       taskListed.innerHTML += template
//     })
//   }
