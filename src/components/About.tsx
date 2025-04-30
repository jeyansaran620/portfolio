import FadeInSection from './FadeInSection';
import { useState } from 'react';

const About = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const skills = [
        "Java", "JavaScript", "TypeScript", "Python",
        "React.js", "Redux", "Tailwind CSS", "HTML/CSS",
        "Spring Boot", "Reactive Spring", "Node.js", "Express",
        "Jest", "JUnit", "TDD", "Azure", "Git"
    ];

    return (
        <section id="about" className="w-full py-24 sm:py-32 px-6 sm:px-8 lg:px-24 lg:ml-[10%] bg-[#0a192f]">
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
                            <p className="text-base mb-6">
                                My journey began at Government College of Technology where I earned my B.Tech
                                in Information Technology (2017-2021). Today, I'm working at
                                <span className="text-teal-400"> Walmart</span> as a Software Development Engineer,
                                specializing in the development of high-performance backend services and responsive user interfaces.
                            </p>
                            <p className="text-base">
                                I thrive in building scalable applications using React, Spring Boot, and Node.js, with expertise
                                in test-driven development. My experience includes optimizing backend services for cart and checkout
                                systems, implementing feature toggling solutions, and enhancing UI components to improve user satisfaction.
                            </p>
                        </FadeInSection>

                        <FadeInSection delay={600}>
                            <div className="mt-10">
                                <h3 className="text-gray-200 font-semibold mb-6 flex items-center">
                                    <span className="text-teal-400 mr-2 text-sm">▹</span>
                                    Technologies I've worked with
                                </h3>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4">
                                    {skills.map((skill) => (
                                        <div
                                            key={skill}
                                            className="group relative pl-5"
                                            onMouseEnter={() => setHoveredSkill(skill)}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                        >
                                            <span className={`
                                                absolute left-0 top-1/2 transform -translate-y-1/2 text-xs transition-all duration-300 ease-in-out
                                                ${hoveredSkill === skill ? 'text-teal-400 translate-x-1' : 'text-gray-500'}
                                            `}>▹</span>

                                            <span className={`
                                                relative text-sm font-mono transition-all duration-300
                                                ${hoveredSkill === skill ? 'text-teal-300' : 'text-gray-400'}
                                            `}>
                                                {skill}

                                                {hoveredSkill === skill && (
                                                    <span className="absolute -inset-1 bg-teal-400/5 rounded-sm -z-10"></span>
                                                )}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeInSection>
                    </div>

                    <FadeInSection delay={500} direction="left">
                        <div className="md:col-span-1 relative group">
                            <div className="relative rounded overflow-hidden border-2 border-gray-700 w-3/4 sm:w-2/3 md:w-full mx-auto 
                                group-hover:border-teal-400 transition-colors duration-500">
                                <img
                                    src="/images/Jeyan Karthikeyan.jpg"
                                    alt="Jeyan Karthikeyan"
                                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-teal-400/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-teal-400/50 rounded z-[-1] 
                                transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
};

export default About;