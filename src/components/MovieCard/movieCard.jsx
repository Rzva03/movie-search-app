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
            className={`${defaultStyles.card}`}
        />
    );
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
}

export default MovieCard;
