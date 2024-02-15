"use client"
import { useState, useEffect } from 'react';

type AnimatedTextProps = {
    text: string;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
    const [isWhite, setIsWhite] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsWhite((prevIsWhite) => !prevIsWhite);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <span
            className={`font-bold ${isWhite ? 'text-amber-200 text-4xl' : 'text-amber-400 text-4xl'} animate-pulse transition-all duration-500`}
        >
            {text}
        </span>
    );
};

export default AnimatedText;
