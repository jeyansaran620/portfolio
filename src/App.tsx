import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import WebsiteInfo from './components/WebsiteInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import EmailSidebar from './components/EmailSidebar';

function App() {
  return (
    <div className="flex flex-col bg-[#0a192f] w-full">
      <Navbar />
      <SocialSidebar />
      <EmailSidebar />
      <Home />
      <About />
      <Experience />
      <WebsiteInfo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;