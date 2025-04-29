import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [scrollDirection, setScrollDirection] = useState('none');
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY && currentScrollY > 80) {
                setScrollDirection('down');
            } else if (currentScrollY < prevScrollY) {
                setScrollDirection('up');
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollY]);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const scrollSettings = {
        smooth: true,
        duration: 800,
        spy: true,
        offset: -100,
        activeClass: "active"
    };

    return (
        <header
            className={`fixed w-full z-50 px-6 sm:px-12 py-4 backdrop-blur transition-all duration-300 
            ${scrollDirection === 'down' ? '-translate-y-full' : ''} 
            ${scrollDirection === 'up' ? 'shadow-lg bg-[#0a192f]/90' : 'bg-[#0a192f]'}`}
        >
            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    <ScrollLink
                        to="home"
                        {...scrollSettings}
                        className="text-2xl font-bold text-teal-400 cursor-pointer"
                    >
                        JK
                    </ScrollLink>
                </div>

                <div className="hidden md:block">
                    <ol className="flex space-x-8 text-sm text-gray-300">
                        <li>
                            <ScrollLink
                                to="about"
                                {...scrollSettings}
                                className="group transition duration-300 cursor-pointer"
                            >
                                <span className="group-hover:text-teal-400">About</span>
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="experience"
                                {...scrollSettings}
                                className="group transition duration-300 cursor-pointer"
                            >
                                <span className="group-hover:text-teal-400">Experience</span>
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="website"
                                {...scrollSettings}
                                className="group transition duration-300 cursor-pointer"
                            >
                                <span className="group-hover:text-teal-400">Website</span>
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="contact"
                                {...scrollSettings}
                                className="group transition duration-300 cursor-pointer"
                            >
                                <span className="group-hover:text-teal-400">Contact</span>
                            </ScrollLink>
                        </li>
                        <li>
                            <a
                                href="https://raw.githubusercontent.com/jeyansaran620/files/main/Jeyan_Karthikeyan_Software_Developer_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded border border-teal-400 text-teal-400 hover:bg-teal-400/10 transition duration-300"
                            >
                                Resume
                            </a>
                        </li>
                    </ol>
                </div>

                <button
                    className="md:hidden text-gray-300 focus:outline-none z-20"
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                >
                    <div className={`w-6 h-0.5 bg-teal-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-teal-400 my-1.5 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-teal-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </button>

                <div
                    className={`md:hidden fixed top-0 right-0 h-screen bg-[#112240] w-3/4 shadow-lg transform transition-all duration-300 ease-in-out z-10
                    ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="flex flex-col items-center justify-center h-full">
                        <ol className="flex flex-col space-y-8 text-center">
                            <li>
                                <ScrollLink
                                    to="about"
                                    {...scrollSettings}
                                    onClick={toggleMenu}
                                    className="text-lg cursor-pointer"
                                >
                                    <div className="text-gray-300 hover:text-teal-400">About</div>
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    to="experience"
                                    {...scrollSettings}
                                    onClick={toggleMenu}
                                    className="text-lg cursor-pointer"
                                >
                                    <div className="text-gray-300 hover:text-teal-400">Experience</div>
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    to="website"
                                    {...scrollSettings}
                                    onClick={toggleMenu}
                                    className="text-lg cursor-pointer"
                                >
                                    <div className="text-gray-300 hover:text-teal-400">Website</div>
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    to="contact"
                                    {...scrollSettings}
                                    onClick={toggleMenu}
                                    className="text-lg cursor-pointer"
                                >
                                    <div className="text-gray-300 hover:text-teal-400">Contact</div>
                                </ScrollLink>
                            </li>
                            <li className="mt-8">
                                <a
                                    href="https://raw.githubusercontent.com/jeyansaran620/files/main/Jeyan_Karthikeyan_Software_Developer_Resume.pdf"
                                    className="px-6 py-3 rounded border border-teal-400 text-teal-400 hover:bg-teal-400/10 inline-block"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={toggleMenu}
                                >
                                    Resume
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;