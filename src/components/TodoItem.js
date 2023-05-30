import React from "react";

const TodoItem = (props) => {
  return (
    <section className="my-4">
      <div
        className={`py-4 px-4 flex w-full rounded-2xl border-4 border-gray-300 items-center justify-between ${
          props.completed && "border-[#0AE98A]"
        }`}
      >
        <div className="truncate flex space-x-3 items-center text-gray-300">
          <button>
            <svg
              fill="none"
              className={`w-8 hover:text-[#0AE98A] ${
                props.completed && "text-[#0AE98A]"
              }`}
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              ></path>
            </svg>
          </button>

          <p
            className={`text-lg font-medium ${
              props.completed && "line-through text-[#0AE98A]"
            }`}
          >
            {props.text}
          </p>
        </div>

        <button>
          <svg
            fill="none"
            stroke="currentColor"
            className="w-8 text-gray-300 hover:text-[#DA291C]"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export { TodoItem };
