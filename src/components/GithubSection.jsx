import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa';
import { HiSparkles, HiTerminal } from 'react-icons/hi';

const GithubSection = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackUser = {
    login: 'harshm13',
    name: 'Harsh Mehta',
    public_repos: 18,
    followers: 42,
    following: 28,
    bio: 'AI Full-Stack Developer | MERN Specialist | Entrepreneurial Mindset',
    avatar_url: 'https://github.com/harshm13.png',
    html_url: 'https://github.com/harshm13'
  };

  const fallbackRepos = [
    {
      name: 'NexusVoid',
      description: 'Codex AI - Autonomous AI Coding Engine & Assistant platform.',
      stargazers_count: 14,
      forks_count: 5,
      language: 'JavaScript',
      html_url: 'https://github.com/harshm13/NexusVoid'
    },
    {
      name: 'TransitOps',
      description: 'Enterprise Transportation & Fleet Operations Management system.',
      stargazers_count: 9,
      forks_count: 3,
      language: 'JavaScript',
      html_url: 'https://github.com/harshm13/TransitOps'
    },
    {
      name: 'LastMinuteLifeSaver',
      description: 'AI Productivity Assistant for urgent scheduling & task breakdown.',
      stargazers_count: 11,
      forks_count: 4,
      language: 'JavaScript',
      html_url: 'https://github.com/harshm13/LastMinuteLifeSaver'
    },
    {
      name: 'ProjectAtlas',
      description: 'Futuristic personal portfolio engineered with React & Tailwind CSS.',
      stargazers_count: 8,
      forks_count: 2,
      language: 'JavaScript',
      html_url: 'https://github.com/harshm13/ProjectAtlas'
    }
  ];

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/harshm13');
        if (userRes.ok) {
          const userJson = await userRes.json();
          setUserData(userJson);
        } else {
          setUserData(fallbackUser);
        }

        const reposRes = await fetch('https://api.github.com/users/harshm13/repos?sort=updated&per_page=6');
        if (reposRes.ok) {
          const reposJson = await reposRes.json();
          setRepos(reposJson.length > 0 ? reposJson : fallbackRepos);
        } else {
          setRepos(fallbackRepos);
        }
      } catch (err) {
        setUserData(fallbackUser);
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchGithub();
  }, []);

  const user = userData || fallbackUser;
  const repoList = repos.length > 0 ? repos : fallbackRepos;

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary">
            <FaGithub /> OPEN SOURCE METRICS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            GitHub <span className="gradient-text-shimmer">Activity & Stats</span>
          </h2>
          <p className="text-textMuted text-sm sm:text-base">
            Live integration fetching code metrics, repositories, and developer stats from @harshm13.
          </p>
        </motion.div>

        {/* Profile Card Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl glass-panel border border-gray-800 mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <img
              src={user.avatar_url || 'https://github.com/harshm13.png'}
              alt={user.name}
              className="w-20 h-20 rounded-2xl border-2 border-primary shadow-xl"
              onError={(e) => { e.target.src = 'https://avatars.githubusercontent.com/u/10000000?v=4'; }}
            />
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white font-outfit">{user.name || 'Harsh Mehta'}</h3>
                <span className="text-xs font-mono text-accent font-semibold">@{user.login}</span>
              </div>
              <p className="text-xs text-textMuted mt-1 max-w-md font-sans">{user.bio}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-center border-t md:border-t-0 md:border-l border-gray-800 pt-4 md:pt-0 md:pl-8">
            <div>
              <span className="text-2xl font-extrabold text-white font-outfit block">{user.public_repos || 18}</span>
              <span className="text-textMuted flex items-center gap-1 justify-center"><FaBookOpen /> Repos</span>
            </div>
            <div>
              <span className="text-2xl font-extrabold text-accent font-outfit block">{user.followers || 42}</span>
              <span className="text-textMuted flex items-center gap-1 justify-center"><FaUsers /> Followers</span>
            </div>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-cardDark hover:bg-gray-800 border border-gray-800 text-white text-xs font-semibold flex items-center gap-2 transition-all ml-2"
            >
              Follow @harshm13 <FaExternalLinkAlt className="w-3 h-3 text-accent" />
            </a>
          </div>
        </motion.div>

        {/* GitHub Stats Cards & Contribution Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          {/* GitHub Stats Box 1 */}
          <div className="p-6 rounded-2xl bg-cardDark/80 border border-gray-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-white font-outfit flex items-center gap-2">
                <HiTerminal className="text-accent" /> Contribution Metrics
              </h4>
              <span className="text-[10px] font-mono text-emerald-400">Active Daily</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center p-2.5 rounded-xl bg-gray-900/80 border border-gray-800/80">
                <span className="text-textMuted">Most Used Language</span>
                <span className="text-amber-400 font-bold">JavaScript / React</span>
              </div>
              <div className="flex justify-between items-center p-2.5 rounded-xl bg-gray-900/80 border border-gray-800/80">
                <span className="text-textMuted">Total Commits (2026)</span>
                <span className="text-primary font-bold">450+ Commits</span>
              </div>
              <div className="flex justify-between items-center p-2.5 rounded-xl bg-gray-900/80 border border-gray-800/80">
                <span className="text-textMuted">Pull Requests & Issues</span>
                <span className="text-secondary font-bold">60+ Merged</span>
              </div>
            </div>
          </div>

          {/* GitHub Contribution Graph Frame */}
          <div className="lg:col-span-2 p-6 rounded-2xl bg-cardDark/80 border border-gray-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-white font-outfit flex items-center gap-2">
                <FaGithub className="text-primary" /> Contribution Streak & Heatmap
              </h4>
              <a
                href="https://github.com/harshm13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-accent hover:underline flex items-center gap-1"
              >
                View Profile <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            </div>

            {/* Embed GitHub contribution graph image */}
            <div className="overflow-x-auto rounded-xl border border-gray-800 p-2 bg-[#030712]/80 flex items-center justify-center min-h-[140px]">
              <img
                src="https://ghchart.rshah.org/3B82F6/harshm13"
                alt="Harsh Mehta's GitHub Contribution Graph"
                className="w-full max-w-full opacity-90 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div class="text-xs text-textMuted font-mono py-8">GitHub Contribution Heatmap Active • @harshm13</div>';
                }}
              />
            </div>
          </div>

        </div>

        {/* Top Repositories Cards Grid */}
        <div>
          <h4 className="text-xl font-bold text-white font-outfit mb-6 flex items-center gap-2">
            <FaBookOpen className="text-accent" /> Public Repositories
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repoList.slice(0, 4).map((repo, i) => (
              <motion.a
                key={repo.name || i}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-cardDark/90 border border-gray-800 hover:border-primary/50 transition-all duration-200 group block"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-bold text-white font-outfit group-hover:text-primary transition-colors flex items-center gap-2">
                    <FaGithub className="w-4 h-4 text-textMuted group-hover:text-primary" />
                    {repo.name}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-textMuted">
                    <span className="flex items-center gap-1"><FaStar className="text-yellow-400" /> {repo.stargazers_count || 0}</span>
                    <span className="flex items-center gap-1"><FaCodeBranch className="text-accent" /> {repo.forks_count || 0}</span>
                  </div>
                </div>
                <p className="text-xs text-textMuted leading-relaxed mb-3">
                  {repo.description || 'Open source software repository.'}
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /> {repo.language || 'JavaScript'}
                  </span>
                  <span className="text-accent group-hover:underline flex items-center gap-1">
                    View Repo <FaExternalLinkAlt className="w-3 h-3" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GithubSection;
