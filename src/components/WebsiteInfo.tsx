import FadeInSection from "./FadeInSection";

const WebsiteInfo = () => {
  const techStack = [
    { name: "React", description: "Frontend library for building UI components" },
    { name: "TypeScript", description: "Type-safe JavaScript for better code quality" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
    { name: "Vite", description: "Next-generation frontend tooling for faster development" },
    { name: "ESLint", description: "Static code analysis for identifying problematic patterns" },
    { name: "GitHub Pages", description: "Static site hosting directly from GitHub repository" },
  ];

  return (
    <section id="website" className="w-full py-24 sm:py-32 px-6 sm:px-8 lg:px-24 bg-[#0a192f]">
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
                      <li key={index} className="text-gray-400">
                        <span className="text-teal-400 font-bold">{tech.name}</span>
                        <p className="text-sm mt-1">{tech.description}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-4 border-t border-gray-700">
                    <h4 className="text-gray-200 font-medium mb-3">Deployment Process</h4>
                    <ol className="list-decimal list-inside text-gray-400 text-sm space-y-2">
                      <li>Code pushed to GitHub repository</li>
                      <li>GitHub Actions workflow triggered</li>
                      <li>Automated build process runs</li>
                      <li>Static assets generated</li>
                      <li>Deployment to GitHub Pages</li>
                    </ol>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </ FadeInSection>
      </div>
    </section>
  );
};

export default WebsiteInfo;