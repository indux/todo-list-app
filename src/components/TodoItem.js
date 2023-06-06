import React from "react";

const TodoItem = (props) => {
  return (
    <section className="my-4 border-gray-300">
      <div
        className={`py-4 px-4 flex w-full rounded-2xl border-4 items-center justify-between ${
          props.completed && "border-[#0AE98A]"
        }`}
      >
        <div className="truncate flex space-x-3 items-center text-gray-300">
          <button onClick={props.onComplete}>
            <svg
              className={`w-8 h-8 hover:text-[#0AE98A] ${
                props.completed && "text-[#0AE98A]"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
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

        <button onClick={props.onDelete}>
          <svg
            fill="none"
            stroke="currentColor"
            className="w-8 text-gray-300"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export { TodoItem };
