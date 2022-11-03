import UserBuilder from "@/utils/builders/UserBuilder";
import { createWrapper } from "@/utils/tests";
import { waitFor, renderHook } from "@testing-library/react";
import { useUserQuery } from "./users";
describe("Users", () => {
  it("should successfully query user", async () => {
    const user = UserBuilder.aUser()
      .withName("Tanner Linsley")
      .withLogin("tannerlinsley")
      .withFollowers("8.2K")
      .withFollowing("13")
      .build();

    const { result } = renderHook(() => useUserQuery("tannerlinsley"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.data).toBeDefined();
      expect(result.current.data).toEqual(user);
    });
  });
});
