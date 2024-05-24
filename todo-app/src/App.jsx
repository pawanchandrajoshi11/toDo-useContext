
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";



function App() {
  return (
    <div className="App">
      <h1>Todo-App</h1>
      <h3>{`Total todos: 0, Completed todos: 0`}</h3>
      <h3>Add a todo:</h3>
      <TodoForm />
      <h3>All todos: </h3>
      <TodoList />
    </div>
  );
}

export default App;
