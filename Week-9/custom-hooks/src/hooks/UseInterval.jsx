import { useEffect } from "react";

export function useInterval(fn , n) {

    useEffect(() => {

        const id = setInterval(() => {
            fn();
        }, n);

        return () => {
            clearInterval(id);
        }

    }, [n, fn]);

}