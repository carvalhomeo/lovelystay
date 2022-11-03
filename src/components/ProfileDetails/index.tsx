import React, { useEffect } from "react";
import { useUserQuery } from "@/hooks/users";
import { Container, PlaceHolder } from "./styles";
import { IoMdPeople } from "react-icons/io";
import { useAtom } from "jotai";
import { totalRepositoriesAtom } from "@/context/repos";
import { Chip } from "../Chip";
import { AvatarImage } from "../AvatarImage";
import { Spinner } from "../Spinner";
interface ProfileDetailsProps {
  username: string | string[] | undefined;
}

export const ProfileDetails = ({ username }: ProfileDetailsProps) => {
  const { data: user, isLoading, isError } = useUserQuery(username, !!username);

  const [, setTotalRepositories] = useAtom(totalRepositoriesAtom);

  useEffect(() => {
    user && setTotalRepositories(user?.public_repos);
  }, [setTotalRepositories, user]);

  if (isLoading)
    return (
      <PlaceHolder>
        <Spinner data-testid="loading-spinner" />
      </PlaceHolder>
    );

  if (isError) {
    return (
      <PlaceHolder>
        <h3>User not found</h3>
      </PlaceHolder>
    );
  }

  return (
    <Container>
      {user?.avatar_url && <AvatarImage avatar_url={user?.avatar_url} />}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <h2>{user?.name}</h2>
          <p>{username}</p>
        </div>
        <div>
          <div>{user?.bio}</div>
        </div>
        <div>
          <div style={{ display: "flex", gap: "12px" }}>
            <IoMdPeople /> followers {user?.followers} . following{" "}
            {user?.following}
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            Repositories <Chip>{user?.public_repos}</Chip>
          </div>
          <div style={{ display: "flex", gap: "12px" }}></div>
        </div>
      </div>
    </Container>
  );
};
