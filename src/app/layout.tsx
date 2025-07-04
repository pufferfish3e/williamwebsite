import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "William Surya Jaya",
    description: "Portfolio of William Surya Jaya, a Graphic Designer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} antialiased`}
            >
                {children}
                <Navbar />
            </body>
        </html>
    );
}
