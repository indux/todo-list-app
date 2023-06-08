import React from "react";
import { TodoContext } from "../context/TodoContext";

const TodoTask = () => {
  const { addTodo } = React.useContext(TodoContext);

  const [inputValue, setTnputValue] = React.useState("");

  const preventDefault = (event) => {
    event.preventDefault();

    if (inputValue !== "") {
      addTodo(inputValue);
      setTnputValue("");
    }
  };

  const inputDataUser = (event) => {
    setTnputValue(event.target.value);
  };

  return (
    <section className="bg-[#0AE98A] rounded-xl p-5 text-[#0C1633] mt-14 md:mt-0 w-full mb-14 md:mb-0">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5x1 font-bold">Create new task</h2>
        <h3 className="text-base font-medium">Task Name</h3>
        <form className="space-y-6" id="form" onSubmit={preventDefault}>
          <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-[#0C1633]">
            <input
              value={inputValue}
              onChange={inputDataUser}
              type="text"
              placeholder="Launch rocket to the moon"
              className="py-3 w-full border-none bg-transparent outline-none focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="flex w-44 items-center justify-center rounded-2xl border-b-4 border-b-[#070c1b] bg-[#0C1633] text-[#0AE98A] py-3 text-sm font-bold tracking-wider transition duration-150 ease-in-out active:translate-y-1 active:border-b-transparent"
          >
            CREATE TASK
            <svg
              className="ml-2 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
            </svg>
          </button>
        </form>
        <div className="flex justify-center pt-5">
          <img
            className="w-full px-2 mb-2.5"
            src="https://firebasestorage.googleapis.com/v0/b/picassoai.appspot.com/o/task%2Fundraw_completed_tasks_vs6q.svg?alt=media&token=4d46537a-1dac-44e1-9c82-bf2749647425&_gl=1*1shufuz*_ga*MTIyMTk1ODg3NS4xNjgzOTA5NTk5*_ga_CW55HF8NVT*MTY4NjE4MTQ0Ny41LjEuMTY4NjE4MTQ4Mi4wLjAuMA.."
            alt="Task"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export { TodoTask };
