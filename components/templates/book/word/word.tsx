import { FC } from "react";

interface WordProps {
    word: string;
    letter?: string;
}

const Word: FC<WordProps> = ({ word, letter }) => {
    const noTashkeel = word.replace(/[\u064B-\u0652]/g, "");

    return (
        <div className="relative m-auto">
            <div className="absolute top-0 right-0 -z-10" style={{ WebkitTextStroke: ".15px white" }}>
                {word}
            </div>
            <div className="select-none">
                {noTashkeel.split("").map((char, index) => {
                    const colored = letter === char;
                    return (
                        <span key={index} className={colored ? "text-red-500" : ""}>
                            {char}
                        </span>
                    );
                })}
            </div>
        </div >
    )
}

export default Word;