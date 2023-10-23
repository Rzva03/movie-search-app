import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import defaultStyles from './templateCard.module.css';

const TemplateCard = (props) => {
    const {
        title,
        poster,
        year,
        imdbRating,
    } = props;

    const templateClass = 'absolute bg-gray-900 p-0.5 text-sm text-orange-300';

    return (
        <div className='templateCard w-full h-full flex flex-col px-2 bg-gray-800'>
            <div className='w-full h-1/2 md:h-2/3 relative px-1 templateCard__bg' style={{ backgroundImage: `url(${poster})` }}>
                <h4 className='truncate text-sm bg-gray-900 w-full'>{title}</h4>
                <span className={`${templateClass} left-0 bottom-0 `}>{year}</span>
                <div className={`${templateClass} right-0 bottom-0`}>
                    <span className='flex items-center'>
                        <i className='pi pi-star text-xs'></i>
                        &nbsp;
                        {imdbRating}
                    </span>
                </div>
            </div>
        </div>
    );
}

TemplateCard.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    imdbRating: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired
}

export default TemplateCard;
