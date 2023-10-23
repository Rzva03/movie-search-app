import { useCallback, useState } from "react";

const useSearchBar = (props) => {
    const {
        formRef,
        handleOnSearch
    } = props;
    const [isSearching, setIsSearching] = useState(false);

    const handleOnSubmit = useCallback((e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const search = formData.get('search');
        handleOnSearch(search)
    }, [formRef, handleOnSearch]);

    return {
        isSearching,
        handleOnSubmit,
        setIsSearching
    }
}

export default useSearchBar;
