import { useQuery } from "@tanstack/react-query";
import api from "@/services/axios";
import { Repo } from "@/model/repo";

const fetchRepos = async (username: string, page: number) => {
  const { data } = await api.get<Repo[]>(
    `users/${username}/repos?page=${page}&per_page=10`
  );
  return data;
};

export const useReposQuery = <T extends any = Repo>(
  username: string,
  page: number,
  enabled?: boolean
) =>
  useQuery(["repo", username, page], () => fetchRepos(username, page), {
    enabled,
    keepPreviousData: true,
  });
