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

// test("the button should turn blue when clicked", () => {
//   render(<App />);

//   const elem = screen.getByRole("button", { name: "Change to Blue" });
// });
