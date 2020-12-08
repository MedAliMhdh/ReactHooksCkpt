import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Form, Col } from "react-bootstrap";
import FilterMv from "./FilterMv";

const MovieList = () => {
  const [MovieAdd, setMovieAdd] = useState(false);
  let [MovieTitle, setMovieTitle] = useState("MovieName");
  let [MovieDescrip, setMovieDescrip] = useState("MovieDescrip");
  let [MovieRate, setMovieRate] = useState(0);
  let [MoviePosterUrl, setPosterUrl] = useState("/url");
  let [searchedMv, setsearchedMv] = useState("");

  let [List, setList] = useState([
    {
      title: "Gladiator",
      description:
        "The Roman general Maximus is the most faithful support of the emperor Marcus Aurelius, whom he led from victory to victory. Jealous of Maximus 'prestige, and even more of the emperor's love for him, Marcus Aurelius' son, Commodus, brutally arrogates himself to power, then orders the general's arrest and execution. Maximus escapes his assassins, but cannot prevent the slaughter of his family. Captured by a slave trader, he becomes a gladiator and prepares his revenge.",
      rate: 0,
      imgSrc: "/Gladiator.jpg",
    },
    {
      title: "Shawshank Redemprion",
      description:
        "In 1947, Andy Dufresne, a young banker, was sentenced to life in prison for the murder of his wife and her lover. Despite claiming his innocence, he was imprisoned in Shawshank, the most severe penitentiary in the state of Maine. There he meets Red, a disillusioned man, detained for 20 years. Then begins a great story of friendship between the two men.",
      rate: 0,
      imgSrc: "/TheShawshank.jpg",
    },
    {
      title: "Spy Game ",
      description:
        "At the time of leaving the CIA, Nathan Muir learns that his ex-partner, the young tom Bishop, has just been captured in China during a daring operation. Accused of espionage, he will be executed within 24 hours. The CIA, fearing an international incident, refuses to save him. Forgetting the resentment, Nathan decides to take care of it himself. For him then begins his most personal and most dangerous mission.",
      rate: 0,
      imgSrc: "/SpyGame.jpg",
    },
    {
      title: "Titanic",
      description:
        "In 1997, the wreckage of the Titanic was the subject of a feverish exploration, led by treasure seekers in search of a blue diamond that emerges on board. Struck by a television report, one of the survivors of the shipwreck, aged 102, Rose DeWitt, goes there and talks about her memories. 1912. Engaged to an arrogant industrialist, Rose meets a penniless artist on the boat.",
      rate: 0,
      imgSrc: "/Titanic.jpg",
    },
  ]);

  const handleForm = () => setMovieAdd(true);

  const confirmAdd = () => {
    setList([
      ...List,
      {
        title: MovieTitle,
        description: MovieDescrip,
        rate: MovieRate,
        imgSrc: MoviePosterUrl,
      },
    ]);

    setMovieAdd(false);
  };

  const confirmSearch = () => {
    setList(List.filter((movie, i) => movie.title[i] == searchedMv[i]));
  };

  const onSearchHandler = (keywords) => {
    setsearchedMv(keywords);
  };

  return (
    <div className="MovieList">
      <div style={{ display: "flex" }}>
        <FilterMv onSearchHandler={onSearchHandler} />
        <button className="ConfirmAddMovieBtn" onClick={confirmSearch}>
          Search
        </button>
      </div>
      {List.map((movie, i) => (
        <MovieCard
          key={i}
          title={movie.title}
          description={movie.description}
          rate={movie.rate}
          imgSrc={movie.imgSrc}
        >
          <img src={movie.imgSrc} style={{ width: "250px" }} />
        </MovieCard>
      ))}

      <a href="#bottomBtn">
        <button className="AddMovieBtn" onClick={handleForm}>
          Add Movie
        </button>
      </a>
      <div>
        {MovieAdd === true && (
          <Form className="AddMovieForm">
            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label>Movie title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Movie title"
                    onChange={(e) => setMovieTitle(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Movie rate</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Movie Rate"
                    onChange={(e) => setMovieRate(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group>
              <Form.Label>Movie description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Movie description"
                onChange={(e) => setMovieDescrip(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Movie Poster URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Poster URL"
                onChange={(e) => setPosterUrl(e.target.value)}
              />
            </Form.Group>
            <button
              id="bottomBtn"
              className="ConfirmAddMovieBtn"
              variant="primary"
              onClick={confirmAdd}
            >
              Confirm
            </button>
          </Form>
        )}
      </div>
    </div>
  );
};
export default MovieList;
