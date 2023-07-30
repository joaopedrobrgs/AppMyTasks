import Task from "../types/Task"

export default interface ITasksContext {
  tasks: Task[],
  addTask(newTask: Task): void
}
