import Link from "next/link";
import React from "react";
import { Repo } from "../../model/repo";
import { Container, Divider } from "./styles";

interface RepoDetailsProps {
  repo: Repo;
}

export const RepoDetails = ({ repo }: RepoDetailsProps) => {
  const { name, description, html_url } = repo;
  return (
    <>
      <Container>
        <Link href={html_url} target="_blank">
          <h3>{name}</h3>
        </Link>
        <div>{description}</div>
      </Container>
      <Divider />
    </>
  );
};
