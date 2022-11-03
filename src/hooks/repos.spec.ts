import RepoBuilder from "@/utils/builders/RepoBuilder";
import { createWrapper } from "@/utils/tests";
import { waitFor, renderHook } from "@testing-library/react";
import { useReposQuery } from "./repos";
describe("Repos", () => {
  it("should successfully query repos", async () => {
    const repo = RepoBuilder.aRepo().build();

    const { result } = renderHook(() => useReposQuery("tannerlinsley", 4), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.data).toBeDefined();
      expect(result.current.data).toEqual([repo]);
    });
  });
});
