import MovieCard from "../component/MovieCard";
import styles from "../component_css/MovieList.module.css";

function MovieList({ data }) {
  const { movieApiResponse, isError, error } = data;

  if (isError) {
    return <h1>{error}</h1>;
  }

  if (movieApiResponse && movieApiResponse.Response === "False") {
    return <h1>{movieApiResponse.Error || "Move Not Found !"} </h1>;
  }
  return (
    <div className={styles.container}>
      {movieApiResponse.Search &&
        movieApiResponse.Search.map((movie) => {
          return <MovieCard key={movie.imdbID} {...movie} />;
        })}
    </div>
  );
}

export default MovieList;
