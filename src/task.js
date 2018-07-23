class Task {

  constructor(description) {
    this.description = description

  
  fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      description: this.description
    })
  })

  }
}
