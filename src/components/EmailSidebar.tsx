import FadeInSection from "./FadeInSection";

const EmailSidebar = () => {
    return (
        <div className="fixed right-6 bottom-0 z-10 hidden xl:block">
            <FadeInSection delay={800} direction="down">
                <div className="flex flex-col items-center after:content-[''] after:w-px after:h-24 after:bg-gray-400 after:block after:mx-auto after:mt-6">
                    <a
                        href="mailto:jeyansaran620@gmail.com"
                        className="font-mono text-gray-400 hover:text-teal-400 transition-colors duration-300 vertical-text mb-6"
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        jeyansaran620@gmail.com
                    </a>
                </div>
            </FadeInSection>
        </div>
    );
};

export default EmailSidebar;