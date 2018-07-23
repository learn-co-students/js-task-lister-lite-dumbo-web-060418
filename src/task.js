let taskId = 0

class Task {
  constructor(description, priority) {
    this.id = ++taskId
    this.description = description
    this.priority = priority
  }
}
