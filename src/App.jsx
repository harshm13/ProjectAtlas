import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import GithubSection from './components/GithubSection';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-[#F9FAFB] selection:bg-primary selection:text-white font-sans overflow-x-hidden">
      {/* Dynamic 60FPS Particle Mesh Background */}
      <ParticleBackground />

      {/* Futuristic Glow Custom Cursor */}
      <CustomCursor />

      {/* Main Glassmorphic Navigation Header */}
      <Navbar />

      {/* Content Sections */}
      <main className="relative z-10 space-y-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <GithubSection />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
