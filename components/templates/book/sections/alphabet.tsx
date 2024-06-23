import alphabet from "@/assets/alphabet.json";

const SectionAlphabet = () => {
    return (
        <div className="flex flex-row-reverse flex-wrap gap-x-16 gap-y-4 justify-evenly p-4">
            {alphabet.map((letter, index) => (
                <div key={index} className="flex flex-col gap-2 items-center">
                    <span className="text-4xl font-arabic">{letter.letter}</span>
                    <span className="text-muted-foreground text-sm">{letter.traslation}</span>
                </div>
            ))}
        </div>
    )
}

export default SectionAlphabet;