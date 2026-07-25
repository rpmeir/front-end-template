import { moviesApi } from '../config/http';

export function getPopularMovies() {
  return moviesApi.get('/movie/popular').then((response) => response.data.results);
}

export function getMovieDetails(movieId: number) {
  return moviesApi.get(`/movie/${movieId}`).then((response) => response.data);
}
