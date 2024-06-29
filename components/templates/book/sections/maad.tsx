import maad from "@/assets/maad.json";
import MaadWord from "../word/word-maad";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";

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
                    {maad.examples.map((exampleSet, index) => (<Fragment key={index}>
                        {exampleSet.map((example, index) =>
                            <MaadWord word={example} key={index} />)}
                        {index < maad.examples.length - 1 &&
                            <Separator orientation="vertical" className="w-[1px] h-16" />}
                    </Fragment>
                    ))}
                </div>
                {(maad.practice.length > 0) && (
                    <div className="w-full flex justify-evenly items-strech gap-8 p-6 max-sm:flex-col">
                        {[...Array(3)].map((_, colIndex) => (<Fragment key={colIndex}>
                            <div className="flex flex-col gap-16 flex-1">
                                {maad.practice.filter((_, i) => i % 3 == colIndex).map((exs) =>
                                    <div key={exs} className="grid grid-cols-3">
                                        {exs.split(" ")
                                            .reverse()
                                            .map((ex) =>
                                                <MaadWord key={ex} word={ex} />
                                            )}
                                    </div>
                                )}
                            </div>
                            {colIndex < 2 && <div className="w-[1px] bg-border" />}
                        </Fragment>))}
                    </div>
                )}
            </div>
        </div>
    </>);
}

export default SectionMaad;