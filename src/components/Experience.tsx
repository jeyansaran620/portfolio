import FadeInSection from "./FadeInSection";
import { useState } from "react";

const Experience = () => {
    const [hoveredExp, setHoveredExp] = useState<number | null>(null);
    const [hoveredAward, setHoveredAward] = useState<number | null>(null);

    const experiences = [
        {
            company: "Walmart",
            role: "SDE-III",
            duration: "Dec 2023 - Present",
            responsibilities: [
                "Engineered and optimized backend services using Java Spring Boot for Cart, Checkout, and Chakra — an internal platform managing slot and capacity scheduling for club managers.",
                "Supported the integration of Sam's backend with Walmart's backend APIs to develop the Walmart Commerce Platform (WCP), reducing maintenance requirements by 20%.",
                "Enhanced the frontend UI for Chakra using JavaScript, fixing critical bugs and improving user experience, resulting in a 20% increase in user satisfaction.",
                "Implemented new fulfillment types in the appointment scheduling platform, driving a 25% increase in user participation and a 30% boost in sales."
            ],
            tech: ["Java", "Reactive Spring Boot", "JavaScript", "Azure", "CosmosDB"]
        },
        {
            company: "ThoughtWorks",
            role: "Consultant Developer",
            duration: "June 2021 - Dec 2023",
            responsibilities: [
                "Improved the event-handling capabilities of a Betting Platform API, making it more adaptable to changes, resulting in a notable 28% increase in platform users.",
                "Implemented a controlled deployment process using Pacts for a banking client, enhancing system reliability across teams and reducing debugging time in development environments by 25%.",
                "Introduced a system to enable or disable features in our application using Flagr service, resulting in a 15% boost in system flexibility."
            ],
            tech: ["Java", "Spring Boot", "React", "Node", "Express", "Azure DevOps"]
        }
    ];

    return (
        <section id="experience" className="w-full py-24 sm:py-32 px-6 sm:px-8 lg:ml-[10%] lg:px-24 bg-[#0a192f]">
            <div className="w-full max-w-7xl mx-auto">
                <FadeInSection delay={400}>
                    <div className="flex items-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mr-4 whitespace-nowrap">
                            <span className="text-teal-400 font-mono mr-2">02.</span>
                            Where I've Worked
                        </h2>
                        <div className="h-px bg-gray-700 flex-grow"></div>
                    </div>
                </FadeInSection>
                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <FadeInSection delay={500} direction="left" key={index}>
                            <div 
                                className={`
                                    relative rounded-lg overflow-hidden transition-all duration-500
                                    ${hoveredExp === index 
                                        ? 'pl-6 shadow-lg shadow-teal-400/10' 
                                        : 'pl-6 ml-2'
                                    }
                                `}
                                onMouseEnter={() => setHoveredExp(index)}
                                onMouseLeave={() => setHoveredExp(null)}
                            >
                                <div 
                                    className={`
                                        absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5
                                        backdrop-blur-[1px] rounded-lg border border-teal-400/10
                                        transition-opacity duration-500 pointer-events-none
                                        ${hoveredExp === index ? 'opacity-100' : 'opacity-0'}
                                    `}
                                ></div>
                                                                <div 
                                    className={`
                                        absolute left-0 top-0 bottom-0 w-1 
                                        transition-all duration-500
                                        ${hoveredExp === index 
                                            ? 'bg-teal-400 w-1.5' 
                                            : 'bg-gray-700'
                                        }
                                    `}
                                ></div>
                                <div className="relative z-10 p-5">
                                    <div className="text-gray-200 mb-2 text-xl font-medium">
                                        {exp.role}{" "}
                                        <span className={`transition-colors duration-300 ${
                                            hoveredExp === index ? 'text-teal-300' : 'text-teal-400'
                                        }`}>
                                            @ {exp.company}
                                        </span>
                                    </div>
                                    <div className="text-gray-400 mb-5 font-mono text-sm">
                                        {exp.duration}
                                    </div>
                                    <ul className="text-gray-400 space-y-4">
                                        {exp.responsibilities.map((item, i) => (
                                            <li key={i} className="flex group">
                                                <span className="text-teal-400 mr-2 mt-1 transition-transform duration-300 group-hover:translate-x-1">▹</span>
                                                <span className="group-hover:text-gray-300 transition-colors duration-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <div className="mt-6">
                                        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
                                            {exp.tech.map((skill, i) => (
                                                <span 
                                                    key={i} 
                                                    className="text-teal-400 hover:text-teal-200 transition-all duration-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
                
                <div className="mt-20">
                    <div className="flex items-center mb-6">
                        <h3 className="text-xl font-bold text-gray-200 mr-4 whitespace-nowrap">
                            <span className="text-teal-400 font-mono mr-2">✓</span>
                            Awards & Recognitions
                        </h3>
                        <div className="h-px bg-gray-700 flex-grow"></div>
                    </div>
                    <FadeInSection delay={400}>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Bravo Award - 2024",
                                    description: "Recognized with Bravo Award for exceptional contributions towards Sam's backend team initiatives, showcasing strong backend development skills and teamwork."
                                },
                                {
                                    title: "Inspirer Recognition",
                                    description: "Revamped UI components by reducing bugs and enhancing responsiveness, earning the 'Inspirer' recognition for outstanding front-end development expertise."
                                }
                            ].map((award, index) => (
                                <div 
                                    key={index}
                                    className={`bg-[#112240] p-6 rounded shadow-md transition-all duration-300 cursor-default
                                    ${hoveredAward === index 
                                        ? 'transform translate-y-[-5px] shadow-lg shadow-teal-400/20' 
                                        : 'hover:transform hover:translate-y-[-3px]'
                                    }`}
                                    onMouseEnter={() => setHoveredAward(index)}
                                    onMouseLeave={() => setHoveredAward(null)}
                                >
                                    <h4 className={`font-medium mb-2 flex items-center ${
                                        hoveredAward === index ? 'text-teal-400' : 'text-gray-200'
                                    } transition-colors duration-300`}>
                                        <span className="mr-2">
                                            <i className={`ri-award-fill transition-transform duration-300 ${
                                                hoveredAward === index ? 'animate-pulse' : ''
                                            }`}></i>
                                        </span>
                                        {award.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        {award.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
};

export default Experience;