import "./App.css";
import AddTodo from "./components/AddTodo";
import { TaskProvider } from "./context/taskContext";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Todo-App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TaskProvider>
  );
}

export default App;
