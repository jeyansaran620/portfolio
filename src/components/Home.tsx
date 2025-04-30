import FadeInSection from "./FadeInSection";

const Home = () => {
  return (
    <section id="home" className="w-full py-24 sm:py-32 px-6 sm:px-8 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-2xl text-teal-400 mb-6">Hi, my name is</p>

        <FadeInSection delay={500}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-200 tracking-tight hover:text-teal-300 transition-colors duration-300">
            Jeyan Karthikeyan.
          </h1>
        </FadeInSection>

        <FadeInSection delay={600}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-400 mt-2 sm:mt-4 tracking-tight">
            I craft <span className="text-teal-400">scalable</span> digital solutions.
          </h2>
        </FadeInSection>

        <FadeInSection delay={700}>
          <p className="text-gray-400 mt-8 max-w-3xl text-lg leading-relaxed">
            I'm a Fullstack Developer focused on building robust, efficient applications
            that solve complex business challenges. Currently at{" "}
            <span className="text-teal-400 relative group">
              Walmart
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </span>{" "}
            as a Software Development Engineer, where I develop high-performance backend services and
            create intuitive user interfaces.
          </p>
        </FadeInSection>

        <FadeInSection delay={800} direction="right">
          <div className="mt-12 flex space-x-4">
            <a
              href="https://raw.githubusercontent.com/jeyansaran620/files/main/Jeyan_Karthikeyan_Software_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-4 border border-teal-400 text-teal-400 rounded font-mono text-sm
                hover:bg-teal-400 hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-teal-400
                focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Check Resume
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Home;