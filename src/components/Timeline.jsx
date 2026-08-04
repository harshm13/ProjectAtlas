import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaRocket, FaCode, FaBrain, FaTrophy, FaLaptopCode, FaBuilding } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const timelineEvents = [
  {
    title: 'Started Learning Programming',
    period: 'Beginning of Tech Journey',
    icon: FaCode,
    desc: 'Discovered passion for logic and software by mastering C, C++, and core programming fundamentals.',
    tag: 'Foundation',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Built My First Website',
    period: 'Web Exploration',
    icon: FaLaptopCode,
    desc: 'Designed and published responsive HTML5 & CSS3 websites with custom styling and vanilla JavaScript interactions.',
    tag: 'Frontend Debut',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    title: 'Learned React Framework',
    period: 'Modern UI Engineering',
    icon: FaCode,
    desc: 'Mastered component architecture, state management, hooks, and modern styling libraries like Tailwind CSS.',
    tag: 'React Ecosystem',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'Built Full Stack Applications',
    period: 'MERN Stack Mastery',
    icon: FaBriefcase,
    desc: 'Architected end-to-end web apps with Express backends, RESTful APIs, JWT authentication, and MongoDB databases.',
    tag: 'Full Stack',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Integrated Artificial Intelligence',
    period: 'AI Frontier',
    icon: FaBrain,
    desc: 'Incorporated LLMs (Google Gemini API, OpenAI), prompt engineering, and intelligent chatbot capabilities into software.',
    tag: 'AI Integration',
    color: 'from-pink-500 to-purple-500'
  },
  {
    title: 'Participated in Hackathons',
    period: 'Competitive Building',
    icon: FaTrophy,
    desc: 'Collaborated under tight deadlines to prototype rapid solutions, present product demos, and solve real-world hackathon challenges.',
    tag: 'Hackathons',
    color: 'from-amber-500 to-rose-500'
  },
  {
    title: 'Started Freelancing',
    period: 'Client Solutions',
    icon: FaLaptopCode,
    desc: 'Delivered custom web applications, API integrations, and modern landing pages for independent clients.',
    tag: 'Client Delivery',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Building My Startup',
    period: 'Current Focus & Future Vision',
    icon: FaRocket,
    desc: 'Currently prototyping AI-first SaaS products, building scalable dev tools, and founding my technology enterprise.',
    tag: 'Entrepreneurship',
    color: 'from-primary to-accent'
  }
];

const educationData = [
  {
    institution: 'Silver Oak University',
    degree: 'Bachelor of Technology (B.Tech) in Information Technology',
    period: '2025 – Present',
    details: 'Focusing on Data Structures, Web Engineering, Database Systems, Artificial Intelligence, and Software Architecture.',
    badge: 'Higher Education'
  }
];

const experienceData = [
  {
    role: 'Independent AI & Web Developer',
    org: 'Self-Employed / Project Atlas Lab',
    period: '2024 – Present',
    desc: 'Designing and building AI-driven web apps, open-source developer tooling, and scalable full-stack applications.'
  },
  {
    role: 'Hackathon Participant & Innovator',
    org: 'Various Tech Hackathons',
    period: '2024 – Present',
    desc: 'Engineered rapid prototypes combining modern frontends with AI models to address key hackathon problem statements.'
  },
  {
    role: 'Personal Project Architect',
    org: 'NexusVoid & Product Suite',
    period: '2023 – Present',
    desc: 'Created and deployed products such as Codex AI NexusVoid, TransitOps, and Last-Minute Life Saver.'
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-[#030712]/60">
      {/* Glow orb background */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary">
            <HiSparkles /> EVOLUTION & MILESTONES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Journey & <span className="gradient-text-shimmer">Education</span>
          </h2>
          <p className="text-textMuted text-sm sm:text-base">
            From discovering basic logic to founding AI-first software projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Vertical Timeline Left Column */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold text-white font-outfit mb-8 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-primary/20 border border-primary/30 text-primary">
                <FaRocket className="w-5 h-5" />
              </span>
              Developer Growth Timeline
            </h3>

            <div className="relative border-l-2 border-gray-800 ml-4 sm:ml-6 space-y-10">
              {timelineEvents.map((event, idx) => {
                const Icon = event.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="relative pl-8 sm:pl-10 group"
                  >
                    {/* Node icon dot */}
                    <div className={`absolute -left-[17px] top-0.5 w-8 h-8 rounded-full bg-cardDark border-2 border-primary flex items-center justify-center text-white text-xs group-hover:scale-125 group-hover:border-accent transition-all duration-300 shadow-lg shadow-blue-500/20`}>
                      <Icon className="w-3.5 h-3.5 text-accent" />
                    </div>

                    <div className="p-6 rounded-2xl bg-cardDark/80 border border-gray-800 backdrop-blur-md hover:border-primary/40 transition-all duration-300">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                        <span className="text-[11px] font-mono text-accent uppercase tracking-wider font-semibold">
                          {event.period}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-gray-900 border border-gray-800 text-[10px] font-mono text-gray-300">
                          {event.tag}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white font-outfit group-hover:text-primary transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-textMuted mt-2 leading-relaxed">
                        {event.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Education & Experience Right Column */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Education Card */}
            <div>
              <h3 className="text-2xl font-bold text-white font-outfit mb-6 flex items-center gap-3">
                <span className="p-2 rounded-xl bg-secondary/20 border border-secondary/30 text-secondary">
                  <FaGraduationCap className="w-5 h-5" />
                </span>
                Academic Education
              </h3>

              {educationData.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl glass-panel border border-secondary/30 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-mono font-semibold">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono text-textMuted">{edu.period}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white font-outfit">{edu.institution}</h4>
                  <p className="text-xs font-semibold text-accent mt-1">{edu.degree}</p>
                  <p className="text-xs text-textMuted mt-3 leading-relaxed">{edu.details}</p>
                </motion.div>
              ))}
            </div>

            {/* Experience Cards */}
            <div>
              <h3 className="text-2xl font-bold text-white font-outfit mb-6 flex items-center gap-3">
                <span className="p-2 rounded-xl bg-accent/20 border border-accent/30 text-accent">
                  <FaBuilding className="w-5 h-5" />
                </span>
                Key Experience
              </h3>

              <div className="space-y-4">
                {experienceData.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 rounded-2xl bg-cardDark/90 border border-gray-800 hover:border-gray-700 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-base font-bold text-white font-outfit">{exp.role}</h4>
                      <span className="text-[10px] font-mono text-textMuted">{exp.period}</span>
                    </div>
                    <p className="text-xs text-accent font-mono mb-2">{exp.org}</p>
                    <p className="text-xs text-textMuted leading-relaxed">{exp.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;
