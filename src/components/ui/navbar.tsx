import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Button from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="fixed bottom-0 flex items-center justify-center p-4 bg-black/70 text-white w-screen h-20 z-50">
            <div className="flex-1 flex flex-row">
                <Link
                    href="/"
                    className="flex flex-row text-xl font-bold text-[#C7F9DB]"
                >
                    <Phone className="text-green-700 mx-2" /> (+65) 83828512
                </Link>
                <Link
                    href="/about"
                    className=" flex flex-row text-xl font-bold ml-6 text-[#C7F9DB]"
                >
                    <Mail className="text-green-700 mx-2" />
                    sunvicstudio@gmail.com
                </Link>
            </div>
            <div className="flex-1 flex items-center justify-end">
                <Button text="View CV" />
            </div>
        </nav>
    );
}
