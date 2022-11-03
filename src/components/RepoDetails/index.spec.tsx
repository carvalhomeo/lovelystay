import RepoBuilder from "@/utils/builders/RepoBuilder";
import { renderWithClient } from "@/utils/tests";
import { screen, waitFor } from "@testing-library/react";
import { RepoDetails } from ".";
describe("RepoDetails", () => {
  it("should render RepoDetails with name and description", async () => {
    const repo = RepoBuilder.aRepo().build();
    renderWithClient(<RepoDetails repo={repo} />);

    expect(
      screen.getByRole("heading", {
        name: /angular\-dc/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/angularjs directives for dc\.js/i)
    ).toBeInTheDocument();
  });
});
