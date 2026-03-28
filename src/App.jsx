import { useRef } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function AppInner() {
  const { lang } = useLanguage();
  const heroRef = useRef(null);

  return (
    <div className={`min-h-screen lang-${lang}`}>
      <LanguageToggle />
      <Hero heroRef={heroRef} />
      <About />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
      <StickyCTA heroRef={heroRef} />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}

export default App;
