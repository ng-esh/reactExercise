import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "../components/NewBoxForm";

test("renders without crashing", () => {
  render(<NewBoxForm addBox={() => {}} />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm addBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

test("calls addBox with correct values", () => {
  const addBox = jest.fn();
  const { getByLabelText, getByText } = render(<NewBoxForm addBox={addBox} />);

  // Updated to match the exact label text
  fireEvent.change(getByLabelText("Width (rem):"), { target: { value: "3" } });
  fireEvent.change(getByLabelText("Height (rem):"), { target: { value: "4" } });
  fireEvent.change(getByLabelText("Background Color:"), { target: { value: "blue" } });

  fireEvent.click(getByText("Add Box"));

  expect(addBox).toHaveBeenCalledWith({ width: 3, height: 4, backgroundColor: "blue" });
});
