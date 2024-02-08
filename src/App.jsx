import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, Error, MovieDetails } from "./pages";
import RootLayout from "./root/RootLayout";
import { loader as fetchAllMovie } from "./pages/Home";
import { loader as fetchSingleMovie } from "./pages/MovieDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route index loader={fetchAllMovie} element={<Home />} />
        <Route
          path="/detail/:imdbId"
          loader={fetchSingleMovie}
          element={<MovieDetails />}
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
