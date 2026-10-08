import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://filipdziopa.tech"),
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
        description: "Portfolio Filipa Dziopy - Full Stack Developer specjalizujący się w React, Next.js i TypeScript. Zobacz moje projekty, doświadczenie i skontaktuj się ze mną.",
        siteName: "Filip Dziopa Portfolio",
        images: [
            {
                url: "/favicon.png",
                width: 236,
                height: 228,
                alt: "Filip Dziopa Portfolio Logo",
            }
        ],
    },
    twitter: {
        card: "summary",
        title: "Filip Dziopa - Full Stack Developer",
        description: "Portfolio Filipa Dziopy - Full Stack Developer specjalizujący się w React, Next.js i TypeScript.",
        images: ["/favicon.png"],
    },
};

export default function RootLayout({children,}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Filip Dziopa",
        "url": "https://filipdziopa.tech",
        "jobTitle": "Full Stack Developer",
        "knowsAbout": ["Web Development", "React", "Next.js", "Node.js", "TypeScript", "MySQL", "JavaScript", "AI Integration"],
        "sameAs": [
            "https://github.com/Dziopino",
            "https://www.linkedin.com/in/filip-dziopa/"
        ]
    };

    return (
        <html
            lang="pl"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">
        {children}

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        </body>
        </html>
    );
}
