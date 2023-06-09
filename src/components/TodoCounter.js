import React, { useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoCounter = () => {
  const { completedTodos, totalTodos, searchValue, setSearchValue } =
    React.useContext(TodoContext);

  return (
    <div className="flex flex-col items-center mt-5 md:mt-0">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#eaf0ed] to-[#0AE98A]">
          Your tasks
        </h1>
        <h3 className="text-xl font-semibold mt-1">
          Completed {completedTodos} to {totalTodos}
        </h3>
      </div>
      <div className="mt-6 flex w-60 items-center space-x-2 rounded-2xl bg-gray-50 px-4 text-[#0C1633] ring-2 ring-gray-300 focus-within:ring-[#0AE98A] mb-10">
        <input
          type="text"
          placeholder="Search"
          className="py-3 w-full border-none bg-transparent outline-none"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <button>
          <svg
            fill="none"
            className="w-6 text-[#0C1633]"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export { TodoCounter };
