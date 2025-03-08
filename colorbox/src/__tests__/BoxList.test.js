import { render, fireEvent } from "@testing-library/react";
import BoxList from "../components/BoxList";

test("renders without crashing", () => {
  render(<BoxList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

test("can add a new box", () => {
  const { getByLabelText, getByText } = render(<BoxList />);

  // Updated to match the exact label text
  fireEvent.change(getByLabelText("Width (rem):"), { target: { value: "5" } });
  fireEvent.change(getByLabelText("Height (rem):"), { target: { value: "6" } });
  fireEvent.change(getByLabelText("Background Color:"), { target: { value: "red" } });

  fireEvent.click(getByText("Add Box"));
  expect(getByText("X")).toBeInTheDocument();
});

test("can remove a box", () => {
  const { getByLabelText, getByText, queryByText } = render(<BoxList />);

  fireEvent.change(getByLabelText("Width (rem):"), { target: { value: "3" } });
  fireEvent.change(getByLabelText("Height (rem):"), { target: { value: "3" } });
  fireEvent.change(getByLabelText("Background Color:"), { target: { value: "green" } });

  fireEvent.click(getByText("Add Box"));
  fireEvent.click(getByText("X"));

  expect(queryByText("X")).not.toBeInTheDocument();
});
