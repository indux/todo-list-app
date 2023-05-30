import React from "react";

const TodoCounter = ({ total, completed }) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Your tasks
      </h1>
      <h3 className="text-xl font-semibold text-[#330a37] mt-1">
        Completed {completed} to {total}
      </h3>
      <div className="mt-6 flex w-60 items-center space-x-2 rounded-2xl bg-gray-50 px-4 text-[#2f0f33] ring-2 ring-gray-300 focus-within:ring-[#2f0f33]">
        <input
          type="text"
          placeholder="Search"
          className="py-3 w-full border-none bg-transparent outline-none"
        />
        <button>
          <svg
            fill="none"
            className="w-6 text-[#2f0f33]"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export { TodoCounter };
