import { render, screen, fireEvent, logRoles } from "@testing-library/react";
import App, { spaceCamelCase } from "./App";

test("should have the correct initial color and be updated when clicked", () => {
  const { container } = render(<App />);
  logRoles(container);

  // find an element with a role of button and text of 'Change to Medium Violet Red'
  const elem = screen.getByRole("button", {
    name: "Change to Medium Violet Red",
  });

  // expect the background color to be red
  expect(elem).toHaveStyle({
    backgroundColor: "MidnightBlue",
  });

  // click button
  fireEvent.click(elem);

  // expect the background color to be Medium Violet Red
  expect(elem).toHaveStyle({
    backgroundColor: "MediumVioletRed",
  });

  // expect the button text to be 'Change to MidnightBlue'
  expect(elem).toHaveTextContent("Change to Midnight Blue");

  // click button again
  fireEvent.click(elem);

  // expect the background color to be red
  expect(elem).toHaveStyle({
    backgroundColor: "MidnightBlue",
  });

  // expect the button text to be 'Change to blue'
  expect(elem).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const elem = screen.getByRole("button", {
    name: "Change to Medium Violet Red",
  });
  expect(elem).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: "Change to Medium Violet Red",
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

test("when disabled button has gray background color", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: "Change to Medium Violet Red",
  });
  const checkbox = screen.getByRole("checkbox");

  // click the checkbox
  fireEvent.click(checkbox);

  // expect button to be gray
  expect(button).toHaveStyle({
    backgroundColor: "gray",
  });

  // click the checkbox again to enable the button
  fireEvent.click(checkbox);

  // expect button to be red
  expect(button).toHaveStyle({
    backgroundColor: "MidnightBlue",
  });

  // click the button to change the default color
  fireEvent.click(button);

  // expect button to be blue
  expect(button).toHaveStyle({
    backgroundColor: "MediumVioletRed",
  });

  // click the checkbox to disable the button
  fireEvent.click(checkbox);

  // expect button to be gray
  expect(button).toHaveStyle({
    backgroundColor: "gray",
  });

  // click the checbox to enable the button
  fireEvent.click(checkbox);

  // expect button to be blue
  expect(button).toHaveStyle({
    backgroundColor: "MediumVioletRed",
  });
});

describe("spaces before camel-case capital letters", () => {
  test("no captial letters inside", () => {
    expect(spaceCamelCase("Red")).toBe("Red");
  });

  test("one capital letter inside", () => {
    expect(spaceCamelCase("MidnightBlue")).toBe("Midnight Blue");
  });

  test("multiple capital letters inside", () => {
    expect(spaceCamelCase("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
