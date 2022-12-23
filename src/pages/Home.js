import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import CharactersCard from "../components/CharactersCard";

const Home = () => {
  const [data, setData] = useState({ info: {}, results: [] });
  const [page, setPage] = useState(1);

  // const character = [];

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())

      .then((data) =>
        setData((prevData) => {
          return {
            ...prevData,
            ...data,
            results: [...prevData.results, ...data.results],
          };
        })
      );
  }, [page]);

  if (!data) {
    return <>loading...</>;
  }

  return (
    <div className="home">
      <div className="home__title">
        <h1>Lista de Personajes </h1>
        <hr></hr>
      </div>

      <InfiniteScroll
        dataLength={page * 20}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="home__character__card">
          {data.results.map((character) => (
            <Link to={`character/${character.id}`} key={character.id}>
              <CharactersCard character={character} />
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
