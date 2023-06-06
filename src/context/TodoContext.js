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
    <TodoContext.Provider
      value={{
        loading,
        error,
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

// const TodoConsumer = () => {
//   return (
//     <TodoContext.Consumer
//       value={{
//         loading,
//         error,
//         completedTodos,
//         totalTodos,
//         searchValue,
//         setSearchValue,
//         searchedTodos,
//         completeTodo,
//         deleteTodo,
//       }}
//     ></TodoContext.Consumer>
//   );
// };

export { TodoContext, TodoProvider };
