import { Image } from 'primereact/image';
import PropTypes from 'prop-types';
import defaultStyles from './movieCard.module.css';

const MovieCard = (props) => {
    const {
        poster,
        year,
    } = props;

    return (
        <Image
            preview
            src={poster}
            alt={year}
            className={`w-9/12 mx-auto sm:w-1/3 md:w-1/6 sm:mx-0 ${defaultStyles.card}`}
        />
    );
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
}

export default MovieCard;
