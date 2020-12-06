import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  let List = [
    {
      title: "Gladiator",
      description:
        "Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire. Jaloux du prestige de Maximus, et plus encore de l'amour que lui voue l'empereur, le fils de Marc Aurèle, Commode, s'arroge brutalement le pouvoir, puis ordonne l'arrestation du général et son exécution. Maximus échappe à ses assassins, mais ne peut empêcher le massacre de sa famille. Capturé par un marchand d'esclaves, il devient gladiateur et prépare sa vengeance.",
      rate: 0,
      imgSrc: "/Gladiator.jpg",
    },
    {
      title: "Shawshank Redemprion",
      description:
        "En 1947, Andy Dufresne, un jeune banquier, est condamné à la prison à vie pour le meurtre de sa femme et de son amant. Ayant beau clamer son innocence, il est emprisonné à `Shawshank', le pénitencier le plus sévère de l'Etat du Maine. Il y fait la rencontre de Red, un homme désabusé, détenu depuis 20 ans. Commence alors une grande histoire d'amitié entre les deux hommes.",
      rate: 0,
      imgSrc: "/TheShawshank.jpg",
    },
    {
      title: "Spy Game ",
      description:
        "A l'heure de quitter la CIA, Nathan Muir apprend que son ex-partenaire, le jeune tom Bishop, vient d'être capturé en Chine lors d'une opération audacieuse. Accusé d'espionnage, il sera exécuté dans les 24 heures. La CIA, craignant un incident international, refuse de le sauver. Oubliant les rancoeurs, Nathan décide de s'en occuper lui-même. Pour lui commence alors sa mission la plus personnelle et la plus dangereuse.",
      rate: 0,
      imgSrc: "/SpyGame.jpg",
    },
  ];
  return (
    <div className="MovieCard">
      {List.map((movie) => (
        <MovieCard
          title={movie.title}
          description={movie.description}
          rate={movie.rate}
          imgSrc={movie.imgSrc}
        >
          <img src={movie.imgSrc} style={{ width: "250px" }} />
        </MovieCard>
      ))}
    </div>
  );
};
export default MovieList;
