import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoTask } from "./components/TodoTask";

const arrTodos = [
  { text: "Estudiar", completed: true },
  { text: "Merendar", completed: true },
  { text: "Descansar", completed: false },
  { text: "Proyectos", completed: false },
];

const App = () => {
  const [todos, setTodos] = React.useState(arrTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((search) =>
    search.text.toLowerCase().includes(searchValue)
  );

  // console.log("Los usuarios buscan TODOs de " + searchValue);

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
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
      </section>

      <TodoTask />
    </>
  );
};

export default App;
