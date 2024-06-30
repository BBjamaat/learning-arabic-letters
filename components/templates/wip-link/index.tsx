import { GithubIcon } from "lucide-react";
import Link from "next/link";

const WorkInProgressLink = () => (
    <div className="fixed top-0 right-0 bg-orange-500 text-white p-2 z-50 rounded-bl-lg flex flex-col align-middle items-center print:hidden">
        <div>Work In Progress</div>
        <Link
            className="bg-black rounded-[50%] w-6 h-6 flex items-center justify-center"
            href="https://github.com/BBjamaat/learning-arabic-letters"
        >
            <GithubIcon className="inline-block w-4 h-4" />
        </Link>
    </div>
);

export default WorkInProgressLink;