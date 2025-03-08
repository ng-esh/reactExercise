import React, { useState } from "react";
import "../styles/Todo.scss";

function Todo({ id, task, removeTodo, updateTodo, toggleComplete, isCompleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(id, updatedTask);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${isCompleted ? "completed" : ""}`} data-testid="todo-item">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="edit-form">
          <input
            type="text"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
            data-testid="edit-input"
          />
          <button type="submit" data-testid="save-btn">Save</button>
        </form>
      ) : (
        <>
          <span data-testid="todo-text">{task}</span>
          <button className="edit-btn" onClick={() => setIsEditing(true)} data-testid="edit-btn">
            Edit
          </button>
          <button className="remove-btn" onClick={() => removeTodo(id)} data-testid="remove-todo-btn">
            X
          </button>
          <button className="complete-btn" onClick={() => toggleComplete(id)} data-testid="complete-btn">
            {isCompleted ? "Undo" : "Mark as completed"}
          </button>
        </>
      )}
    </li>
  );
}




export default Todo;