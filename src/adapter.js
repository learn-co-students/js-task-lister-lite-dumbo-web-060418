// NO DOM MANIPULATION!!!

const Adapter = {
  createTask: function(descriptionContent) {
    return fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        description: descriptionContent
      })
    }).then(function(resp) {
      return resp.json();
    });
  },
  getTasks: function() {
    return fetch('http://localhost:3000/tasks', {
      method: 'GET'
    }).then(function(resp) {
      return resp.json();
    })
  },
  deleteTask: function(id) {
    return fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    })
  }
};
