import React from "react";

const TodoTask = () => {
  return (
    <section className="bg-[#0AE98A] rounded-xl p-5 text-[#0C1633] mt-16 w-full">
      <div className="space-y-6">
        <div>
          <h2 className="text-4xl md:text-5x1 font-bold">Create new task</h2>
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-medium">Task Name</h3>
          <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-[#0C1633]">
            <input
              type="text"
              placeholder="Launch rocket to the moon"
              className="py-3 w-full border-none bg-transparent outline-none focus:outline-none"
            />
          </div>
        </div>
        <button className="flex w-44 items-center justify-center rounded-2xl border-b-4 border-b-[#070c1b] bg-[#0C1633] text-[#0AE98A] py-3 text-sm font-bold tracking-wider transition duration-150 ease-in-out active:translate-y-1 active:border-b-transparent">
          CREATE TASK
          <svg
            className="ml-2 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export { TodoTask };
