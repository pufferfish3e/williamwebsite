interface ButtonProps {
    text: string;
}

export default function Button({text}: ButtonProps) {
    return (
    <button className="border-2 border-white rounded-full px-6 py-2 mr-6 hover:bg-white hover:text-blue-500 transition-colors duration-300">
        {text}
    </button>
    );
}