import { FC } from "react";

interface WordProps {
    word: string;
}


const TashdeedWord: FC<WordProps> = ({ word }) => {
    return (
        <div className="relative m-auto">
            <div>
                {word.split("").map((char, i, arr) => {
                    const colored = (i < arr.length - 2) && (
                        arr[i + 2].charCodeAt(0) === 1617
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

export default TashdeedWord;