import maad from "@/assets/maad.json";
import MaadWord from "../word/word-maad";
import { Separator } from "@/components/ui/separator";

const SectionMaad = () => {
    return (<>
        <Separator className="mb-4" />
        <div>
            <h2 className="text-center text-2xl font-arabic mb-2">Maad Letters</h2>
            <p className="text-sm p-6">
                {maad.description}
            </p>
        </div>
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 font-arabic text-4xl">
                <div className="w-full flex justify-evenly items-center flex-row-reverse text-red-500">
                    {maad.examples.map((exampleSet, index) => (<>
                        {exampleSet.map((example, index) => <>
                            <MaadWord key={index} word={example} />
                        </>)}
                        {index < maad.examples.length - 1 &&
                            <Separator orientation="vertical" className="w-[1px] h-16" key={index} />}
                    </>
                    ))}
                </div>
                {(maad.practice.length > 0) && (
                    <div className="w-full flex justify-evenly items-strech gap-8 p-6">
                        {[...Array(3)].map((_, colIndex) => (<>
                            <div className="flex flex-col gap-16 flex-1" key={colIndex}>
                                {maad.practice.filter((_, i) => i % 3 == colIndex).map((exs, index) =>
                                    <div key={index} className="grid grid-cols-3">
                                        {exs.split(" ").reverse().map((ex, subindex) =>
                                            <MaadWord key={subindex} word={ex} />
                                        )}
                                    </div>
                                )}
                            </div>
                            {colIndex < 2 &&
                                <div className="w-[1px] bg-border" key={colIndex} />}
                        </>))}
                    </div>
                )}
            </div>
        </div>
    </>);
}

export default SectionMaad;