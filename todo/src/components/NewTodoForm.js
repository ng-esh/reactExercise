import React, { useState } from "react";
import "../styles/NewTodoForm.scss";

function NewTodoForm({ addTodo }) {
    const [task, setTask] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (task.trim() === "") return;
      addTodo(task);
      setTask("");
    };
  
    return (
      <form className="new-todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new todo"
          data-testid="todo-input"
        />
        <button type="submit" data-testid="add-todo-btn">Add Todo</button>
      </form>
    );
  
}

export default NewTodoForm;