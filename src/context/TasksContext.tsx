import React, { createContext, useContext, useState } from "react";

//Interfaces
import ITasksContext from "../interfaces/ITasksContext";

//Types:
import Task from "../types/Task";

//Props Type:
type Props = {
  children: React.ReactElement
}

const TasksContext = createContext<ITasksContext>({} as ITasksContext);

const TasksContextProvider: React.FunctionComponent = ({children}: Props) => {

  //Array de tarefas:
  const [tasks, setTasks] = useState<Task[]>([]);

  //Função de adicionar tarefa ao array de tarefas:
  const addTask = (newTask: Task): void => {
    setTasks([...tasks, newTask])
  }

  return (
    <TasksContext.Provider
    value = {{
      tasks,
      addTask
    }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export function useTasksContext() {
  return useContext(TasksContext);
}

export default TasksContextProvider;
