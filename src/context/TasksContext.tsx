import React, { createContext, useContext } from "react";

//Interfaces
import ITasksContext from "../interfaces/ITasksContext";

const TasksContext = createContext<ITasksContext>({} as ITasksContext);

const TasksContextProvider = ({children}) => {
  return (
    <TasksContext.Provider
    value = {{
      id: "1",
      text: "Tarefa"
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
