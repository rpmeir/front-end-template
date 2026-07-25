import { useParams } from "react-router";
import { useMovie } from "../../hooks/useMovies";
import styles from "./MovieDetail.module.css";

export function MovieDetail() {
    const { id } = useParams();
    const movie: any = useMovie(id ? Number.parseInt(id) : 0);
    return (
        movie && (
            <section className={styles.movie}>
                <figure className={styles.imageContainer}>
                    <img src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`} alt={movie.title} />
                </figure>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
            </section>
        )
    );
}
