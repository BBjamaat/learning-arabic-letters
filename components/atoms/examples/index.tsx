import { cn } from "@/lib/utils";
import { FC } from "react";

interface ExamplesProps {
    children: React.ReactNode;
    className?: string;
}

const Examples: FC<ExamplesProps> = ({ children, className }) => {
    return (
        <div className={cn("text-4xl flex justify-evenly items-center flex-row-reverse flex-wrap gap-16 font-arabic", className)}>
            {children}
        </div>
    )
}

export default Examples;