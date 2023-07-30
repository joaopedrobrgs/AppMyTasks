import React from "react";
import Home from "./src/screens/Home";
import TasksContextProvider from "./src/context/TasksContext";

export default function App() {
  return (
    <TasksContextProvider>
      <Home />
    </TasksContextProvider>
  );
}
