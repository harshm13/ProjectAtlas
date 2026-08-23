import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    // Simulate API or EmailJS submission call
    setTimeout(() => {
      setStatus('success');

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback silently if canvas-confetti issue
      }

      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glowing blurred radial light */}
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono text-accent">
            <HiSparkles /> GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Let&apos;s Build <span className="gradient-text-shimmer">Together</span>
          </h2>
          <p className="text-textMuted text-sm sm:text-base">
            Have an exciting project, AI idea, job opportunity, or collaboration in mind? Drop me a line below!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl glass-panel border border-gray-800 space-y-6">
              <h3 className="text-2xl font-bold text-white font-outfit">Contact Information</h3>
              <p className="text-xs sm:text-sm text-textMuted leading-relaxed font-sans">
                I am currently open to full-time roles, software contracts, startup collaborations, and AI-driven projects.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="mailto:hm1304008@gmail.com"
                  className="p-4 rounded-2xl bg-cardDark/80 border border-gray-800 hover:border-primary/50 flex items-center gap-4 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-textMuted uppercase tracking-wider block">Email Me</span>
                    <span className="text-sm font-bold text-white font-outfit group-hover:text-primary transition-colors">
                      hm1304008@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/harshm13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-cardDark/80 border border-gray-800 hover:border-secondary/50 flex items-center gap-4 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-secondary/20 text-secondary group-hover:scale-110 transition-transform">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-textMuted uppercase tracking-wider block">LinkedIn Profile</span>
                    <span className="text-sm font-bold text-white font-outfit group-hover:text-secondary transition-colors">
                      linkedin.com/in/harshm13
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/harshm13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-cardDark/80 border border-gray-800 hover:border-accent/50 flex items-center gap-4 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-accent/20 text-accent group-hover:scale-110 transition-transform">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-textMuted uppercase tracking-wider block">GitHub Repos</span>
                    <span className="text-sm font-bold text-white font-outfit group-hover:text-accent transition-colors">
                      github.com/harshm13
                    </span>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-cardDark/80 border border-gray-800 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-textMuted uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-bold text-white font-outfit">
                      Ahmedabad, India (Available Remote / Hybrid)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-cardDark/90 border border-gray-800 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-outfit">Message Sent Successfully!</h3>
                  <p className="text-sm text-textMuted max-w-md mx-auto">
                    Thank you for reaching out, Harsh Mehta has received your message and will respond shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-medium text-gray-300 uppercase tracking-wider block">
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-gray-900/90 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-medium text-gray-300 uppercase tracking-wider block">
                        Your Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-gray-900/90 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-medium text-gray-300 uppercase tracking-wider block">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. AI Project Collaboration / Hiring Query"
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-900/90 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-medium text-gray-300 uppercase tracking-wider block">
                      Your Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, or inquiries..."
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-900/90 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all duration-200"
                  >
                    {status === 'submitting' ? (
                      <>
                        <FaSpinner className="animate-spin w-4 h-4" /> Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message <FaPaperPlane className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
