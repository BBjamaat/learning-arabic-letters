import { Separator } from "@/components/ui/separator";
import tanween from "@/assets/tanween.json";
import TanweenWord from "../word/word-tanween";
import { Fragment } from "react";
import Container from "@/components/atoms/container";
import Examples from "@/components/atoms/examples";
import Description from "@/components/atoms/description";
import Title from "@/components/atoms/title";

const SectionTanween = () => {
    return (<>
        <Separator className="my-10" />
        <Container>
            <Title>
                Tanween
            </Title>
            <Description>
                {tanween.description}
            </Description>
            <Examples className="text-red-500">
                {tanween.examples.map((ex, index) => <span key={index}>{ex}</span>)}
            </Examples>
            <Examples className="mt-6">
                {tanween.extraExamples.map((example, index) => (<Fragment key={index}>
                    <TanweenWord word={example} />
                    {index < tanween.extraExamples.length - 1 &&
                        <Separator orientation="vertical" className="w-[1px] h-16" />}
                </Fragment>
                ))}
            </Examples>
            <Examples className="mt-6">
                {tanween.practice.map((word, index) => (
                    <TanweenWord key={index} word={word} />
                ))}
            </Examples>
        </Container >
    </>)
}

export default SectionTanween;