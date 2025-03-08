import { render, fireEvent, screen } from "@testing-library/react";
import Todo from "../components/Todo.js";

test("renders without crashing", () => {
  render(<Todo id={1} task="Test Task" removeTodo={() => {}} updateTodo={() => {}} toggleComplete={() => {}} />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<Todo id={1} task="Test Task" removeTodo={() => {}} updateTodo={() => {}} toggleComplete={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

test("removes todo when button is clicked", () => {
  const mockRemove = jest.fn();
  render(<Todo id={1} task="Test Task" removeTodo={mockRemove} updateTodo={() => {}} toggleComplete={() => {}} />);
  fireEvent.click(screen.getByTestId("remove-todo-btn"));
  expect(mockRemove).toHaveBeenCalledWith(1);
});

test("edits todo when edit button is clicked", () => {
  const mockUpdate = jest.fn();
  render(<Todo id={1} task="Test Task" removeTodo={() => {}} updateTodo={mockUpdate} toggleComplete={() => {}} />);
  
  fireEvent.click(screen.getByTestId("edit-btn"));
  fireEvent.change(screen.getByTestId("edit-input"), { target: { value: "Updated Task" } });
  fireEvent.click(screen.getByTestId("save-btn"));

  expect(mockUpdate).toHaveBeenCalledWith(1, "Updated Task");
});

test("marks todo as completed", () => {
  const mockToggle = jest.fn();
  render(<Todo id={1} task="Test Task" removeTodo={() => {}} updateTodo={() => {}} toggleComplete={mockToggle} />);
  fireEvent.click(screen.getByTestId("complete-btn"));
  expect(mockToggle).toHaveBeenCalledWith(1);
});
