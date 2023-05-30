import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoTask } from "./components/TodoTask";

const arrTodos = [
  { text: "Estudiar", completed: true },
  { text: "Merendar", completed: false },
  { text: "Descansar", completed: false },
  { text: "Proyectos", completed: false },
];

const App = () => {
  return (
    <>
      <TodoTask />

      <TodoCounter completed={4} total={10} />

      <TodoList>
        {arrTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
    </>
  );
};

export default App;
