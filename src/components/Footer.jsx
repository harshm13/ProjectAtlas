import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaChevronUp } from 'react-icons/fa';
import { HiCode, HiLightningBolt } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030712] border-t border-gray-800/80 pt-16 pb-12 overflow-hidden">
      {/* Glow ambient background line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800/60">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary via-secondary to-accent p-[1px]">
                <div className="w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center">
                  <HiCode className="w-5 h-5 text-accent" />
                </div>
              </div>
              <span className="font-bold text-xl text-white font-outfit">
                Harsh Mehta <span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-textMuted text-sm max-w-md leading-relaxed">
              Architecting intelligent web applications, scalable MERN stack systems, and AI-driven products tailored for the future of technology.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Status: Available for High-Impact Roles & Collaborations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase font-outfit mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-textMuted font-medium">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-primary transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase font-outfit mb-4">
              Connect & Social
            </h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: FaGithub, href: 'https://github.com/harshm13', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/harshm13', label: 'LinkedIn' },
                { icon: FaTwitter, href: 'https://x.com/harshm13', label: 'Twitter' },
                { icon: FaEnvelope, href: 'mailto:hm1304008@gmail.com', label: 'Email' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-xl bg-cardDark border border-gray-800 text-textMuted hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-textMuted font-mono">
              Location: Ahmedabad / Remote
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-textMuted font-mono">
          <div>
            Designed and Developed by <span className="text-white font-semibold">Harsh Mehta</span>. Project Atlas © 2026.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-accent">
              <HiLightningBolt className="w-3.5 h-3.5" /> Built with React, Tailwind & Motion
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-cardDark border border-gray-800 text-textMuted hover:text-white hover:border-primary transition-all duration-200"
            >
              <FaChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
