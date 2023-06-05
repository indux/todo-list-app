import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoTask } from "./components/TodoTask";
import { TodosLoading } from "./components/TodosLoading";
import { TodosError } from "./components/TodosError";
import { TodosEmpty } from "./components/TodosEmpty";

const AppUI = ({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) => {
  return (
    <>
      <section className="w-full">
        <TodoCounter
          completed={completedTodos}
          total={totalTodos}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
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
