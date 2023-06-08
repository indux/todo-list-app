import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoTask } from "./components/TodoTask";
import { TodosLoading } from "./components/skeleton/TodosLoading";
// import { TodosError } from "./components/skeleton/TodosError";
import { TodosEmpty } from "./components//skeleton/TodosEmpty";
import { TodoContext } from "./context/TodoContext";

const AppUI = () => {
  const { loading, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <>
      <section className="md:grid md:grid-cols-2 md:space-x-10 md:justify-center">
        <section className="md:w-96">
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

            {searchedTodos.map((todo, todoIndex) => (
              <TodoItem
                key={`${todo.text}_${todoIndex}`}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        </section>
        <section className="md:w-96">
          <TodoTask />
        </section>
      </section>
    </>
  );
};

export { AppUI };
