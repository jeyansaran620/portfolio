import FadeInSection from "./FadeInSection";

const Contact = () => {
    return (
        <section id="contact" className="w-full py-24 sm:py-32 px-6 sm:px-8 bg-[#0a192f]">
            <div className="max-w-7xl mx-auto">
                <FadeInSection delay={400}>
                    <div className="flex items-center mb-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mr-4 whitespace-nowrap">
                            <span className="text-teal-400 font-mono mr-2">04.</span>
                            What's Next?
                        </h2>
                        <div className="h-px bg-gray-700 flex-grow"></div>
                    </div>
                </ FadeInSection>
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-6">Get In Touch</h3>

                    <div className="text-gray-400 mb-12 max-w-2xl mx-auto text-base sm:text-lg">
                        <p>
                            I'm currently open to new opportunities and collaborations. Whether you have a question, want to discuss a project, or just want to say hello, my inbox is always open. I'll do my best to get back to you promptly!
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-6">
                        <FadeInSection delay={600} direction="right">
                            <a
                                href="mailto:jeyansaran620@gmail.com"
                                className="inline-block px-4 py-2 sm:px-6 sm:py-3 border border-teal-400 text-teal-400 rounded font-mono text-sm
                            hover:bg-teal-400 hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-teal-400 
                            focus:ring-opacity-50 transition duration-300 ease-in-out"
                            >
                                Say Hello
                            </a>
                        </FadeInSection>
                        <FadeInSection delay={800}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 mt-5">
                                <a
                                    href="https://www.linkedin.com/in/jeyansaran620"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition duration-200"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/jeyansaran620"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition duration-200"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://leetcode.com/jeyansaran620/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition duration-200"
                                >
                                    LeetCode
                                </a>
                                <a
                                    href="https://www.geeksforgeeks.org/user/jeyansaran620/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition duration-200"
                                >
                                    GeeksForGeeks
                                </a>
                                <a
                                    href="https://www.hackerrank.com/profile/jeyansaran620"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition duration-200"
                                >
                                    HackerRank
                                </a>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;