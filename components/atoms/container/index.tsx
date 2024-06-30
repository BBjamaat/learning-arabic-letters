import { FC } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={cn("w-full flex flex-col px-6 gap-4", className)}>
            {children}
        </div>
    )
}

export default Container;