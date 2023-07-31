import React from "react";
import Home from "./src/screens/Home";
import TasksContextProvider from "./src/context/TasksContext";

const App: React.FunctionComponent = () => {
  return (
    <TasksContextProvider>
      <Home />
    </TasksContextProvider>
  );
}

export default App;
