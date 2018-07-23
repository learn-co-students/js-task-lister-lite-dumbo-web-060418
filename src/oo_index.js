 



document.addEventListener("DOMContentLoaded", () => {
	const createTaskForm = document.querySelector('#create-task-form')
 	const tasks = document.querySelector("#tasks")
 	const taskDescription = document.querySelector("#new-task-description")
 	const priority = document.querySelector("[name=priorities]")
  	// const taskList = new TaskList();


 function submitForm(e) {
 	e.preventDefault()

  	let newTask = taskDescription.value 
  	let newPriority = priority.value 
  	let liTemplate =`<li style="color:${newPriority};">${newTask}<button>X</button></li>`

  	switch(newPriority){
  		case "red": 
  		tasks.innerHTML += liTemplate
  		break;
  		case "goldenrod": 
  		tasks.innerHTML += liTemplate
  		break;
  		case "green": 
  		tasks.innerHTML += liTemplate
  		break;
  	}
  	// tasks.innerHTML += `<li>${newTask}<button>X</button></li>`
  	taskDescription.value = ""
  }


 
  	
  

  createTaskForm.addEventListener('submit', submitForm)
  tasks.addEventListener('click', function(e){
  	if(e.target.innerText === "X"){ 
  		e.target.parentElement.remove()
  	} })

 })

