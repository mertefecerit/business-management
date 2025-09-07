import { useEffect, useRef } from 'react';
import { emitter } from "next/client";

export function useEventListener<T = unknown>(
    event: string,
    handler: (data: T) => void
) {
    const handlerRef = useRef(handler);
    handlerRef.current = handler;

    useEffect(() => {
        const eventHandler = (data: T) => handlerRef.current(data);

        emitter.on(event, eventHandler);

        return () => {
            emitter.off(event, eventHandler);
        };
    }, [event]);
}