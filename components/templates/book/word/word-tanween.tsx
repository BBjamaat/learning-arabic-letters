import { FC } from "react";

interface WordProps {
    word: string;
}


const TanweenWord: FC<WordProps> = ({ word }) => {
    return (
        <div className="relative m-auto">
            <div className="absolute top-0 right-0 -z-10" style={{ WebkitTextStroke: ".15px white" }}>
                {word.split("").map((char, i, arr) => {
                    const colored = (i < arr.length - 1) && (
                        arr[i + 1].charCodeAt(0) === 1611 ||
                        arr[i + 1].charCodeAt(0) === 1612 ||
                        arr[i + 1].charCodeAt(0) === 1613
                    )

                    return (
                        <span key={i} className={colored ? "text-red-500" : ""}>
                            {char}
                        </span>
                    );
                })}
            </div>
            <div className="select-none">
                {word.split("").map((char, i, arr) => {
                    // if char is tashkeel skip it
                    if (char.charCodeAt(0) >= 1611 && char.charCodeAt(0) <= 1618) {
                        return null;
                    }
                    const colored = (i > 0) && (
                        (char === "ا" && arr[i - 1].charCodeAt(0) === 1611) ||
                        (char === "ا" && arr[i - 1].charCodeAt(0) === 1612) ||
                        (char === "ا" && arr[i - 1].charCodeAt(0) === 1613)
                    )

                    return (
                        <span key={i} className={colored ? "text-red-500" : ""}>
                            {char}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

export default TanweenWord;