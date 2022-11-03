import { renderWithClient } from "@/utils/tests";
import { screen, waitFor } from "@testing-library/react";
import Home from ".";
describe("Home", () => {
  it("should render Home", async () => {
    renderWithClient(<Home />);

    screen.logTestingPlaygroundURL();
  });
});
