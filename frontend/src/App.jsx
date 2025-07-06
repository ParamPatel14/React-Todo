import React, { useState, useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos from backend
  const fetchTodos = () => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to React Todo App</h1>
      <p>This is a simple todo application built with React.</p>
      <CreateTodo onTodoAdded={fetchTodos} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;