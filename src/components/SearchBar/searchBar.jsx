import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
    const {
        movieTitle,
        handleOnChange,
        handleOnReset
    } = props;

    return (
        <span className='p-input-icon-left w-full md:w-3/4'>
            <i className='pi pi-search' />
            {movieTitle && (
                <i className='pi pi-times cursor-pointer text-gray-500 hover:text-gray-700 absolute right-3' onClick={handleOnReset} />
            )}
            <InputText
                value={movieTitle}
                onChange={(e) => handleOnChange(e)}
                placeholder='Search'
                className='md:h-12 w-full rounded-3xl pr-4'
                autoFocus={true}
            />
        </span>
    )
}

SearchBar.propTypes = {
    movieTitle: PropTypes.string,
    handleOnChange: PropTypes.func,
    handleOnReset: PropTypes.func
}

export default SearchBar;
