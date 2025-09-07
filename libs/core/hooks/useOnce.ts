import {useEffect, useRef} from "react";

export const useOnce = (callback: () => void) => {
    const hasRun = useRef(false);

    useEffect(() => {
        if (!hasRun.current) {
            hasRun.current = true;
            callback();
        }
    }, []);
};