import { renderWithClient } from "@/utils/tests";
import { screen, waitFor } from "@testing-library/react";
import { Repos } from ".";
import userEvent from "@testing-library/user-event";

jest.mock("jotai", () => ({
  atom: () => undefined,
  useAtom: (totalRepositoriesAtom: any) => [31],
}));

async function validateNextElementAndLength(
  repoName: string,
  listLenght: number
) {
  await waitFor(() => {
    const nextButton = screen.getByRole("button", {
      name: /next/i,
    });

    userEvent.click(nextButton);

    const repostList = screen.getAllByTestId("repo-info");

    expect(repostList).toHaveLength(listLenght);

    expect(screen.getByText(repoName)).toBeInTheDocument();
  });
}

describe("Repos", () => {
  it("should render Repos list", async () => {
    renderWithClient(<Repos username="kentcdodds" />);

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();

    expect(
      await screen.findByRole("heading", {
        name: /repositories/i,
      })
    ).toBeInTheDocument();

    await waitFor(() => {
      const repostList = screen.getAllByTestId("repo-info");

      expect(repostList).toHaveLength(10);

      expect(
        screen.getByRole("heading", {
          name: /\.kenv/i,
        })
      ).toBeInTheDocument();
    });

    await validateNextElementAndLength("angular.js", 10);
    await validateNextElementAndLength("angular-webpack-demo-project", 10);
    await validateNextElementAndLength("angularjs-greensock-site", 1);
  });
});
