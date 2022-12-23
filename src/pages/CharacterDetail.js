import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CharacterCard from "../components/characterCard";
import { Modal } from "@mantine/core";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episode, setEpisode] = useState(null);
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
              key={episode}
              onClick={() => {
                fetch(`https://rickandmortyapi.com/api/episode/${episode}`)
                  .then((response) => response.json())
                  .then((data) => setEpisode(data));

                setOpen(true);
              }}
            >
              <p>Cap {episode}</p>
            </button>
          ))}
        </div>
        <Modal
          opened={open}
          onClose={() => {
            setEpisode(null);
            setOpen(false);
          }}
          title="Detalle del Episodio"
        >
          {episode ? (
            <div className="modal">
              <div className="modal__title">
                <h3>
                  {episode.episode} - {episode.name}
                </h3>
                <hr></hr>
              </div>
              <div className="modal__description">
                <p>
                  Episodio # <span>{episode.id}</span> estrenado en:{" "}
                  {episode.air_date}
                </p>
              </div>
            </div>
          ) : (
            <div>...loading</div>
          )}
        </Modal>
      </div>
    </div>
  );
};
export default CharacterDetail;
