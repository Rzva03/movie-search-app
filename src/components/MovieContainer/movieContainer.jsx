import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/movieCard';

const MovieContainer = (props) => {
    const {
        movies
    } = props;

    if (movies === undefined) {
        return
    }

    return (
        <main className='w-full grid grid-cols-4 gap-6'>
            {movies.map((movie) => (
                <MovieCard
                    key={`movie__${movie.imdbID}`}
                    title={movie.Title}
                    poster={movie.Poster}
                    year={movie.Year}
                />
            ))}
        </main>
    );
}

MovieContainer.propTypes = {
    movies: PropTypes.array
}

export default MovieContainer;
