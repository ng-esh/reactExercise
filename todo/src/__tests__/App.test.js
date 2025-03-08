import { render, screen } from '@testing-library/react';
import App from '../App.js';

test("renders Color Box Maker heading", () => {
  render(<App />);
  expect(screen.getByText("Todo App")).toBeInTheDocument();
});

test("renders without crashing", () => {
  render(<App />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
