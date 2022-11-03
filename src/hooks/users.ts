import { useQuery } from "@tanstack/react-query";
import { User } from "@/model/user";
import api from "@/services/axios";
import { getFormattedUserInfo } from "@/utils/helpers";

const fetchUser = async (username: string) => {
  const { data } = await api.get<User>(`users/${username}`);
  return data;
};

export const useUserQuery = <T extends any = User>(
  username: string | string[] | undefined,
  enabled?: boolean
) =>
  useQuery(["user", username], () => fetchUser(username as string), {
    select: getFormattedUserInfo,
    enabled,
  });
