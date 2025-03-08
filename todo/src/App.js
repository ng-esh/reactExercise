import React from "react";
import TodoList from "./components/TodoList.js";
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <h1 data-testid="app-heading">Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
