import { getFormattedUserInfo } from ".";
import UserBuilder from "../builders/UserBuilder";

describe("Utils", () => {
  it("should get formatted user info", () => {
    const user = UserBuilder.aUser()
      .withFollowers(8745)
      .withFollowing(4176)
      .build();

    const formattedUserInfo = getFormattedUserInfo(user);

    expect(formattedUserInfo.followers).toBe("8.7K");
    expect(formattedUserInfo.following).toBe("4.2K");
  });
});
