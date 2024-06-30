import practiceMaad from "@/assets/practice-maad.json";
import { Separator } from "@/components/ui/separator";
import MaadWord from "../word/word-maad";
import Container from "@/components/atoms/container";
import Examples from "@/components/atoms/examples";

const SectionPracticeMaad = () => {
    return <>
        <Separator className="my-10" />
        <Container>
            <Examples>
                {practiceMaad.map((example, index) => (
                    <MaadWord key={index} word={example} />
                ))}
            </Examples>
        </Container>
    </>
}

export default SectionPracticeMaad;