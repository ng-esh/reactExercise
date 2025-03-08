import { render, screen } from '@testing-library/react';
import App from '../App';

test("renders Color Box Maker heading", () => {
  render(<App />);
  expect(screen.getByText("Color Box Maker")).toBeInTheDocument();
});

test("renders without crashing", () => {
  render(<App />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});