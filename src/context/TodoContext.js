import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = ({ children }) => {
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

  let counter = "";

  const addTodo = (text) => {
    const newTodos = [...todos];
    const uniqueText = `${text}${counter}`;
    counter++;

    newTodos.push({
      text: uniqueText,
      completed: false,
    });
    saveTodo(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    if (todoIndex !== -1) {
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodo(newTodos);
    }
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    if (todoIndex !==- 1) {
      newTodos.splice(todoIndex, 1);
      saveTodo(newTodos);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        addTodo,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
