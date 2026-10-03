import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Filip Dziopa - Full Stack Developer | Portfolio",
    description: "Portfolio Filipa Dziopy - Full Stack Developer specjalizujący się w React, Next.js i TypeScript. Zobacz moje projekty, doświadczenie i skontaktuj się ze mną.",
    keywords: ["Filip Dziopa", "Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Portfolio", "Web Developer", "JavaScript"],
    authors: [{ name: "Filip Dziopa" }],
    creator: "Filip Dziopa",
    openGraph: {
        type: "website",
        locale: "pl_PL",
        url: "https://filipdziopa.tech",
        title: "Filip Dziopa | Full Stack Developer",
        description: "Portfolio Filipa Dziopy...",
        siteName: "Filip Dziopa Portfolio",
        images: [
            {
                url: "https://filipdziopa.tech",
                width: 1200,
                height: 630,
                alt: "Filip Dziopa Portfolio Logo",
            }
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Filip Dziopa - Full Stack Developer",
        description: "Portfolio Filipa Dziopy - Full Stack Developer",
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="pl"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
