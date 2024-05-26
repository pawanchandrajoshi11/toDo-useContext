import { useTasks } from "../context/taskContext";
import Todo from "./Todo";

function TodoList() {
  const tasks = useTasks();
  return (
    <ol>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <Todo task={task} />
          </li>
        );
      })}
    </ol>
  );
}
export default TodoList;
