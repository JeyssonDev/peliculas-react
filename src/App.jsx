import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddMovieView from "./views/AddMovieView";
import DetailsView from "./views/DetailsView";
import FavoritesView from "./views/FavoritesView";
import HomeView from "./views/HomeView";
import SearchView from "./views/SearchView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/:type/:id" element={<DetailsView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/favorite" element={<FavoritesView />} />
          <Route path="/add-movie" element={<AddMovieView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
