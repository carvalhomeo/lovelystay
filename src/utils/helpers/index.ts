import { User } from "../../model/user";

export function getFormattedUserInfo(user: User): User {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  return {
    ...user,
    followers: formatter.format(Number(user.followers)),
    following: formatter.format(Number(user.following)),
  };
}
