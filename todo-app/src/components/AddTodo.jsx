import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddTodo() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button>Add</button>
    </div>
  );
}

export default AddTodo;
