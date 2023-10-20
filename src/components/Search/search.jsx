import SearchBar from "../SearchBar/searchBar";

const Search = () => {
    return (
        <div className='h-screen w-full flex flex-col space-y-12 justify-center items-center'>
            <h1 className='text-2xl text-white font-medium'>
                Welcome to SearchMovies
            </h1>
            <SearchBar />
        </div>
    )
}

export default Search;
