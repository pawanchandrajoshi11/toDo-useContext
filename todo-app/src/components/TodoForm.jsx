import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../index";

function TodoForm() {
  const data = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    const newTodo = {
      id: uuidv4(),
      text: todo,
    };

    setAllTodos((previousData) => [...previousData, newTodo]);

    console.log("Submitted!");
    setTodo("");
  };

  useEffect(() => {
    console.log(allTodos);
  }, [allTodos]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Enter a todo</label>
        <input
          type="text"
          value={todo}
          required
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
