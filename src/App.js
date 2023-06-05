import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./hooks/useLocalStorage";

const arrTodos = [
  { text: "Estudiar", completed: true },
  { text: "Merendar", completed: true },
  { text: "Descansar", completed: false },
  { text: "Proyectos", completed: false },
];
localStorage.setItem("TODOS_V1", JSON.stringify(arrTodos));

const App = () => {
  const {
    item: todos,
    saveItem: saveTodo,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((search) =>
    search.text.toLowerCase().includes(searchValue)
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos[todoIndex].completed = true;

    saveTodo(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos.splice(todoIndex, 1);

    saveTodo(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={loading}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
};

export { App };
