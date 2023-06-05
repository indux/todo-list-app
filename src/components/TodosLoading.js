import React from "react";

const TodosLoading = () => {
  return (
    <section className="my-4 animate-pulse">
      <div className="py-4 px-4 flex w-full rounded-2xl border-4 items-center justify-between bg-gray-600 border-gray-600">
        <div className="flex space-x-4 items-center">
          <div className="w-8 h-8 rounded-full bg-gray-400"></div>

          <div className="flex flex-col space-y-1">
            <div className="w-16 h-2 rounded bg-gray-400"></div>
            <div className="w-16 h-2 rounded bg-gray-400"></div>
          </div>
        </div>

        <div className="w-8 h-8 rounded bg-gray-400"></div>
      </div>
    </section>
  );
};

export { TodosLoading };
