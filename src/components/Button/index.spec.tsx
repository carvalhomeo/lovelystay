import { render, screen } from "@testing-library/react";
import { Button } from ".";
describe("Button", () => {
  it("should render Button with a text", () => {
    render(<Button text="Search" />);

    const button = screen.getByText("Search");

    expect(button).toBeInTheDocument();
  });
});
