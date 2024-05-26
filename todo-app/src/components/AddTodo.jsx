import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTaskDispatch, useTasks } from "../context/taskContext";

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useTaskDispatch();
  const tasks = useTasks();
  let numTotalTasks = tasks.length;
  let numCompletedTasks = 0;

  tasks.map((task) => {
    if (task.done) {
      numCompletedTasks++;
    }
    return numCompletedTasks;
  });

  return (
    <div>
      <h3>{`Total task: ${numTotalTasks}, completed tasks: ${numCompletedTasks}`}</h3>
      <label htmlFor="input">Add a task: </label>
      <input
        name="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: uuidv4(),
            text: text,
          });
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
