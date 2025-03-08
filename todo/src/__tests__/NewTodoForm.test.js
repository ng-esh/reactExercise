import { render, fireEvent, screen } from "@testing-library/react";
import NewTodoForm from "../components/NewTodoForm.js";

test("renders without crashing", () => {
  render(<NewTodoForm addTodo={() => {}} />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<NewTodoForm addTodo={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

test("allows user to enter a new todo", () => {
  render(<NewTodoForm addTodo={() => {}} />);
  const input = screen.getByTestId("todo-input");
  fireEvent.change(input, { target: { value: "New Task" } });
  expect(input.value).toBe("New Task");
});