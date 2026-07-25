import { useEffect, useState } from "react";
import { getMovieDetails, getPopularMovies } from "../services/movies.service";

export function useMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);

  return movies;
}

export function useMovie(movieId: number) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return movie;
}
