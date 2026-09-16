import { useEffect, useState } from "react";

type useDebounceParams<T> = {
    value: T
    delay: number
}

export function useDebounce<T>({
    value,
    delay
}: useDebounceParams<T>): T {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            setDebounce(value);
        }, delay);

        return () => {
            clearTimeout(debounceTimer);
        };
    }, [value, delay]);

    return debounce;
}