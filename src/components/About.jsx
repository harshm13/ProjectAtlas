import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaLightbulb, FaCheck } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const About = () => {
  const highlights = [
    {
      icon: FaGraduationCap,
      title: "Education",
      desc: "B.Tech in Information Technology",
      sub: "Silver Oak University (2025–Present)",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400"
    },
    {
      icon: FaCode,
      title: "Core Stack",
      desc: "MERN & AI Integrations",
      sub: "React, Node.js, Express, MongoDB, Gemini API",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      icon: FaLightbulb,
      title: "Focus Area",
      desc: "Intelligent Automation",
      sub: "AI Chatbots, Workflows & SaaS Products",
      color: "from-cyan-500/20 to-emerald-500/20",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-400"
    },
    {
      icon: FaRocket,
      title: "Future Vision",
      desc: "AI-First Tech Entrepreneur",
      sub: "Building impactful global digital products",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      iconColor: "text-amber-400"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary">
            <HiSparkles /> GET TO KNOW ME
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            About <span className="gradient-text-shimmer">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Content Box & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Story Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-3xl glass-panel relative overflow-hidden border border-gray-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-white mb-4 font-outfit flex items-center gap-2">
                Crafting the Future of Web & AI
              </h3>

              <div className="space-y-4 text-textMuted text-base leading-relaxed font-sans">
                <p>
                  Hello! I&apos;m <span className="text-white font-semibold">Harsh Mehta</span>, currently pursuing a Bachelor of Technology in Information Technology. My journey into software development started with curiosity and has evolved into building AI-powered web applications using the MERN stack.
                </p>
                <p>
                  I enjoy solving challenging problems through clean architecture, scalable backend systems, intuitive user interfaces, and intelligent automation. I actively participate in hackathons, continuously learn emerging technologies, contribute to personal projects, and work toward building software products that make a real impact.
                </p>
                <p className="text-white font-medium bg-cardDark/80 p-4 rounded-2xl border border-gray-800 border-l-4 border-l-accent">
                  &quot;My long-term vision is to establish an AI-first software company that creates innovative digital solutions used by businesses worldwide.&quot;
                </p>
              </div>

              {/* Checklist Badges */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-gray-800/80 text-xs font-medium text-gray-300">
                <div className="flex items-center gap-2">
                  <FaCheck className="text-accent" /> Clean & Modular Architecture
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-accent" /> Hackathon Enthusiast
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-accent" /> AI Integration Specialist
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-accent" /> Entrepreneurial Mindset
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`p-5 rounded-2xl bg-cardDark/90 border ${item.borderColor} backdrop-blur-xl relative overflow-hidden transition-all duration-300 group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                <div className="flex items-start gap-4 relative z-10">
                  <div className={`p-3 rounded-xl bg-gray-900/90 border border-gray-800 ${item.iconColor}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-textMuted">{item.title}</span>
                    <h4 className="text-base font-bold text-white font-outfit">{item.desc}</h4>
                    <p className="text-xs text-textMuted mt-1 font-sans">{item.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
