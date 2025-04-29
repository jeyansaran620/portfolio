import FadeInSection from "./FadeInSection";

const Experience = () => {
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
            tech: "Java | Reactive Spring Boot | JavaScript | Azure | CosmosDB"
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
            tech: "Java | Spring Boot | React | Azure DevOps | Pact | Flagr"
        }
    ];

    return (
        <section id="experience" className="w-full py-24 sm:py-32 px-6 sm:px-8 lg:px-24 bg-[#0a192f]">
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
                        <FadeInSection delay={500} direction="left">
                            <div key={index} className="border-l-2 border-gray-700 pl-6 ml-2">
                                <div className="text-gray-200 mb-2 text-xl font-medium">
                                    {exp.role}{" "}
                                    <span className="text-teal-400">@ {exp.company}</span>
                                </div>
                                <div className="text-gray-400 mb-5 font-mono text-sm">
                                    {exp.duration}
                                </div>
                                <ul className="text-gray-400 space-y-4">
                                    {exp.responsibilities.map((item, i) => (
                                        <li key={i} className="flex">
                                            <span className="text-teal-400 mr-2 mt-1">▹</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-gray-400 mt-6 font-mono text-xs">
                                    {exp.tech}
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
                    <FadeInSection delay={400} >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-[#112240] p-6 rounded shadow-md">
                                <h4 className="text-gray-200 font-medium mb-2">Bravo Award - 2024</h4>
                                <p className="text-gray-400 text-sm">
                                    Recognized with Bravo Award for exceptional contributions towards Sam's backend team initiatives,
                                    showcasing strong backend development skills and teamwork.
                                </p>
                            </div>
                            <div className="bg-[#112240] p-6 rounded shadow-md">
                                <h4 className="text-gray-200 font-medium mb-2">Inspirer Recognition</h4>
                                <p className="text-gray-400 text-sm">
                                    Revamped UI components by reducing bugs and enhancing responsiveness,
                                    earning the 'Inspirer' recognition for outstanding front-end development expertise.
                                </p>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
};

export default Experience;