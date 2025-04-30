const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#0a192f] py-8 px-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="hidden md:flex justify-center items-center">
                    <div className="text-gray-500 text-xs">
                        <p>© {currentYear} All Rights Reserved</p>
                    </div>
                </div>

                <div className="md:hidden flex flex-col items-center space-y-4">
                    <div className="text-gray-500 text-sm font-mono text-center">
                        <p>Designed & Built by Jeyan Karthikeyan</p>
                    </div>

                    <div className="text-gray-500 text-xs text-center">
                        <p>© {currentYear} All Rights Reserved</p>
                    </div>

                    <div className="mt-4">
                        <a
                            href="#home"
                            className="text-teal-400 text-xs font-mono border border-teal-400 rounded-full px-4 py-2 hover:bg-teal-400 hover:bg-opacity-10 transition-colors duration-200"
                            aria-label="Scroll to top"
                        >
                            ↑ Top
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;