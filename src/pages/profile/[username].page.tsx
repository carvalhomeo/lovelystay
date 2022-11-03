import React from "react";
import { useRouter } from "next/router";
import { Container, Content, Header } from "@/styles/pages/profile";
import { ArrowBackIcon } from "@/components/ArrowBackIcon";
import { Repos } from "@/components/Repos";
import { ProfileDetails } from "@/components/ProfileDetails";

const Profile = () => {
  const {
    query: { username },
    back,
  } = useRouter();

  return (
    <Container>
      <Header>
        <ArrowBackIcon onClick={() => back()} />
      </Header>
      <Content>
        <ProfileDetails username={username} />
        <Repos username={username} />
      </Content>
    </Container>
  );
};

export default Profile;
