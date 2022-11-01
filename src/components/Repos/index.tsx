import React, { useMemo, useState } from "react";
import { IconButton } from "../IconButton";
import { Actions, Container, Content, Header, List } from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useReposQuery } from "../../hooks/repos";
import { RepoDetails } from "../RepoDetails";

interface ReposProps {
  username: string | string[] | undefined;
}

export const Repos = ({ username }: ReposProps) => {
  const [page, setPage] = useState(1);
  const {
    isLoading,
    data: repos,
    isFetching,
    isPreviousData,
  } = useReposQuery(username as string, page);

  const hasMore = useMemo(() => {
    return page < Math.round(68 / 10);
  }, [page]);

  return (
    <Container>
      <Header>
        <h1>Repositories</h1>
      </Header>
      <Content>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <List>
            {repos?.map((repo) => (
              <RepoDetails key={repo.id} repo={repo} />
            ))}
          </List>
        )}
        {isFetching ? <span> Loading...</span> : null}{" "}
      </Content>
      <Actions>
        <IconButton
          type="button"
          text="Previous"
          iconRight={<IoIosArrowBack />}
          onClick={() => setPage((old) => old - 1)}
          disabled={page === 1}
        />
        <IconButton
          type="button"
          text="Next"
          iconLeft={<IoIosArrowForward />}
          onClick={() => {
            if (!isPreviousData) {
              setPage((old) => old + 1);
            }
          }}
          disabled={!hasMore}
        />
      </Actions>
    </Container>
  );
};
