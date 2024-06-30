import Word from "../word/word";
import { Separator } from "@/components/ui/separator";
import letters from "@/assets/letters.json";
import alphabet from "@/assets/alphabet.json";
import { FC, Fragment } from "react";
import Title from "@/components/atoms/title";
import Description from "@/components/atoms/description";
import Examples from "@/components/atoms/examples";
import Container from "@/components/atoms/container";


const SectionLetters = () => {
    return letters.map((letter, index) => {
        const letterName = alphabet.find((l) => l.letter === letter.letter)?.traslation || letter.letter;

        return (<Fragment key={index}>
            <Separator className="my-10" />
            <LetterSubsection
                letter={letter}
                letterName={letterName}
            />
        </Fragment>)
    });
}

interface LetterSubsectionProps {
    letter: {
        letter: string,
        description: string,
        examples: string[],
        practice: string[],
        important?: string[],
    },
    letterName: string
}

const LetterSubsection: FC<LetterSubsectionProps> = ({ letter, letterName }) => {
    return (
        <Container>
            <Title>
                {letterName}
            </Title>
            <Description>
                {letter.description}
            </Description>
            {(letter.examples.length > 0) && (
                <Examples className="text-red-500">
                    {letter.examples.map((ex, index) =>
                        <span key={index}>{ex}</span>)}
                </Examples>
            )}
            {(letter.practice.length > 0) && (
                <Examples className="mt-6">
                    {letter.practice.map((ex, index) =>
                        <Word key={index} word={ex} letter={letter.letter} />)}
                </Examples>
            )}
            {(letter?.important) && (<>
                <Description className="my-4">
                    Pay attention to the following examples:
                </Description>
                <Examples>
                    {letter.important.map((ex, index) =>
                        <Word key={index} word={ex} letter={letter.letter} />)}
                </Examples>
            </>)}
        </Container>
    );
};

export default SectionLetters;