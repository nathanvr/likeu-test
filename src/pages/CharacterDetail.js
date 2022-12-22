import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CharacterCard from "../components/characterCard";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, []);

  if (!character) {
    return <>loading...</>;
  }
  const episodes = character.episode.map((episode) => episode.split("/"));
  const numEpisodes = [];
  episodes.map((episodie) => numEpisodes.push(episodie[5]));

  return (
    <div className="character">
      <div className="character__title">
        <h1>Especificaciones del Personaje</h1>
      </div>
      <div className="character__info">
        <CharacterCard character={character}></CharacterCard>
      </div>
      <div className="character__episodes">
        <h2>Capitulos</h2>
        {numEpisodes.map((episode) => (
          <p>
            <span>Cap: </span>
            {episode}
          </p>
        ))}
      </div>
    </div>
  );
};
export default CharacterDetail;
