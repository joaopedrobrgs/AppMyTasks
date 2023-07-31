import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Interfaces
import ITasksContext from "../interfaces/ITasksContext";

//Types:
import Task from "../types/Task";

//Props Type:
type Props = {
  children: React.ReactElement
}

//Async Storage data:
const tasksData: string = '@MyTasks:Tasks'

const TasksContext = createContext<ITasksContext>({} as ITasksContext);

const TasksContextProvider: React.FunctionComponent<Props> = ({children}: Props) => {

  //Array de tarefas:
  const [tasks, setTasks] = useState<Task[]>([]);

  //Use Effect que será executando quando usuário abrir aplicação, para buscar dados localmente:
  useEffect(()=>{
    async function loadTasks() {
      const taskList = await AsyncStorage.getItem(tasksData)
      if(!!taskList){
        setTasks(JSON.parse(taskList))
      }
    }
    loadTasks();
  }, [])

  //Forma alternativa de modificar o dado no AsyncStorage:
  // useEffect(()=>{
  //   async function saveTasks(){
  //     await AsyncStorage.setItem(tasksData, JSON.stringify(tasks))
  //   }
  //   saveTasks();
  // }, [tasks])

  //Função de adicionar tarefa ao array de tarefas e salvar resultado no AsyncStorage:
  ////Essa função será disparada quando o botão adicionar for clicado
  const addTask = async (newTask: Task): Promise<void> => {
    try{
      const newTasksList = [...tasks, newTask]
      setTasks(newTasksList)
      await AsyncStorage.setItem(tasksData, JSON.stringify(newTasksList))
    }
    catch (error){
      throw new Error;
    }
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

//Hook para utilizar o contexto:
export function useTasksContext() {
  return useContext(TasksContext);
}

export default TasksContextProvider;
