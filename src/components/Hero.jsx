import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight, FaCode, FaBrain, FaRocket } from 'react-icons/fa';
import { HiSparkles, HiTerminal, HiCheckCircle } from 'react-icons/hi';

const roles = [
  "AI Full-Stack Developer",
  "MERN Stack Developer",
  "Software Engineer",
  "Problem Solver",
  "Future Tech Entrepreneur"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  // Typewriter effect logic
  useEffect(() => {
    const handleType = () => {
      const fullRole = roles[roleIndex];

      if (!isDeleting) {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        setSpeed(80);

        if (currentText === fullRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        setSpeed(40);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, speed]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Glow Orbs background */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* AI Status Tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cardDark/80 border border-gray-800 text-xs font-mono text-accent shadow-lg backdrop-blur-md"
            >
              <HiSparkles className="w-4 h-4 text-accent animate-pulse" />
              <span>Project Atlas • Next-Gen Portfolio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </motion.div>

            {/* Greeting */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-outfit">
                Hi, I'm <span className="gradient-text-shimmer">Harsh Mehta</span>
              </h1>
              
              {/* Typewriter Role */}
              <div className="h-12 sm:h-14 flex items-center text-xl sm:text-3xl font-semibold text-textMuted font-mono">
                <span className="text-accent mr-2">&gt;</span>
                <span className="text-white border-b-2 border-primary pb-1">
                  {currentText}
                </span>
                <span className="w-2.5 h-7 sm:h-8 bg-primary ml-1 animate-pulse" />
              </div>
            </div>

            {/* Description */}
            <p className="text-textMuted text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              I build AI-powered web applications and scalable full-stack software that solve real-world problems. My passion lies in combining Artificial Intelligence with modern web technologies to create products that improve productivity, automate workflows, and deliver meaningful user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                View Projects <FaArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-cardDark hover:bg-gray-800 text-white font-semibold text-sm border border-gray-800 hover:border-gray-700 flex items-center gap-2 transition-all duration-200"
              >
                Contact Me
              </a>

              <a
                href="https://github.com/harshm13"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-cardDark/60 hover:bg-cardDark text-textMuted hover:text-white font-mono text-sm border border-gray-800 flex items-center gap-2 transition-colors"
                title="Download Resume / Resume Link"
              >
                <FaFileDownload className="w-3.5 h-3.5 text-accent" /> Resume
              </a>
            </div>

            {/* Social Links & Quick Metrics */}
            <div className="pt-6 border-t border-gray-800/60 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-textMuted uppercase tracking-wider">Connect:</span>
                <a
                  href="https://github.com/harshm13"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-cardDark border border-gray-800 text-textMuted hover:text-white hover:border-primary transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/harshm13"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-cardDark border border-gray-800 text-textMuted hover:text-white hover:border-primary transition-all"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hm1304008@gmail.com"
                  aria-label="Email Harsh Mehta"
                  className="p-2.5 rounded-lg bg-cardDark border border-gray-800 text-textMuted hover:text-white hover:border-primary transition-all"
                >
                  <FaEnvelope className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-4 font-mono text-xs text-textMuted">
                <div className="flex items-center gap-1.5">
                  <FaCode className="text-primary" /> MERN & AI
                </div>
                <div className="flex items-center gap-1.5">
                  <FaRocket className="text-accent" /> 10+ Projects
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - 3D Interactive Code / AI Graphic Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-xl opacity-30 animate-pulse-slow" />

              {/* Glass Code Editor Window */}
              <div className="relative rounded-2xl bg-[#0B0F19]/90 border border-gray-800 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs">
                {/* Header bar */}
                <div className="px-4 py-3 bg-[#111827] border-b border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-textMuted text-[11px] font-mono flex items-center gap-1">
                      <HiTerminal className="text-accent" /> HarshMehta.config.js
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <HiCheckCircle /> ONLINE
                  </span>
                </div>

                {/* Body code content */}
                <div className="p-5 space-y-3 text-gray-300">
                  <div>
                    <span className="text-secondary font-bold">const</span> <span className="text-accent">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-textMuted">name:</span> <span className="text-emerald-400">'Harsh Mehta'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-textMuted">degree:</span> <span className="text-emerald-400">'B.Tech IT (Silver Oak Univ)'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-textMuted">stack:</span> [<span className="text-amber-300">'React'</span>, <span className="text-amber-300">'Node.js'</span>, <span className="text-amber-300">'MongoDB'</span>, <span className="text-amber-300">'Tailwind'</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-textMuted">aiIntegrations:</span> [<span className="text-primary">'Google Gemini API'</span>, <span className="text-primary">'OpenAI'</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-textMuted">vision:</span> <span className="text-emerald-400">'Build AI-First Solutions & Startup'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-textMuted">status:</span> <span className="text-primary">'Building Next-Gen Tech'</span>
                  </div>
                  <div>&#125;;</div>

                  <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between text-[11px] text-textMuted">
                    <span className="flex items-center gap-1 text-secondary">
                      <FaBrain /> AI Engine Ready
                    </span>
                    <span className="text-accent">Project Atlas v2.6</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - AI Agent */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 p-3 rounded-2xl bg-cardDark/95 border border-gray-800 shadow-xl backdrop-blur-md flex items-center gap-3 hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Codex AI NexusVoid</p>
                  <p className="text-[10px] text-textMuted">AI Coding Assistant</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Full Stack */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-4 p-3 rounded-2xl bg-cardDark/95 border border-gray-800 shadow-xl backdrop-blur-md flex items-center gap-3 hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent font-bold">
                  🚀
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Full-Stack MERN</p>
                  <p className="text-[10px] text-textMuted">Scalable Architecture</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
