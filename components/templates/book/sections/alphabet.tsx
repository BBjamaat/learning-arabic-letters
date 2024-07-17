import alphabet from "@/assets/alphabet.json";
import Container from "@/components/atoms/container";
import Examples from "@/components/atoms/examples";

const SectionAlphabet = () => {
    return (
        <Container>
            <Examples className="gap-y-4 mt-6">
                {alphabet.map((letter, index) => (
                    <div key={index} className="flex flex-col gap-2 items-center">
                        <span className="text-4xl font-arabic">{letter.letter}</span>
                        <span className="text-muted-foreground text-sm">{letter.transliteration}</span>
                    </div>
                ))}
            </Examples>
        </Container>
    )
}

export default SectionAlphabet;