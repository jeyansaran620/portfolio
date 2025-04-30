import FadeInSection from "./FadeInSection";

const SocialSidebar = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jeyansaran620",
      icon: "ri-linkedin-fill"
    },
    {
      name: "GitHub",
      url: "https://github.com/jeyansaran620",
      icon: "ri-github-fill"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/jeyansaran620/",
      icon: "ri-code-box-fill"
    },
    {
      name: "GeeksForGeeks",
      url: "https://auth.geeksforgeeks.org/user/jeyansaran620",
      icon: "ri-code-s-slash-line"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/jeyansaran620",
      icon: "ri-terminal-fill"
    }
  ];

  return (
    <div className="fixed left-8 bottom-0 z-10 hidden xl:block">
      <FadeInSection delay={300}>
        <ul className="flex flex-col items-center space-y-8 after:content-[''] after:w-px after:h-24 after:bg-gray-400 after:block after:mx-auto after:mt-8">
          {socialLinks.map((link, index) => (
            <li key={index} className="transition-transform duration-200 hover:-translate-y-2">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 block"
              >
                <i className={`${link.icon} text-xl`} aria-hidden="true"></i>
                <span className="sr-only">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </FadeInSection>
    </div>
  );
};

export default SocialSidebar;