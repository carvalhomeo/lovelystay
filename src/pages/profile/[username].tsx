import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Container, Content, Header } from "../../styles/pages/profile/profile";
import { ArrowBackIcon, ProfileDetails, Repos } from "../../components";

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
