import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiSparkles, HiCode, HiDatabase, HiChip, HiTerminal, HiCog } from 'react-icons/hi';
import { TbBrain } from 'react-icons/tb';

const skillCategories = [
  {
    id: 'all',
    name: 'All Tech',
    icon: HiSparkles
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    icon: TbBrain
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: HiCode
  },
  {
    id: 'backend',
    name: 'Backend & DB',
    icon: HiDatabase
  },
  {
    id: 'languages',
    name: 'Languages',
    icon: HiChip
  },
  {
    id: 'tools',
    name: 'Tools & DevOps',
    icon: HiCog
  }
];

const skillsData = [
  // AI Category
  { name: 'Google Gemini API', category: 'ai', level: 'Advanced', icon: '🤖', glow: 'hover:border-blue-500/50' },
  { name: 'OpenAI API', category: 'ai', level: 'Advanced', icon: '⚡', glow: 'hover:border-emerald-500/50' },
  { name: 'Prompt Engineering', category: 'ai', level: 'Expert', icon: '🧠', glow: 'hover:border-purple-500/50' },
  { name: 'AI Chatbots & Agents', category: 'ai', level: 'Advanced', icon: '💬', glow: 'hover:border-cyan-500/50' },

  // Languages
  { name: 'JavaScript (ES6+)', category: 'languages', level: 'Expert', icon: 'JS', glow: 'hover:border-yellow-500/50' },
  { name: 'Python', category: 'languages', level: 'Advanced', icon: 'PY', glow: 'hover:border-blue-400/50' },
  { name: 'C', category: 'languages', level: 'Intermediate', icon: 'C', glow: 'hover:border-indigo-500/50' },
  { name: 'C++', category: 'languages', level: 'Intermediate', icon: 'C++', glow: 'hover:border-blue-600/50' },
  { name: 'SQL', category: 'languages', level: 'Advanced', icon: 'SQL', glow: 'hover:border-cyan-400/50' },

  // Frontend
  { name: 'React.js', category: 'frontend', level: 'Expert', icon: '⚛️', glow: 'hover:border-cyan-500/50' },
  { name: 'HTML5', category: 'frontend', level: 'Expert', icon: '🌐', glow: 'hover:border-orange-500/50' },
  { name: 'CSS3', category: 'frontend', level: 'Expert', icon: '🎨', glow: 'hover:border-blue-500/50' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'Expert', icon: '🌊', glow: 'hover:border-teal-400/50' },
  { name: 'Framer Motion', category: 'frontend', level: 'Advanced', icon: '✨', glow: 'hover:border-purple-500/50' },

  // Backend & DB
  { name: 'Node.js', category: 'backend', level: 'Advanced', icon: '🚀', glow: 'hover:border-green-500/50' },
  { name: 'Express.js', category: 'backend', level: 'Advanced', icon: '🛠️', glow: 'hover:border-gray-400/50' },
  { name: 'REST APIs', category: 'backend', level: 'Expert', icon: '🔌', glow: 'hover:border-blue-500/50' },
  { name: 'JWT Auth', category: 'backend', level: 'Advanced', icon: '🔒', glow: 'hover:border-red-400/50' },
  { name: 'MongoDB', category: 'backend', level: 'Advanced', icon: '🍃', glow: 'hover:border-green-600/50' },

  // Tools
  { name: 'Git', category: 'tools', level: 'Advanced', icon: '🌿', glow: 'hover:border-orange-600/50' },
  { name: 'GitHub', category: 'tools', level: 'Advanced', icon: '🐙', glow: 'hover:border-purple-400/50' },
  { name: 'VS Code', category: 'tools', level: 'Expert', icon: '💻', glow: 'hover:border-blue-500/50' },
  { name: 'Linux', category: 'tools', level: 'Advanced', icon: '🐧', glow: 'hover:border-yellow-400/50' },
  { name: 'Postman', category: 'tools', level: 'Advanced', icon: '🚀', glow: 'hover:border-orange-500/50' },
  { name: 'Vercel', category: 'tools', level: 'Advanced', icon: '▲', glow: 'hover:border-white/50' },
  { name: 'Render', category: 'tools', level: 'Advanced', icon: '☁️', glow: 'hover:border-cyan-500/50' },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#030712]/50">
      {/* Background glow orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-mono text-secondary">
            <HiTerminal /> TECHNICAL PROFICIENCY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Skills & <span className="gradient-text-shimmer">Tech Stack</span>
          </h2>
          <p className="text-textMuted text-sm sm:text-base">
            Engineered with modern tools, frameworks, AI APIs, and full-stack architecture.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium font-outfit transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-blue-500/20 border border-primary/40'
                    : 'bg-cardDark text-textMuted hover:text-white border border-gray-800 hover:border-gray-700'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-accent'}`} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              key={skill.name}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-4 rounded-2xl bg-cardDark/80 border border-gray-800/80 backdrop-blur-md transition-all duration-300 ${skill.glow} group relative overflow-hidden`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-bold text-white font-outfit truncate">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-accent font-mono uppercase tracking-wider">
                    {skill.level}
                  </span>
                </div>
              </div>

              {/* Hover indicator bar */}
              <div className="mt-3 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '85%' : '75%' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Categorized Visual Group Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gray-800/60">
          <div className="p-6 rounded-2xl glass-card border border-gray-800">
            <h4 className="text-white font-bold font-outfit text-base flex items-center gap-2 mb-2">
              <TbBrain className="text-purple-400" /> AI-First Development
            </h4>
            <p className="text-xs text-textMuted leading-relaxed">
              Specialized in integrating LLM APIs (Gemini, OpenAI), prompt engineering, and building context-aware intelligent chatbots into web applications.
            </p>
          </div>
          <div className="p-6 rounded-2xl glass-card border border-gray-800">
            <h4 className="text-white font-bold font-outfit text-base flex items-center gap-2 mb-2">
              <HiCode className="text-blue-400" /> Full-Stack Architecture
            </h4>
            <p className="text-xs text-textMuted leading-relaxed">
              End-to-end MERN stack expertise with RESTful API design, JWT authentication, MongoDB schemas, and performant React frontends.
            </p>
          </div>
          <div className="p-6 rounded-2xl glass-card border border-gray-800">
            <h4 className="text-white font-bold font-outfit text-base flex items-center gap-2 mb-2">
              <HiTerminal className="text-cyan-400" /> Developer Workflows
            </h4>
            <p className="text-xs text-textMuted leading-relaxed">
              Version control with Git/GitHub, Linux CLI proficiency, Postman API testing, and continuous deployment using Vercel and Render.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
