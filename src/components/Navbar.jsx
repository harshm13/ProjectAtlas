import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiCode, HiSparkles } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#timeline' },
  { name: 'GitHub', href: '#github' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#030712]/80 backdrop-blur-xl border-b border-gray-800/60 shadow-2xl shadow-blue-950/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary via-secondary to-accent p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center">
                <HiCode className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5 font-outfit">
                Harsh Mehta
                <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
              </span>
              <span className="text-[10px] text-textMuted tracking-wider uppercase font-mono">
                Project Atlas
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#111827]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-gray-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-textMuted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 border border-primary/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Social Quick Links */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/harshm13"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-textMuted hover:text-white hover:bg-gray-800/60 rounded-lg transition-colors border border-transparent hover:border-gray-700"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/harshm13"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-textMuted hover:text-white hover:bg-gray-800/60 rounded-lg transition-colors border border-transparent hover:border-gray-700"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-lg group bg-gradient-to-br from-primary via-secondary to-accent group-hover:from-primary group-hover:to-accent hover:text-white text-white focus:outline-none"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#030712] rounded-[7px] group-hover:bg-opacity-0 flex items-center gap-1.5">
                <HiSparkles className="w-3.5 h-3.5 text-accent group-hover:text-white" />
                Let&apos;s Talk
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-cardDark border border-gray-800 text-textMuted hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#030712]/95 backdrop-blur-2xl border-b border-gray-800/80 px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-primary/20 text-white border border-primary/30'
                      : 'text-textMuted hover:text-white hover:bg-gray-900'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/harshm13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-cardDark text-textMuted hover:text-white"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/harshm13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-cardDark text-textMuted hover:text-white"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:hm1304008@gmail.com"
                    className="p-2 rounded-lg bg-cardDark text-textMuted hover:text-white"
                  >
                    <FaEnvelope className="w-5 h-5" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
