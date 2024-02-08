import axios from "axios";
import { apiKey } from "../constant";
import { useLoaderData } from "react-router-dom";
import styles from "../page_css/MovieDetails.module.css";
import Container from "../component/Container";

export async function loader(args) {
  const id = args.params.imdbId;
  try {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`
    );
    return res;
  } catch (err) {
    return false;
  }
}

function MovieDetails() {
  const data = useLoaderData();
  if (!data) {
    return (
      <Container>
        <div>
          <h1 className={styles.errorText}>Opps!! Something went wrong..</h1>
        </div>
      </Container>
    );
  }

  const movieData = data.data;
  const {
    Title,
    Poster,
    Released,
    Genre,
    Runtime,
    Language,
    Awards,
    Plot,
    Actors,
    Country,
    Director,
    imdbRating,
    imdbVotes,
    BoxOffice,
    Metascore,
    Rated,
  } = movieData;

  return (
    <Container>
      <div className={styles.detailsContainer}>
        <div className={styles.left}>
          <h3 className={styles.title}>{Title}</h3>
          <img src={Poster} className={styles.poster} alt={Title} />
          <div className={styles.basicInfo}>
            <div>
              <p>Release Date</p>
              <p>Genre</p>
              <p>Runtime</p>
              <p>Language</p>
              <p>Awards</p>
            </div>
            <div>
              <p>{Released}</p>
              <p>{Genre}</p>
              <p>{Runtime}</p>
              <p>{Language}</p>
              <p>{Awards}</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <h3>Plot</h3>
            <p>{Plot}</p>
          </div>
          <div>
            <h3>Acotors</h3>
            <p>{Actors}</p>
          </div>
          <div>
            <h3>Country</h3>
            <p>{Country}</p>
          </div>

          <h3>More Info</h3>
          <div className={styles.moreInfo}>
            <div>
              <p>Director</p>
              <p>imdb Rating</p>
              <p>imdb Votes</p>
              <p>Boxoffice</p>
              <p>Metascore</p>
              <p>Rated</p>
            </div>
            <div>
              <p>{Director}</p>
              <p>{imdbRating}</p>
              <p>{imdbVotes}</p>
              <p>{BoxOffice}</p>
              <p>{Metascore}</p>
              <p>{Rated}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MovieDetails;
