import './App.css';
import { useEffect, useRef, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import ToTopButton from './components/ToTopButton';

function App() {
  const aboutRef = useRef(),
    servicesRef = useRef(),
    techRef = useRef(),
    teamRef = useRef(),
    contactRef = useRef();
  const [topBtn, setTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setTopBtn(true);
      } else {
        setTopBtn(false);
      }
    });
  }, []);

  const handleClick = (section) => {
    switch (section) {
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'service':
        servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'tech':
        techRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'team':
        teamRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        window.scrollITo({ top: 0, behavior: 'smooth' });
        break;
    }
  };

  return (
    <div className="antialiased text-slate-500   bg-white min-h-screen  relative">
      {/* header */}
      <Navbar handleClick={handleClick} />
      {/* hero */}
      <Hero handleClick={handleClick} />
      {/* about */}
      <About refs={aboutRef} />
      {/* tech we use */}
      <Technologies refs={techRef} />
      {/* team */}
      <Team refs={teamRef} />
      {/* contact*/}
      <Contact refs={contactRef} />
      {/* footer*/}
      <Footer />

      {/* To Top Button */}
      <ToTopButton topBtn={topBtn} handleClick={handleClick} />
    </div>
  );
}

export default App;
