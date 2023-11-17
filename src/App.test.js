import { render, screen, fireEvent, logRoles } from "@testing-library/react";
import App from "./App";

test("should have the correct initial color and be updated when clicked", () => {
  const { container } = render(<App />);
  logRoles(container);

  // find an element with a role of button and text of 'Change to blue'
  const elem = screen.getByRole("button", { name: "Change to Blue" });

  // expect the background color to be red
  expect(elem).toHaveStyle({
    backgroundColor: "red",
  });

  // click button
  fireEvent.click(elem);

  // expect the background color to be blue
  expect(elem).toHaveStyle({
    backgroundColor: "blue",
  });

  // expect the button text to be 'Change to red'
  expect(elem).toHaveTextContent("Change to Red");

  // click button again
  fireEvent.click(elem);

  // expect the background color to be red
  expect(elem).toHaveStyle({
    backgroundColor: "red",
  });

  // expect the button text to be 'Change to blue'
  expect(elem).toHaveTextContent("Change to Blue");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const elem = screen.getByRole("button", { name: "Change to Blue" });
  expect(elem).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: "Change to Blue",
  });
  const checkbox = screen.getByRole("checkbox");

  // click the checkbox
  fireEvent.click(checkbox);

  // expect the button to be disabled and checkbox is checked
  expect(button).toBeDisabled();
  expect(checkbox).toBeChecked();

  // click the checkbox again
  fireEvent.click(checkbox);

  // expect the button to be enabled and checkbox is unchecked
  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});
