import { createMockRouter, renderWithClient } from "@/utils/tests";
import { screen } from "@testing-library/react";
import Home from "./index.page";
import userEvent from "@testing-library/user-event";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("Home", () => {
  it("should render Home and search for a user", async () => {
    const router = createMockRouter({});

    renderWithClient(
      <RouterContext.Provider value={router}>
        <Home />
      </RouterContext.Provider>
    );

    expect(
      screen.getByRole("heading", {
        name: /lovely stay/i,
      })
    ).toBeInTheDocument();

    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByRole("button", {
      name: /search/i,
    });

    expect(searchButton).toBeInTheDocument();

    await userEvent.type(searchInput, "tannerlinsley");
    await userEvent.click(searchButton);

    expect(router.push).toHaveBeenCalledWith("profile/tannerlinsley");
  });
});
