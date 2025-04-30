import FadeInSection from "./FadeInSection";
import { useState } from "react";

const WebsiteInfo = () => {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  const techStack = [
    { name: "React", description: "Frontend library for building UI components" },
    { name: "TypeScript", description: "Type-safe JavaScript for better code quality" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
    { name: "Vite", description: "Next-generation frontend tooling for faster development" },
    { name: "GitHub Pages", description: "Static site hosting directly from GitHub repository" },
  ];

  const cicdSteps = [
    {
      id: "setup",
      title: "Repository Setup",
      description: "Created a dedicated GitHub repository with a structured project setup for my portfolio website."
    },
    {
      id: "workflow",
      title: "Workflow Definition",
      description: "Configured a custom GitHub Actions workflow in .github/workflows/deploy.yml that triggers on pushes to the main branch."
    },
    {
      id: "build",
      title: "Automated Build Process",
      description: "Set up actions to install dependencies, run tests, and build the production-ready static files."
    },
    {
      id: "deploy",
      title: "Seamless Deployment",
      description: "Configured the action to automatically deploy the built assets to GitHub Pages using the gh-pages branch."
    },
    {
      id: "monitoring",
      title: "Status Monitoring",
      description: "Implemented workflow status badges and notifications to monitor deployment success."
    }
  ];

  return (
    <section id="website" className="w-full py-24 sm:py-32 px-6 sm:px-8 lg:ml-[10%] lg:px-24 bg-[#0a192f]">
      <div className="w-full max-w-7xl mx-auto">
        <FadeInSection delay={300}>
          <div className="flex items-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mr-4 whitespace-nowrap">
              <span className="text-teal-400 font-mono mr-2">03.</span>
              About This Website
            </h2>
            <div className="h-px bg-gray-700 flex-grow"></div>
          </div>
        </FadeInSection>

        <FadeInSection delay={300} direction="right">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6 text-gray-400">
              <p>
                I built this portfolio website as a showcase of my frontend development skills and to create a central hub for my professional information. The site is designed with performance, accessibility, and user experience as top priorities.
              </p>
              <p>
                The design follows modern web standards with a dark theme to reduce eye strain, carefully chosen color contrast ratios for readability, and smooth scroll behavior for navigation. I implemented a fully responsive layout that works seamlessly across devices of all sizes.
              </p>
              <p>
                For the implementation, I chose React with TypeScript for its robust component architecture and type safety. Tailwind CSS provided the utility-first approach that allowed for rapid development without sacrificing design flexibility.
              </p>
              <p>
                The build process is optimized with Vite, which significantly reduces development and build times compared to traditional bundlers. The code is maintained with ESLint configured with strict rules to ensure code quality.
              </p>
              <p>
                For hosting, I've deployed this site using <span className="text-teal-400">GitHub Pages</span>, which provides a seamless workflow from code to production. The site is served from my GitHub repository using the custom domain <span className="text-teal-400">jeyansaran620.github.io</span>. This approach offers reliable hosting with excellent performance and integrates perfectly with my development workflow through automated deployment actions.
              </p>
            </div>

            <FadeInSection delay={500} direction="left">
              <div className="md:col-span-1">
                <div className="bg-[#112240] rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl text-gray-200 font-bold mb-6 border-b border-gray-700 pb-2">
                    Tech Stack
                  </h3>

                  <ul className="space-y-4">
                    {techStack.map((tech, index) => (
                      <li
                        key={index}
                        className={`relative overflow-hidden rounded-md transition-all duration-300 
              ${hoveredTech === index ? 'transform translate-x-2' : ''}`}
                        onMouseEnter={() => setHoveredTech(index)}
                        onMouseLeave={() => setHoveredTech(null)}
                      >
                        <div
                          className={`
                absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/5
                backdrop-blur-[1px] rounded-md border border-teal-400/20
                transition-opacity duration-500 pointer-events-none
                ${hoveredTech === index ? 'opacity-100' : 'opacity-0'}
              `}
                        ></div>
                        <div className="relative z-10 p-3">
                          <span className={`font-bold transition-colors duration-300 ${hoveredTech === index ? 'text-teal-300' : 'text-teal-400'
                            }`}>
                            {tech.name}
                          </span>
                          <p className="text-sm mt-1 text-gray-400">{tech.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>
          </div>
        </FadeInSection>
        <FadeInSection delay={400}>
          <div className="mt-20">
            <h3 className="text-2xl text-gray-200 font-bold mb-8">
              <span className="text-teal-400">CI/CD Pipeline</span> with GitHub Actions
            </h3>

            <div className="bg-[#112240] rounded-lg p-8 shadow-lg">
              <p className="text-gray-300 mb-8">
                I implemented a robust continuous integration and deployment workflow that automatically builds and deploys my portfolio whenever I push changes to the main branch. This automation ensures my portfolio remains current with minimal manual intervention.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {cicdSteps.map((step, index) => (
                  <FadeInSection delay={300 + (index * 100)} direction={index % 2 === 0 ? "up" : "down"} key={step.id}>
                    <div
                      className={`relative bg-[#0a192f] rounded-lg p-5 border transition-all duration-300 h-full 
                        ${hoveredStep === step.id
                          ? 'border-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.3)] transform scale-105'
                          : 'border-teal-400/30 hover:border-teal-400/60'}`}
                      onMouseEnter={() => setHoveredStep(step.id)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      <div className={`absolute -top-3 -left-3 w-8 h-8 bg-teal-400 rounded-full flex items-center 
                        justify-center font-mono font-bold text-[#0a192f] transition-all duration-300
                        ${hoveredStep === step.id ? 'transform scale-110' : ''}`}>
                        {index + 1}
                      </div>

                      <h4 className="text-teal-400 font-bold mt-3 mb-3">{step.title}</h4>
                      <p className="text-sm text-gray-400">{step.description}</p>

                      <div className="mt-4 flex justify-center">
                        {step.id === 'setup' && (
                          <span className={`text-4xl transition-all duration-300 ${hoveredStep === step.id ? 'text-teal-300 transform rotate-12' : 'text-teal-400 opacity-70'
                            }`}>
                            <i className="ri-git-repository-line"></i>
                          </span>
                        )}
                        {step.id === 'workflow' && (
                          <span className={`text-4xl transition-all duration-300 ${hoveredStep === step.id ? 'text-teal-300 transform rotate-12' : 'text-teal-400 opacity-70'
                            }`}>
                            <i className="ri-flow-chart"></i>
                          </span>
                        )}
                        {step.id === 'build' && (
                          <span className={`text-4xl transition-all duration-300 ${hoveredStep === step.id ? 'text-teal-300 transform rotate-12' : 'text-teal-400 opacity-70'
                            }`}>
                            <i className="ri-code-box-line"></i>
                          </span>
                        )}
                        {step.id === 'deploy' && (
                          <span className={`text-4xl transition-all duration-300 ${hoveredStep === step.id ? 'text-teal-300 transform translate-y-[-4px]' : 'text-teal-400 opacity-70'
                            }`}>
                            <i className="ri-rocket-line"></i>
                          </span>
                        )}
                        {step.id === 'monitoring' && (
                          <span className={`text-4xl transition-all duration-300 ${hoveredStep === step.id ? 'text-teal-300 transform rotate-12' : 'text-teal-400 opacity-70'
                            }`}>
                            <i className="ri-dashboard-line"></i>
                          </span>
                        )}
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>

              <FadeInSection delay={900} direction="up">
                <div className="flex justify-center mt-10">
                  <a
                    href="https://github.com/jeyansaran620/portfolio/blob/main/.github/workflows/deploy.yml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-5 py-2 border border-teal-400 text-teal-400 rounded font-mono text-sm
                    hover:bg-teal-400 hover:bg-opacity-10 transition-all duration-300 ease-in-out"
                  >
                    <span className="mr-2 group-hover:animate-bounce">
                      <i className="ri-github-line"></i>
                    </span>
                    <span className="relative overflow-hidden">
                      <span className="group-hover:translate-y-full group-hover:inline-block group-hover:transition-transform group-hover:duration-300">View Workflow</span>
                      <span className="absolute left-0 -top-8 group-hover:translate-y-8 group-hover:transition-transform group-hover:duration-300">Explore Code</span>
                    </span>
                  </a>
                </div>
              </FadeInSection>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default WebsiteInfo;