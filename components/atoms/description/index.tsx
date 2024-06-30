import { FC } from "react";
import { cn } from "@/lib/utils";

interface DescriptionProps {
    children: React.ReactNode;
    className?: string;
}

const Description: FC<DescriptionProps> = ({ children, className }) => {
    return (
        <p className={cn("text-sm", className)}>
            {children}
        </p>
    )
}

export default Description;