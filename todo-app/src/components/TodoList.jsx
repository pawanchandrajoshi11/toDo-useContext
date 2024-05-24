import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../index";

function TodoList() {
  const data = useContext(TodoContext);
  return (
    <div>
      TodoList
      <ol>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <TodoItem text={item.text} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default TodoList;
