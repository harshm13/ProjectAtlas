import { motion } from 'framer-motion';
import { FaBrain, FaLayerGroup, FaPlug, FaRobot, FaGlobe, FaServer, FaArrowRight } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const services = [
  {
    title: 'AI Web Application Development',
    icon: FaBrain,
    desc: 'Architecting intelligent SaaS platforms powered by LLMs, generative AI models, custom agent workflows, and conversational interfaces.',
    features: ['Google Gemini & OpenAI Integration', 'Custom Prompt Engineering', 'Contextual Memory Systems', 'Live Code & Data Previews'],
    glow: 'hover:border-purple-500/50 hover:shadow-purple-500/10'
  },
  {
    title: 'Full Stack MERN Development',
    icon: FaLayerGroup,
    desc: 'End-to-end web software development utilizing MongoDB, Express.js, React.js, and Node.js for high performance and scalability.',
    features: ['Modular Component Design', 'State & Data Flow Optimization', 'Responsive Dynamic Frontends', 'Secure Express Backends'],
    glow: 'hover:border-blue-500/50 hover:shadow-blue-500/10'
  },
  {
    title: 'REST API Development',
    icon: FaPlug,
    desc: 'Designing robust, secure, and well-documented RESTful APIs with clean request routing, validation middleware, and JWT authentication.',
    features: ['JSON Schema Validation', 'JWT Authentication & Security', 'Swagger/Postman Documentation', 'Scalable Endpoint Structure'],
    glow: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10'
  },
  {
    title: 'AI Integration & Automation',
    icon: FaRobot,
    desc: 'Embedding artificial intelligence capabilities into existing codebases, CRM tools, databases, and workflow automation pipelines.',
    features: ['Automated Task Breakdown', 'Intelligent Workflows', 'Custom Chatbots & Virtual Assistants', 'Third-Party API Bridging'],
    glow: 'hover:border-pink-500/50 hover:shadow-pink-500/10'
  },
  {
    title: 'Modern Website Development',
    icon: FaGlobe,
    desc: 'Creating high-converting, visually stunning, lightning-fast landing pages and web apps with Tailwind CSS, Framer Motion, and SEO optimization.',
    features: ['60 FPS Glassmorphism UI', 'Mobile-First Responsive Layouts', '95+ Lighthouse Score Optimization', 'SEO Meta & Semantic HTML'],
    glow: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10'
  },
  {
    title: 'Backend Engineering & DB',
    icon: FaServer,
    desc: 'Building reliable server architectures, database modeling in MongoDB, session management, caching, and server deployment.',
    features: ['MongoDB Schema Optimization', 'Serverless & Docker Containerization', 'Security & Rate Limiting', 'Vercel / Render Deployment'],
    glow: 'hover:border-amber-500/50 hover:shadow-amber-500/10'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#030712]/40">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-mono text-secondary">
            <HiSparkles /> WHAT I OFFER
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Services & <span className="gradient-text-shimmer">Solutions</span>
          </h2>
          <p className="text-textMuted text-sm sm:text-base">
            Empowering products with modern web tech, AI integrations, and full-stack software engineering.
          </p>
        </motion.div>

        {/* Grid of 6 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`p-7 rounded-3xl bg-cardDark/80 border border-gray-800 backdrop-blur-xl transition-all duration-300 ${service.glow} group flex flex-col justify-between`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-accent group-hover:text-primary group-hover:scale-110 transition-all duration-300 mb-6 shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white font-outfit group-hover:text-primary transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-textMuted leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-gray-800/60 pt-4 text-xs text-gray-300 font-sans">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-accent group-hover:text-white transition-colors pt-2"
                >
                  Discuss Service <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
