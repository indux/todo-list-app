import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};

export { App };
