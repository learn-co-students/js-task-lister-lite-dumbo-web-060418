//Model 
let store = {tasks: []}
const taskId = 0

class Task {
	constructor(name) {
		this.id = ++taskId
		this.name = name

		store.tasks.push(this)
	}


}

