import { Separator } from "@/components/ui/separator";
import tanween from "@/assets/tanween.json";
import TanweenWord from "../word/word-tanween";

const SectionTanween = () => {
    return (<>
        <Separator className="mb-4" />
        <div>
            <h2 className="text-center text-2xl font-arabic mb-2">Tanween</h2>
            <p className="text-sm p-6">
                {tanween.description}
            </p>
        </div>
        <div className="text-4xl flex flex-col gap-6">
            <div className="w-full flex justify-evenly items-center flex-row-reverse text-red-500">
                {tanween.examples.map((ex, index) => <span key={index}>{ex}</span>)}
            </div>
            <div className="w-full flex justify-evenly items-center flex-row-reverse">
                {tanween.extraExamples.map((example, index) => (<>
                    <TanweenWord key={index} word={example} />
                    {index < tanween.extraExamples.length - 1 &&
                        <Separator orientation="vertical" className="w-[1px] h-16" key={index} />}
                </>
                ))}
            </div>
            <div className="w-full flex justify-evenly items-center flex-row-reverse flex-wrap gap-16 p-6 font-arabic">
                {tanween.practice.map((word, index) => (
                    <TanweenWord key={index} word={word} />
                ))}
            </div>
        </div>
    </>)
}

export default SectionTanween;