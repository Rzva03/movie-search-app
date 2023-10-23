import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import defaultStyles from './searchBar.module.css';
import useSearchBar from './useSearchBar';

const SearchBar = (props) => {
    const {
        formRef,
        handleOnReset,
        handleOnSearch
    } = props;

    const {
        errors,
        handleOnSubmit,
        isSearching
    } = useSearchBar({
        formRef,
        handleOnSearch
    });

    return (
        <div className='w-full flex flex-col space-y-1 md:w-3/4 lg:w-1/2'>
            <form
                className='flex items-center space-x-0 w-full'
                ref={formRef}
                onSubmit={handleOnSubmit}
            >
                <span className='p-input-icon-left w-full'>
                    <i className='pi pi-search' />
                    {isSearching && (
                        <i className='pi pi-times cursor-pointer text-gray-500 hover:text-gray-700 absolute right-3' onClick={handleOnReset} />
                    )}
                    <InputText
                        placeholder='Avengers, Spider Man'
                        className={`w-full rounded-s-3xl pr-4 ${defaultStyles.searchBar__input} truncate`}
                        autoFocus={true}
                        name='search'
                    />
                </span>
                <Button label="Search" type='submit' className={`${defaultStyles.searchBar__button}`} />
            </form>
            {
                errors && (
                    <small className='text-red-400'>{errors}</small>
                )
            }
        </div>
    )
}

SearchBar.propTypes = {
    formRef: PropTypes.object,
    handleOnChange: PropTypes.func,
    handleOnReset: PropTypes.func,
    handleOnSearch: PropTypes.func
}

export default SearchBar;
