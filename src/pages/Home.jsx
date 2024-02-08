import SearchForm from "../component/SearchForm";
import MovieList from "../component/MovieList";
import { apiKey } from "../constant";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Container from "../component/Container";

export async function loader(args) {
  const url = new URL(args.request.url);
  const searchTerm = url.searchParams.get("search") || "marvel";
  try {
    const movieSearchEndPoint = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
    const res = await axios.get(movieSearchEndPoint);
    return {
      movieApiResponse: res.data,
      searchTerm,
      isError: false,
      error: "",
    };
  } catch (err) {
    const errorMessage =
      err.message || err?.response?.data?.Error || "Something went wrong";
    return {
      movieApiResponse: null,
      searchTerm,
      isError: true,
      error: errorMessage,
    };
  }
}

function Home() {
  const data = useLoaderData();
  return (
    <Container>
      <div>
        <SearchForm searchTerm={data.searchTerm} />
        <MovieList data={data} />
      </div>
    </Container>
  );
}

export default Home;
