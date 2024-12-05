import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favorites.css"

export function Favorites() {

    const {favorites} = useMovieContext();

    if (!favorites.length) {
      return <div>No favorites added yet!</div>;
  }

  return (
      <div className="movies-grid">
          {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
  );

    
  }