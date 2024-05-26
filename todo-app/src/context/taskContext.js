import { createContext, useContext, useReducer } from "react";

const TaskContext = createContext(null);
const TasksDispatchContext = createContext(null);

const initialTasks = [
  { id: 1, text: "run 5k", done: false },
  { id: 2, text: "random task 2", done: false },
  { id: 3, text: "brink toothpaste", done: false },
];

function taskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }

    case "changed": {
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }

    case "deleted": {
      return tasks.filter((task) => task.id !== action.id);
    }

    default:
      return tasks;
  }
}

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}

export function useTaskDispatch() {
  return useContext(TasksDispatchContext);
}
