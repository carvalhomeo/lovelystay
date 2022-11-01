import React, { useEffect } from "react";
import { useUserQuery } from "../../hooks/users";
import { Container } from "./styles";
import { AvatarImage } from "../AvatarImage";
import { Chip } from "../Chip";
import { IoMdPeople } from "react-icons/io";

interface ProfileDetailsProps {
  username: string | string[] | undefined;
}

export const ProfileDetails = ({ username }: ProfileDetailsProps) => {
  const { data: user, isLoading } = useUserQuery(username, !!username);

  useEffect(() => {}, []);

  if (isLoading) return <div>Loading...</div>;

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
