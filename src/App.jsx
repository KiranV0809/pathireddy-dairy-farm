import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
