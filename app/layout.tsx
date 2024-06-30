import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/templates/footer";
import { cn } from "@/lib/utils";
import WorkInProgressLink from "@/components/templates/wip-link";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Learning Arabic Letters",
    description: "E-book that teaches reading arabic and tajweed following methods of Muallim Sani.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" type="image/png" href={`${process.env.BASE_PATH}/logo.png`} />
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased mx-auto w-full max-w-3xl max-md:px-4 max-md:max-w-full",
                    fontSans.variable,
                )}
            >
                <WorkInProgressLink />
                {children}
                <Footer />
            </body>
        </html>
    );
}
