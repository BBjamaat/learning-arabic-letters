import practiceMaad from "@/assets/practice-maad.json";
import { Separator } from "@/components/ui/separator";
import Word from "../word";

const SectionPracticeMaad = () => {
    return <>
        <Separator className="mb-4" />
        <div className="w-full flex justify-evenly items-center flex-row-reverse flex-wrap gap-16 p-6 font-arabic text-4xl">
            {practiceMaad.map((example, index) => (
                <Word key={index} word={example} letters={["ا", "ي", "و"]} />
            ))}
        </div>
    </>
}

export default SectionPracticeMaad;