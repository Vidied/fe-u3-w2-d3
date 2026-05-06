import HeaderHome from "./assets/components/HeaderHome";
import FooterHome from "./assets/components/FooterHome";
import Gallery from "./assets/components/Gallery";
import Profile from "./assets/components/Profile";
import Settings from "./assets/components/Settings";
import { BrowserRouter, Routes, Route } from "react-router";
import TVShows from "./assets/components/TVShows";
import MoviesDetails from "./assets/components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-netflix d-flex flex-column min-vh-100">
        <HeaderHome />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/Profile" element={<Profile></Profile>}></Route>
            <Route path="/Settings" element={<Settings></Settings>}></Route>
            <Route path="/TVShows" element={<TVShows></TVShows>}></Route>
            <Route
              path="/MoviesDetails/:movieId"
              element={<MoviesDetails></MoviesDetails>}
            ></Route>
            <Route
              path="/"
              element={
                <>
                  <Gallery title="Trending Now" search="Star Wars" />
                  <Gallery title="Fantasy" search="Lord of the rings" />
                  <Gallery title="Anime" search="Pokémon" />
                </>
              }
            ></Route>
          </Routes>
        </main>
        <FooterHome />
      </div>
    </BrowserRouter>
  );
}

export default App;
