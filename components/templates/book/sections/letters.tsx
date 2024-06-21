import Word from "../word/word";
import { Separator } from "@/components/ui/separator";
import letters from "@/assets/letters.json";


const SectionLetters = () => {
    return (
        <div className="flex flex-col gap-6">
            {letters.map((letter, index) => {
                return (<>
                    <Separator className="mb-4" key={index + "sep"} />
                    <div className="flex flex-col gap-6 font-arabic text-4xl" key={index}>
                        <div className="w-full flex justify-evenly items-center flex-row-reverse text-red-500">
                            {letter.examples.map((ex, index) => <span key={index}>{ex}</span>)}
                        </div>
                        {(letter.practice.length > 0) && (
                            <div className="w-full flex justify-evenly items-center flex-row-reverse flex-wrap gap-16 p-6">
                                {letter.practice.map((ex, index) =>
                                    <Word key={index} word={ex} letter={letter.letter} />)}
                            </div>
                        )}
                        {(letter?.important) && (<>
                            <div className="text-sm px-6">
                                Pay attention to the following examples:
                            </div>
                            <div className="w-full flex justify-evenly items-center flex-row-reverse flex-wrap gap-16 p-6">
                                {letter.important.map((ex, index) =>
                                    <Word key={index} word={ex} letter={letter.letter} />)}
                            </div>
                        </>)}
                    </div >
                </>)
            })}
        </div>
    )
}

export default SectionLetters;