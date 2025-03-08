import React, { useState, useEffect } from "react";
import NewTodoForm from "./NewTodoForm.js";
import Todo from "./Todo.js";
import { v4 as uuid } from "uuid";
import "../styles/TodoList.scss";
;

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    setTodos([...todos, { id: uuid(), task, isCompleted: false }]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newTask) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
    );
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="todo-list">
      <NewTodoForm addTodo={addTodo} />
      <ul data-testid="todo-list">
        {todos.map(({ id, task, isCompleted }) => (
          <Todo
            key={id}
            id={id}
            task={task}
            isCompleted={isCompleted}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
