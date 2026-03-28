import { LanguageProvider, useLanguage } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppInner() {
  const { lang } = useLanguage();
  return (
    <div className={`min-h-screen lang-${lang}`}>
      <LanguageToggle />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
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
