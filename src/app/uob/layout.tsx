import GoBack from "@/components/ui/goback";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <GoBack />
            {children}
        </>
    );
}
