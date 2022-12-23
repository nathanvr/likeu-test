import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CharacterCard from "../components/characterCard";
import { Modal } from "@mantine/core";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episode1, setEpisode] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [id]);

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
        <hr></hr>
      </div>

      <div className="character__info">
        <CharacterCard character={character}></CharacterCard>
      </div>
      <div className="character__episodes">
        <h2 className="character__episodes__title">Capitulos</h2>
        <div className="character__episodes__btncontainer">
          {numEpisodes.map((episode) => (
            <button
              type="button"
              onClick={() => {
                setOpen(true);
                fetch(`​https://rickandmortyapi.com/api/episode/${episode}`)
                  .then((response) => response.json())
                  .then((data) => setEpisode(data));
              }}
            >
              <p>Cap {episode}</p>
            </button>
          ))}
        </div>
        <Modal
          opened={open}
          onClose={() => setOpen(false)}
          title="Detalle del Episodio"
        >
          <h3>Hola</h3>
        </Modal>

        {/* {numEpisodes.map((episode) => (
          <Link to={`/episode/${episode}`} key={episode}>
            <div>Cap {episode}</div>
          </Link>
        ))} */}
      </div>
    </div>
  );
};
export default CharacterDetail;
