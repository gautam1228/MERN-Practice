import { useEffect, useState } from "react";

export function useDebouncedValue(value, delay){

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {

        const id = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(id);
        }

    }, [value, delay])

    return debouncedValue;

}