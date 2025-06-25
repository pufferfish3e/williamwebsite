import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/button';

export default function GoBack() {
    return (
        <div className="fixed top-4 left-4 z-50">
        <Link href="/" className="flex items-center gap-2 text-white hover:text-black transition-colors duration-300">
            <Button icon={<ArrowLeft className="w-4 h-4 mr-2" />} text="Home" />
        </Link>
        </div>
    );
}