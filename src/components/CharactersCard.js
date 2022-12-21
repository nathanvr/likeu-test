const CharactersCard = ({ character }) => {
  return (
    <>
      <div className="home__card">
        <div className="home__card__image">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="home__card__title">
          <h2>{character.name}</h2>
        </div>
      </div>
    </>
  );
};
export default CharactersCard;
