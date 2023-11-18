import { fireEvent, render, screen } from "@testing-library/react";

// components
import SummaryForm from "../SummaryForm";

test("should render", () => {
  render(<SummaryForm />);

  const elem = screen.getByText(/summary form/i);

  expect(elem).toBeInTheDocument();
});

describe("initial conditions", () => {
  test("checkbox should be unchecked by default", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {});

    expect(checkbox).not.toBeChecked();
  });

  test("button should be disabled by default", () => {
    render(<SummaryForm />);

    const button = screen.getByRole("button", { name: /confirm/i });

    expect(button).toBeDisabled();
  });

  test("if checkbox is checked, button should be enabled", () => {
    render(<SummaryForm />);

    const button = screen.getByRole("button", {
      name: /confirm/i,
    });

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    // checkbox is checked?
    expect(checkbox).toBeChecked();

    // button is enabled?
    expect(button).toBeEnabled();
  });
});
