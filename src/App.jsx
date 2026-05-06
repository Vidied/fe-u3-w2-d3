import HeaderHome from "./assets/components/HeaderHome";
import FooterHome from "./assets/components/FooterHome";
import Gallery from "./assets/components/Gallery";
import Profile from "./assets/components/Profile";
import Settings from "./assets/components/Settings";

function App() {
  return (
    <div className="bg-netflix d-flex flex-column min-vh-100">
      <HeaderHome />
      <Profile></Profile>
      <Settings></Settings>
      <main className="flex-grow-1">
        <Gallery title="Trending Now" search="Star Wars" />
        <Gallery title="Fantasy" search="Lord of the rings" />
        <Gallery title="Anime" search="Pokémon" />
      </main>
      <FooterHome />
    </div>
  );
}

export default App;
