import Glow from "./Glow";

const Footer = () => {
    return (
        <footer className="w-full flex flex-col items-center gap-4 py-32">
            <div className="flex items-center gap-4">
                <Glow />
                <span className="text-[#fff]">Available for a full-time position</span>
            </div>
            <span className="text-[#fff]">&copy; 2025 Pelumi A.</span>
        </footer>
    );
};

export default Footer;
