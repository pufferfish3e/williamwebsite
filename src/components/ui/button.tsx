interface ButtonProps {
    text: string;
    icon?: React.ReactNode;
}

export default function Button({text,icon}: ButtonProps) {
    return (
    <button className="flex flex-row justify-center items-center border-2 border-white rounded-full px-6 py-2 mr-6 hover:bg-white hover:text-black transition-colors duration-300">
        {icon}{text}
    </button>
    );
}