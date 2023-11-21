import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// component
import SummaryForm from "../SummaryForm";

describe("initial conditions", () => {
  test("checkbox should be unchecked by default", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {});

    expect(checkbox).not.toBeChecked();
  });

  test("button should be disabled by default", () => {
    render(<SummaryForm />);

    const button = screen.getByRole("button", { name: /confirm order/i });

    expect(button).toBeDisabled();
  });
});

describe("functions", () => {
  test("if checkbox is checked, button should be enabled", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const button = screen.getByRole("button", {
      name: /confirm order/i,
    });

    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);

    // checkbox is checked?
    expect(checkbox).toBeChecked();

    // button is enabled?
    expect(button).toBeEnabled();

    // click again
    await user.click(checkbox);

    // button is disabled?
    expect(button).toBeDisabled();
  });

  test("popover responds to hover", async () => {
    const user = userEvent.setup();

    // popover starts out hidden

    // popover appears upon mouseover of checkbox label

    // popover disappears when we mouse out
  });
});
