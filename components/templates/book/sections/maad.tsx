import maad from "@/assets/maad.json";
import Word from "../word";
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
                            <Word key={index} word={example} letter={example} />
                        </>)}
                        {index < maad.examples.length - 1 &&
                            <Separator orientation="vertical" className="w-[1px] h-16" />}
                    </>
                    ))}
                </div>
                {(maad.practice.length > 0) && (
                    <div className="w-full flex justify-evenly items-strech gap-8 p-6">
                        {[...Array(3)].map((_, colIndex) => (<>
                            <div className="flex flex-col gap-16 flex-1">
                                {maad.practice.filter((_, i) => i % 3 == colIndex).map((exs, index) =>
                                    <div key={index} className="grid grid-cols-3">
                                        {exs.split(" ").map((ex, subindex) =>
                                            <Word key={subindex} word={ex} letters={maad.letters} />
                                        )}
                                    </div>
                                )}
                            </div>
                            {colIndex < 2 &&
                                <div className="w-[1px] bg-border" />}
                        </>))}
                    </div>
                )}
            </div>
        </div>
    </>);
}

export default SectionMaad;