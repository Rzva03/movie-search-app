import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/movieCard';
import Skeleton from '../Skeleton/skeleton';
import NoData from '../NoData/noData';

const MovieContainer = (props) => {
    const {
        movies,
        isLoading
    } = props;

    if (movies === undefined) {
        return <NoData />
    }

    return (
        <main className='w-full grid grid-cols-1 md:grid-cols-5 gap-6'>
            {isLoading ? (
                <Skeleton />
            ) : (
                movies.map((movie) => (
                    <MovieCard
                        key={`movie__${movie.imdbID}`}
                        title={movie.Title}
                        poster={movie.Poster}
                        year={movie.Year}
                    />
                ))
            )}
        </main>
    );
}

MovieContainer.propTypes = {
    movies: PropTypes.array,
    isLoading: PropTypes.bool
}

export default MovieContainer;
