import { Separator } from "@/components/ui/separator";
import tashdeed from "@/assets/tashdeed.json";
import TashdeedWord from "../word/word-tashdeed";
import { Fragment } from "react";
import Title from "@/components/atoms/title";
import Description from "@/components/atoms/description";
import Container from "@/components/atoms/container";
import Examples from "@/components/atoms/examples";

const SectionTashdeed = () => {
    return (<>
        <Separator className="my-10" />
        <Container>
            <Title>Tashdeed</Title>
            <Description>
                {tashdeed.description}
            </Description>
            <Examples className="text-red-500">
                {tashdeed.examples.map((ex, index) => <span key={index}>{ex}</span>)}
            </Examples>
            <Examples className="mt-6">
                {tashdeed.extraExamples.map((example, index) => (<Fragment key={index}>
                    <TashdeedWord word={example} />
                    {(index < tashdeed.extraExamples.length - 1) &&
                        <Separator orientation="vertical" className="w-[1px] h-16" />}
                </Fragment>))}
            </Examples>
            <Examples className="mt-6">
                {tashdeed.practice.map((word, index) => (
                    <TashdeedWord key={index} word={word} />
                ))}
            </Examples>

        </Container >
    </>)
}

export default SectionTashdeed;