import { render, fireEvent } from "@testing-library/react";
import Box from "../components/Box.js";

test("renders without crashing", () => {
  render(<Box width={100} height={100} backgroundColor="blue" />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<Box width={100} height={100} backgroundColor="blue" />);
  expect(asFragment()).toMatchSnapshot();
});

test("calls removeBox function when X button is clicked", () => {
  const removeBox = jest.fn();
  const { getByText } = render(<Box id="123" width={100} height={100} backgroundColor="blue" removeBox={removeBox} />);
  
  fireEvent.click(getByText("X"));
  expect(removeBox).toHaveBeenCalledWith("123");
});
