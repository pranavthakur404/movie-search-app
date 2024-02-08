import { Link, Outlet, useNavigation } from "react-router-dom";
import Header from "../component/Header";
import spinner from "../assests/Spinner-1s-200px.svg";

function RootLayout() {
  const loading = useNavigation();
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        {loading.state === "loading" ? (
          <img src={spinner} className="spinner" alt="loading" />
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
}

export default RootLayout;
