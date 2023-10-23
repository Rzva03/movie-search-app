import { useCallback, useRef, useState } from 'react';

const OMDB_API = 'https://www.omdbapi.com/?apikey=f3327aa4&s=';

const useSearch = () => {
    const formRef = useRef(null);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleOnValidate = useCallback((value) => {
        if (!value) {
            return;
        }
    }, [])

    const handleOnFetch = useCallback(async(value) => {
        const data = await fetch(`${OMDB_API}${value}`);
        const moviesJson = await data.json();
        setMovies(moviesJson.Search);
    }, []);

    const handleOnChangeLoading = useCallback(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    const handleOnSearch = useCallback((value) => {
        handleOnValidate(value);
        setIsLoading(true);
        handleOnFetch(value)
        handleOnChangeLoading();
    }, [handleOnChangeLoading, handleOnFetch, handleOnValidate]);

    const handleOnReset = useCallback(() => {
        setMovies([]);
    }, []);

    return {
        formRef,
        movies,
        isLoading,
        handleOnSearch,
        handleOnReset
    }
}

export default useSearch;
