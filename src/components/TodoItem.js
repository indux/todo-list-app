import React from "react";

const TodoItem = (props) => {
  return (
    <li>
      <span>V</span>
      <p className="font-extrabold">{props.text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
