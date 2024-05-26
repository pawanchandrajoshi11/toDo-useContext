import { useState } from "react";
import { useTaskDispatch } from "../context/taskContext";

function Todo({ task }) {
  const dispatch = useTaskDispatch();
  const [isEdit, setIsEdit] = useState(false);
  let taskContent;
  if (isEdit) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEdit(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEdit(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          dispatch({
            type: "changed",
            task: { ...task, done: e.target.checked },
          })
        }
      />

      {taskContent}

      <button
        onClick={() => {
          dispatch({ type: "deleted", id: task.id });
        }}
      >
        Delete
      </button>
    </label>
  );
}
export default Todo;
