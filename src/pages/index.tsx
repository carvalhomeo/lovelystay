import { Container, Favorites, Title } from "../styles/pages/home";
import { SearchInput, Button, Form } from "../components";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const favorites = [
  { name: "carvalhomeo" },
  { name: "tannerlinsley" },
  { name: "kentcdodds" },
  { name: "pmndrs" },
  { name: "theobr" },
];

export default function Home() {
  const { push } = useRouter();
  const [username, setUsername] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    push(`profile/${username}`);
  };

  return (
    <Container>
      <Title>Lovely Stay</Title>
      <Form onSubmit={handleSubmit}>
        <SearchInput
          placeholder="github username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit" text="Search" />
      </Form>
      <Favorites>
        {favorites.map(({ name }) => (
          <Link key={name} href={`/profile/${name}`}>
            {name}
          </Link>
        ))}
      </Favorites>
    </Container>
  );
}
