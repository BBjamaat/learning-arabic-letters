import { Separator } from "@/components/ui/separator";
import tashdeed from "@/assets/tashdeed.json";
import TashdeedWord from "../word/word-tashdeed";

const SectionTashdeed = () => {
    return (<>
        <Separator className="mb-4" />
        <div>
            <h2 className="text-center text-2xl font-arabic mb-2">Tashdeed</h2>
            <p className="text-sm p-6">
                {tashdeed.description}
            </p>
        </div>
        <div className="text-4xl flex flex-col gap-6">
            <div className="w-full flex justify-evenly items-center flex-row-reverse text-red-500">
                {tashdeed.examples.map((ex, index) => <span key={index}>{ex}</span>)}
            </div>
            <div className="w-full flex justify-evenly items-center flex-row-reverse">
                {tashdeed.extraExamples.map((example, index) => (<>
                    <TashdeedWord key={index} word={example} />
                    {index < tashdeed.extraExamples.length - 1 &&
                        <Separator orientation="vertical" className="w-[1px] h-16" key={index} />}
                </>
                ))}
            </div>
            <div className="w-full flex justify-evenly items-center flex-row-reverse flex-wrap gap-16 p-6 font-arabic">
                {tashdeed.practice.map((word, index) => (
                    <TashdeedWord key={index} word={word} />
                ))}
            </div>
        </div>
    </>)
}

export default SectionTashdeed;