import type { Metadata } from "next";
import { Source_Code_Pro, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sourceSans = Source_Sans_3({
    variable: "--font-sans",
    subsets: ["vietnamese", "latin"],
});

export const metadata: Metadata = {
    title: "ppvan's Hub",
    description: "My personal space on the internet",
    authors: [{ name: "Phạm Văn Phúc" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={classNames(
                    sourceSans.variable,
                    "bg-stone-900 text-violet-50 lg:text-base text-sm font-sans max-w-screen-md lg:p-4 p-1 w-full flex flex-col gap-10 m-auto text-justify",
                )}
            >
                <Header></Header>
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}
