import SectionAlphabet from "./sections/alphabet";
import SectionLetters from "./sections/letters";
import SectionMaad from "./sections/maad";
import SectionPracticeMaad from "./sections/practice-maad";
import SectionTanween from "./sections/tanween";
import SectionTashdeed from "./sections/tashdeed";


const BookTemplate = () => {
    return <div className="w-full h-full flex justify-center p-4">
        <div className="w-full max-w-3xl shadow-md rounded-md p-4 border">
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
        </div >
    </div >
}

export default BookTemplate;