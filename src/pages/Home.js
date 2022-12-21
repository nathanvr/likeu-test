import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CharactersCard from "../components/CharactersCard";

const Home = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  if (!characters) {
    return <>loading...</>;
  }

  console.log(characters);
  return (
    <div className="home">
      <div className="home__title">
        <h1>Lista de personajes</h1>
      </div>
      <div className="home__character__card">
        {characters.map((character) => (
          <Link to={`character/${character.id}`} key={character.id}>
            <CharactersCard character={character} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
