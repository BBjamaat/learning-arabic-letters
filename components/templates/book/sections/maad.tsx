import maad from "@/assets/maad.json";
import MaadWord from "../word/word-maad";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";
import Title from "@/components/atoms/title";
import Container from "@/components/atoms/container";
import Description from "@/components/atoms/description";
import Examples from "@/components/atoms/examples";

const SectionMaad = () => {
    return (<>
        <Separator className="my-10" />
        <Container>
            <Title>Maad Letters</Title>
            <Description>{maad.description}</Description>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6 font-arabic text-4xl">
                    <Examples className="text-red-500 gap-6">
                        {maad.examples.map((exampleSet, index) => (<Fragment key={index}>
                            {exampleSet.map((example, index) =>
                                <MaadWord word={example} key={index} />)}
                            {index < maad.examples.length - 1 &&
                                <Separator orientation="vertical" className="w-[1px] h-16" />}
                        </Fragment>
                        ))}
                    </Examples>
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
        </Container >
    </>);
}

export default SectionMaad;