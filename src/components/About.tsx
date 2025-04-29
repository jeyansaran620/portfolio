import FadeInSection from './FadeInSection';

const About = () => {
    const skills = [
        "Java", "JavaScript", "TypeScript", "Python",
        "React.js", "Node.js", "Spring Boot", "Reactive Spring",
        "HTML/CSS", "Jest", "JUnit", "Test-Driven Development"
    ];

    return (
        <section id="about" className="w-full py-24 sm:py-32 px-6 sm:px-8 lg:px-24 bg-[#0a192f]">
            <div className="w-full max-w-7xl mx-auto">
                <FadeInSection>
                    <div className="flex items-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mr-4 whitespace-nowrap">
                            <span className="text-teal-400 font-mono mr-2">01.</span>
                            About Me
                        </h2>
                        <div className="h-px bg-gray-700 flex-grow"></div>
                    </div>
                </FadeInSection>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="md:col-span-2 text-gray-400 space-y-4">
                        <FadeInSection delay={500} direction="right">
                            <p>
                                Hello! I'm Jeyan, a fullstack developer with a passion for building scalable
                                web applications that solve real-world problems.
                            </p>
                            <p>
                                My journey began at Government College of Technology where I earned my B.Tech
                                in Information Technology (2017-2021). Today, I'm working at
                                <span className="text-teal-400"> Walmart</span> as a Software Development Engineer,
                                specializing in the development of high-performance backend services and responsive user interfaces.
                            </p>
                            <p>
                                I thrive in building scalable applications using React, Spring Boot, and Node.js, with expertise
                                in test-driven development. My experience includes optimizing backend services for cart and checkout
                                systems, implementing feature toggling solutions, and enhancing UI components to improve user satisfaction.
                            </p>
                            <p>
                                Here are some technologies I've been working with recently:
                            </p>
                        </FadeInSection>
                        <FadeInSection delay={400}>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4">
                                {skills.map((skill, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-teal-400 mr-2">▹</span>
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeInSection>
                    </div>
                    <FadeInSection delay={500} direction="left">
                        <div className="md:col-span-1 relative group">
                            <div className="relative rounded overflow-hidden border-2 border-teal-400 w-3/4 sm:w-2/3 md:w-full mx-auto">
                                <div className="absolute inset-0 bg-teal-400 bg-opacity-30 group-hover:bg-opacity-0 transition duration-300"></div>

                                <img
                                    src="/images/Jeyan Karthikeyan.jpg"
                                    alt="Jeyan Karthikeyan"
                                    className="w-full h-auto filter grayscale group-hover:filter-none transition duration-300"
                                />
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
};

export default About;