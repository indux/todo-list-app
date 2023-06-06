import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoTask } from "./components/TodoTask";
import { TodosLoading } from "./components/skeleton/TodosLoading";
import { TodosError } from "./components/skeleton/TodosError";
import { TodosEmpty } from "./components//skeleton/TodosEmpty";
import { TodoContext } from "./context/TodoContext";

const AppUI = () => {
  const { loading, error, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <>
      <section className="w-full">
        <TodoCounter />

        <TodoList>
          {loading && (
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
          )}
          {/* {error && <TodosError />} */}
          {!loading && searchedTodos.length === 0 && <TodosEmpty />}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      </section>

      <TodoTask />


    </>
  );
};

export { AppUI };
