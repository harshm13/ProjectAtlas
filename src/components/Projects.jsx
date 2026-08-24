import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaClock, FaStar, FaBrain } from 'react-icons/fa';
import { HiSparkles, HiCode } from 'react-icons/hi';

const featuredProjects = [
  {
    id: 'resumeos',
    title: 'ResumeOS',
    badge: 'AI SaaS Platform',
    tagline: 'Next-Gen AI Resume Builder & Career OS',
    description: 'Architect, optimize, and tailor enterprise-grade resumes with real-time ATS scoring, AI bullet enhancement, and split-screen live previews. Features a custom glassmorphism dashboard and PDF export capabilities.',
    tech: ['React', 'Node.js', 'Express', 'Tailwind v4', 'Gemini API'],
    github: 'https://github.com/harshm13/ResumeOS',
    demo: 'https://github.com/harshm13/ResumeOS', 
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    stats: { stars: '0', status: 'Live Production' },
    glow: 'from-blue-600/30 via-cyan-600/20 to-indigo-600/30',
  },
  {
    id: 'globetrotter',
    title: 'GlobeTrotter',
    badge: 'Odoo x LDCE Hackathon',
    tagline: 'Global Exploration & Travel Planning',
    description: 'Developed under tight deadlines for the Odoo x LDCE Hackathon (Team NexusVoid). GlobeTrotter is an innovative application designed to streamline global exploration and travel planning. Engineered with a focus on rapid deployment, clean UI/UX, and scalable architecture.',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/harshm13/GlobeTrotter-NexusVoid',
    demo: 'https://github.com/harshm13/GlobeTrotter-NexusVoid',
    image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=1920&q=80',
    stats: { stars: '0', status: 'Hackathon Build' },
    glow: 'from-orange-600/30 via-amber-600/20 to-yellow-600/30',
  },
  {
    id: 'nexusvoid',
    title: 'Codex AI – NexusVoid',
    badge: 'Featured AI SaaS',
    tagline: 'Autonomous AI-Powered Developer Platform',
    description: 'An advanced AI coding assistant platform featuring prompt management, real-time conversation history, zero-key resilience, live code execution previews, and unified diff/patch code generation.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'Tailwind CSS'],
    github: 'https://github.com/harshm13/NexusVoid',
    demo: 'https://codexai-nine.vercel.app/',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    stats: { stars: '14', status: 'Live Production' },
    glow: 'from-blue-600/30 via-indigo-600/20 to-purple-600/30',
  },
  {
    id: 'transitops',
    title: 'TransitOps',
    badge: 'Enterprise Platform',
    tagline: 'Fleet Management & Route Operations System',
    description: 'Comprehensive transportation and fleet management solution with real-time driver analytics dashboards, route scheduling, maintenance tracking, and operational efficiency tools.',
    tech: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Tailwind CSS', 'Chart.js'],
    github: 'https://github.com/harshm13/TransitOps',
    demo: 'https://transitops.vercel.app',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    stats: { stars: '9', status: 'Active Release' },
    glow: 'from-cyan-600/30 via-blue-600/20 to-teal-600/30',
  },
  {
    id: 'lifesaver',
    title: 'The Last-Minute Life Saver',
    badge: 'AI Productivity',
    tagline: 'Intelligent AI Task Prioritizer & Schedule Assistant',
    description: 'An AI-driven productivity suite for urgent task breakdown, automated schedule optimization, smart deadline reminders, and intelligent workflow acceleration.',
    tech: ['React', 'OpenAI API', 'Node.js', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/harshm13/LastMinuteLifeSaver',
    demo: 'https://the-last-minute-life-saver-719087536560.asia-southeast1.run.app/',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    stats: { stars: '11', status: 'Beta v1.2' },
    glow: 'from-purple-600/30 via-pink-600/20 to-rose-600/30',
  },
  {
    id: 'projectatlas',
    title: 'Project Atlas',
    badge: 'Personal Portfolio',
    tagline: 'Futuristic AI-Inspired Portfolio Website',
    description: 'The flagship personal portfolio for Harsh Mehta built with React, Vite, Tailwind CSS, Framer Motion, and GitHub API integrations. Designed with glassmorphism and 60FPS dynamic particle mesh.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GitHub API'],
    github: 'https://github.com/harshm13/ProjectAtlas',
    demo: '#home',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    stats: { stars: '8', status: 'V2.6 Live' },
    glow: 'from-accent/30 via-primary/20 to-secondary/30',
  },
];

const upcomingProjects = [
  {
    title: 'DevVault',
    type: 'Developer Snippet & Resource Locker',
    tech: 'MERN Stack, JWT, Redis',
    desc: 'Secure cloud vault for developers to organize code snippets, API tokens, and project documentation.',
  },
  {
    title: 'InvoiceFlow',
    type: 'SaaS Invoicing & Client Billing',
    tech: 'React, Express, Stripe, MongoDB',
    desc: 'Automated recurring invoicing system for tech freelancers and small digital agencies.',
  },
  {
    title: 'TaskForge AI',
    type: 'Autonomous Project Management Agent',
    tech: 'React, LangChain, Node.js',
    desc: 'AI project manager that auto-generates user stories, breaks down sprints, and assigns tasks.',
  },
  {
    title: 'ClientFlow CRM',
    type: 'AI-Enhanced Client Relationship Manager',
    tech: 'React, Node.js, MongoDB',
    desc: 'Streamlined CRM designed for tech founders to manage leads, proposals, and customer communications.',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono text-accent">
            <HiCode /> INNOVATION PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Featured <span className="gradient-text-shimmer">Projects</span>
          </h2>
          <p className="text-textMuted text-sm sm:text-base">
            Explore AI-driven platforms, full-stack applications, and software products I've architected.
          </p>
        </motion.div>

        {/* Featured Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-cardDark/90 border border-gray-800 backdrop-blur-xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300"
            >
              {/* Background card gradient blur on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div>
                {/* Image / Banner Container */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#030712]/90 border border-primary/40 text-primary text-[11px] font-mono font-semibold backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#030712]/80 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    {project.stats.status}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 space-y-4 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-outfit group-hover:text-primary transition-colors flex items-center justify-between">
                      {project.title}
                    </h3>
                    <p className="text-xs text-accent font-mono mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-textMuted text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-gray-900/90 border border-gray-800 text-gray-300 text-[11px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="px-7 pb-7 pt-4 border-t border-gray-800/80 flex items-center justify-between relative z-10 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-textMuted hover:text-white transition-colors"
                >
                  <FaGithub className="w-4 h-4" /> Source Code
                </a>

                <a
                  href={project.demo}
                  target={project.demo.startsWith('#') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-xs font-semibold shadow-md transition-all"
                >
                  Live Demo <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reserved Space: Upcoming Startup & Project Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl glass-panel border border-gray-800 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800/80 flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
                <FaClock /> PIPELINE & RESEARCH LAB
              </div>
              <h3 className="text-2xl font-bold text-white font-outfit">
                Upcoming Software & AI Products
              </h3>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
              In Active Prototyping
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcomingProjects.map((up, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-2xl bg-cardDark/80 border border-gray-800/90 hover:border-purple-500/40 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-white font-outfit group-hover:text-purple-400 transition-colors">
                    {up.title}
                  </h4>
                  <span className="text-[10px] font-mono text-accent">SOON</span>
                </div>
                <p className="text-xs text-textMuted font-mono mb-2">{up.type}</p>
                <p className="text-xs text-gray-400 mb-3 leading-relaxed">{up.desc}</p>
                <div className="text-[10px] font-mono text-gray-500 bg-gray-900/60 p-2 rounded-lg border border-gray-800">
                  Tech: {up.tech}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
