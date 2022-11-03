import { render, screen, waitFor } from "@testing-library/react";
import { ArrowBackIcon } from ".";
import userEvent from "@testing-library/user-event";
describe("ArrowBackIcon", () => {
  it("should render ArrowBackIcon with a text", async () => {
    const onClick = jest.fn();
    render(<ArrowBackIcon onClick={onClick} />);
    const arrowBackIcon = screen.getByTestId("arrow-back-icon");

    expect(arrowBackIcon).toBeInTheDocument();

    userEvent.click(arrowBackIcon);

    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
