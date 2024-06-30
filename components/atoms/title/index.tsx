import { FC } from "react";

interface TitleProps {
    children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
    return (
        <h1 className="text-center text-2xl font-semibold capitalize">
            {children}
        </h1>
    )
}

export default Title;