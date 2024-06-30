import SectionAlphabet from "./sections/alphabet";
import SectionLetters from "./sections/letters";
import SectionMaad from "./sections/maad";
import SectionPracticeMaad from "./sections/practice-maad";
import SectionTashdeed from "./sections/tashdeed";
import SectionTanween from "./sections/tanween";


const BookTemplate = () => {
    return <>
        <h1 className="text-center flex flex-col gap-4 mt-10">
            <span className="text-4xl font-arabic">﷽</span>
            <span className="text-sm">
                In the name of Allah, the Most Gracious, the Most Merciful!
            </span>
        </h1>

        <SectionAlphabet />
        <SectionLetters />
        <SectionMaad />
        <SectionPracticeMaad />
        <SectionTashdeed />
        <SectionTanween />
    </>
}

export default BookTemplate;