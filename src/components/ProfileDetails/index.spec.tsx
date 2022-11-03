import { renderWithClient } from "@/utils/tests";
import { screen, waitFor } from "@testing-library/react";
import { ProfileDetails } from ".";
describe("ProfileDetails", () => {
  it("should render ProfileDetails with user information", async () => {
    renderWithClient(<ProfileDetails username="tannerlinsley" />);

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole("heading", {
          name: /tanner linsley/i,
        })
      ).toBeInTheDocument();

      expect(screen.getByText(/tannerlinsley/i)).toBeInTheDocument();

      expect(
        screen.getByText(
          /🎉typescript \+ react ⚛️open source💡ui\/ux 💼co\-founder @nozzleio 🛠owner @tanstack \- #reactquery #reacttable #reactlocation #reactcharts/i
        )
      ).toBeInTheDocument();

      expect(
        screen.getByText(/followers 8\.2k \. following 13/i)
      ).toBeInTheDocument();

      expect(screen.getByText(/repositories/i)).toBeInTheDocument();
      expect(screen.getByText(/112/i)).toBeInTheDocument();
    });
  });
});
