import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Learning Arabic Letters",
    description: "Learn Arabic letters with ease using Muallim Sani method.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/png" href={`${process.env.BASE_PATH}/logo.png`} />
            </head>
            <body className={inter.className}>
                <div className="fixed top-0 right-0 bg-red-500 text-white p-2 z-50 rounded-l-sm flex flex-col align-middle items-center print:hidden">
                    <div>Work In Progress</div>
                    <Link
                        className="bg-black rounded-[50%] w-6 h-6 flex items-center justify-center"
                        href="https://github.com/BBjamaat/learning-arabic-letters"
                    >
                        <GithubIcon className="inline-block w-4 h-4" />
                    </Link>
                </div>
                {children}
            </body>
        </html>
    );
}
