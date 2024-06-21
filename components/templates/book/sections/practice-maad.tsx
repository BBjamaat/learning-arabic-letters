import practiceMaad from "@/assets/practice-maad.json";
import { Separator } from "@/components/ui/separator";
import MaadWord from "../word/word-maad";

const SectionPracticeMaad = () => {
    return <>
        <Separator className="mb-4" />
        <div className="w-full flex justify-evenly items-center flex-row-reverse flex-wrap gap-16 p-6 font-arabic text-4xl">
            {practiceMaad.map((example, index) => (
                <MaadWord key={index} word={example} />
            ))}
        </div>
    </>
}

export default SectionPracticeMaad;