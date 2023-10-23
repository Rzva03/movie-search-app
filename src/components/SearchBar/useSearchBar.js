import { useCallback, useState } from "react";

const useSearchBar = (props) => {
    const {
        formRef,
        handleOnSearch
    } = props;
    const [isSearching, setIsSearching] = useState(false);
    const [errors, setErrors] = useState('');

    const handleOnValidate = useCallback((value) => {
        if (!value) {
            setErrors('Required');
            return
        }
        setErrors(null);
    }, []);

    const handleOnSubmit = useCallback((e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const search = formData.get('search');
        handleOnValidate(search);
        handleOnSearch(search)
    }, [formRef, handleOnSearch, handleOnValidate]);


    return {
        errors,
        isSearching,
        handleOnSubmit,
        setIsSearching
    }
}

export default useSearchBar;
