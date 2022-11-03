import { render, screen } from "@testing-library/react";
import { IconButton } from ".";
import { IoIosArrowBack } from "react-icons/io";
describe("IconButton", () => {
  it("should render IconButton with a text and icon on the right", async () => {
    render(
      <IconButton
        type="button"
        text="Previous"
        iconRight={<IoIosArrowBack />}
      />
    );

    const iconButtonPrevious = screen.getByRole("button", {
      name: /previous/i,
    });

    expect(iconButtonPrevious).toBeInTheDocument();
  });
});
