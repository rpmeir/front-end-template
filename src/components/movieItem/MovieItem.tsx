import { Link } from "react-router";
import styles from "./MovieItem.module.css";

export function MovieItem({ movie }: { readonly movie: any }) {
  return (
    <div className={styles.movie}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>
          <Link className={styles.detailsBtn} to={`/movies/${movie.id}`}>View Details</Link>
        </p>
    </div>
  );
}
