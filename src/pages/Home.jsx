import { MovieCard } from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { getPopularMovies } from "../services/api";
export function Home() {
  const [searchQuery, setsearchQuery] = useState("");

  const [movies, setmovies] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setmovies(popularMovies);
      } catch (err) {
        console.log(err);
        seterror("failed to load movies...");
      } finally {
        setloading(false);
      }
    };

    loadPopularMovies();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter movie name"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>

      {error && <div className="error">{error}</div>}

      {loading ? (
            <div className="laoding"> Loading...</div>
      ) : (
            <div className="movies-grid">
              {movies.map(
                (movie) =>
                  movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id}></MovieCard>
                  )
              )}
            </div>
          )}


    </div>
  );
}
