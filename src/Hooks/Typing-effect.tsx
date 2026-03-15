import { useEffect, useState, useRef } from "react";


export function useTypingEffect(
    textToType: string,
    interKeyStrokeDurationInMs: number,
    isActive: boolean = true
): string {
    const [currentPosition, setCurrentPosition] = useState<number>(0)
    const currentPositionRef = useRef<number>(0)

    useEffect(() => {
        if (!isActive) return
        const intervalId = setInterval(() => {
            setCurrentPosition((value) => value + 1)
            currentPositionRef.current += 1
            if (currentPositionRef.current > textToType.length) {
                clearInterval(intervalId)
            }
        }, interKeyStrokeDurationInMs)
        return () => {
            clearInterval(intervalId)
            currentPositionRef.current = 0
            setCurrentPosition(0)
        }
    }, [isActive, interKeyStrokeDurationInMs, textToType])

    return textToType.substring(0, currentPosition)
}
