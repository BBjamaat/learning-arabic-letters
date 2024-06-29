import SectionAlphabet from "./sections/alphabet";
import SectionLetters from "./sections/letters";
import SectionMaad from "./sections/maad";
import SectionPracticeMaad from "./sections/practice-maad";
import SectionTashdeed from "./sections/tashdeed";
import SectionTanween from "./sections/tanween";


const BookTemplate = () => {
    return <div className="w-full max-w-3xl h-full m-auto p-4">

        <h1 className="text-center flex flex-col gap-4">
            <span className="text-4xl font-arabic">﷽</span>
            <span className="text-xl">
                In the name of Allah, the Most Gracious, the Most Merciful!
            </span>
        </h1>

        <SectionAlphabet />
        <SectionLetters />
        <SectionMaad />
        <SectionPracticeMaad />
        <SectionTashdeed />
        <SectionTanween />
    </div>
}

export default BookTemplate;