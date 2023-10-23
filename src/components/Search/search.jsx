import MovieContainer from "../MovieContainer/movieContainer";
import SearchBar from "../SearchBar/searchBar";
import useSearch from "./useSearch";

const Search = () => {
    const {
        formRef,
        movies,
        handleOnSearch,
        handleOnReset,
        isLoading
    } = useSearch();

    return (
        <div className='flex flex-col space-y-10 pt-10 justify-center items-center w-10/12 mx-auto'>
            <h1 className='text-2xl text-white font-medium text-center'>
                Welcome to SearchMovies
            </h1>
            <div className='w-full flex flex-col justify-center items-center space-y-10'>
                <SearchBar
                    formRef={formRef}
                    handleOnReset={handleOnReset}
                    handleOnSearch={handleOnSearch}
                />
                <MovieContainer
                    movies={movies}
                    isLoading={isLoading}
                />
                <div className='w-full h-1.5'></div>
            </div>
        </div>
    )
}

export default Search;
