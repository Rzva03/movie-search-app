import { Image } from 'primereact/image';
import PropTypes from 'prop-types';
import defaultStyles from './movieCard.module.css';
import defaultPlaceholder from '../../assets/img/default-placeholder.png';

const WITHOUT_POSTER = 'N/A';

const MovieCard = (props) => {
    const {
        poster,
        year,
    } = props;
    console.log("🚀 ~ file: movieCard.jsx:10 ~ MovieCard ~ poster:", poster)

    return (
        <Image
            preview
            src={poster === WITHOUT_POSTER ? defaultPlaceholder : poster}
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
