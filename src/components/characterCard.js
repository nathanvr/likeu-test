const CharacterCard = ({ character }) => {
  return (
    <>
      <div className="character__card">
        <div className="character__card__image">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="character__card__title">
          <h2>{character.name}</h2>
        </div>
        <div className="character__card__info">
          <p>
            <span>Especie: </span>
            {character.species}
          </p>
          <p>
            <span>Genero: </span>
            {character.gender}
          </p>
          <p>
            <span>Localizacion: </span>
            {character.location.name}
          </p>
          <p>
            <span>Estado: </span>
            {character.status}
          </p>
        </div>
      </div>
    </>
  );
};
export default CharacterCard;
