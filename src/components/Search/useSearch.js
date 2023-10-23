import { useCallback, useRef, useState } from 'react';

const OMDB_API = 'https://www.omdbapi.com/?apikey=f3327aa4&s=';

const useSearch = () => {
    const formRef = useRef(null);
    const [movies, setMovies] = useState([]);

    const handleOnSearch = useCallback(async (value) => {
        const data = await fetch(`${OMDB_API}${value}`);
        const moviesJson = await data.json();
        setMovies(moviesJson.Search);
    }, []);

    const handleOnReset = useCallback(() => {
        setMovies([]);
    }, []);

    return {
        formRef,
        movies,
        handleOnSearch,
        handleOnReset
    }
}

export default useSearch;
