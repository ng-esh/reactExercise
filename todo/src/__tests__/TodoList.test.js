import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList.js";

test("renders without crashing", () => {
  render(<TodoList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});
