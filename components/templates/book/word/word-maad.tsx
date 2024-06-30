import { FC } from "react";

interface WordProps {
    word: string;
}

const MaadWord: FC<WordProps> = ({ word }) => {
    return (
        <div className="relative m-auto">
            <div className="absolute top-0 right-0 -z-10" style={{ WebkitTextStroke: ".15px white" }}>
                {word.split("").map((char, i, arr) => {
                    const colored = (i < arr.length - 2) && (
                        (arr[i + 2] === "ا" && arr[i + 1].charCodeAt(0) === 1614) ||
                        (arr[i + 2] === "ي" && arr[i + 1].charCodeAt(0) === 1616) ||
                        (arr[i + 2] === "و" && arr[i + 1].charCodeAt(0) === 1615)
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
                        (char === "ا" && arr[i - 1].charCodeAt(0) === 1614) ||
                        (char === "ي" && arr[i - 1].charCodeAt(0) === 1616) ||
                        (char === "و" && arr[i - 1].charCodeAt(0) === 1615)
                    )

                    return (
                        <span key={i} className={colored ? "text-red-500" : ""}>
                            {char}
                        </span>
                    );
                })}
            </div>
        </div>
    )
}



export default MaadWord;