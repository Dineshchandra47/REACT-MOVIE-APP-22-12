import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import MovieList from './Components/MovieList/MovieList';
import Movie from './Pages/MovieDetails/Movie';
import './App.css';
import PageNotFound from "./Pages/Page 404/Page404";

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<PageNotFound/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;