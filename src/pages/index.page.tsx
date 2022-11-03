import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { SearchInput } from "@/components/SearchInput";
import { Title, Favorites, Container } from "@/styles/pages/home";

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await push(`profile/${username}`);
  };

  return (
    <Container>
      <Title>Lovely Stay</Title>
      <Form data-testid="form" onSubmit={handleSubmit}>
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
