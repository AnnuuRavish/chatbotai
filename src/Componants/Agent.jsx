import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiDashboardFill } from 'react-icons/ri';
import {
  FiUsers, FiCalendar, FiPieChart, FiMessageSquare,
  FiSettings
} from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const CandidateManagement = () => {
  const [candidates, setCandidates] = useState([]);
  const [shortlisted, setShortlisted] = useState([]);
  const [loading, setLoading] = useState({ email: false, resume: false, invitation: false });
  const [error, setError] = useState(null);
  const [hasName, setHasName] = useState(false);
  const [agentStats, setAgentStats] = useState({
    email: { processed: 0, skipped: 0 },
    resume: { screened: 0 },
    invitation: { sent: 0, failed: 0 }
  });

  // const navigate = useNavigate();
  const API_BASE_URL = 'http://localhost:8000';

  useEffect(() => {
    setHasName(!!localStorage.getItem('userName'));
    fetchCandidates();
    fetchShortlisted();
  }, []);

  const fetchCandidates = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/candidates`);
      if (!res.ok) throw new Error('Failed to fetch candidates');
      setCandidates(await res.json());
    } catch (err) { setError(err.message); }
  };

  const fetchShortlisted = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/shortlisted`);
      if (!res.ok) throw new Error('Failed to fetch shortlisted candidates');
      setShortlisted(await res.json());
    } catch (err) { setError(err.message); }
  };

  const handleAgent = async (type, url) => {
    setLoading(prev => ({ ...prev, [type]: true }));
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/${url}`, { method: 'POST', headers: { 'Content-Type': 'application/json' } });
      if (!res.ok) throw new Error(`${type} agent failed`);
      const result = await res.json();
      setAgentStats(prev => ({ ...prev, [type]: result }));
      type === 'email' ? fetchCandidates() : fetchShortlisted();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(prev => ({ ...prev, [type]: false }));
    }
  };

  const formatDate = (str) => new Date(str).toLocaleString();

  return (
    <div className="min-h-screen bg-background-dark text-text-dark font-sans flex mt-12">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-20 md:w-64 bg-gray-900 border-r border-gray-800 flex flex-col fixed h-full"
      >
        <div className="p-4 flex items-center justify-center md:justify-start">
          <span className="font-serif hidden md:block ml-2 text-xl font-bold bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
            AIInterviews
          </span>
        </div>

        <nav className="flex-1 mt-8">
          {[
            { icon: <RiDashboardFill />, name: 'Dashboard', path: '/dashboard' },
            { icon: <FiUsers />, name: 'Agent', path: '/agent' },
            { icon: <FiCalendar />, name: 'Schedule', path: '/schedule' },
            { icon: <FiMessageSquare />, name: 'Interviews', path: '/interviews' },
            { icon: <FiPieChart />, name: 'Analytics', path: '/analytics' },
            { icon: <FiSettings />, name: 'Settings', path: '/settings' }
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center w-full p-4 text-left transition-colors duration-200 ${isActive ? 'bg-primary-dark/20 text-primary-light' : 'text-gray-400 hover:text-white'
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span className="hidden md:block ml-3">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 ml-20 md:ml-64 p-6">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Title Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-accent-light mb-2">Candidate Management</h2>
              <p className="text-gray-400">Efficiently manage your talent pipeline</p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <motion.button
                whileHover={{ y: -2 }}
                className="bg-secondary-dark px-4 py-2 rounded-full text-sm flex items-center space-x-1"
              >
                <span>Refresh Data</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Agent Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {['email', 'resume', 'invitation'].map((agent) => (
              <motion.div
                key={agent}
                whileHover={{ y: -5 }}
                className="bg-secondary-dark p-6 rounded-3xl shadow-lg border-l-4 border-accent-dark"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 capitalize">{agent} Agent</h3>
                    <p className="text-gray-400 text-sm">
                      {agent === 'email' ? 'Process new candidate emails' :
                        agent === 'resume' ? 'Screen and score resumes' :
                          'Send interview invitations'}
                    </p>
                  </div>
                  <div className="bg-primary-dark p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {agent === 'email' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      ) : agent === 'resume' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      )}
                    </svg>
                  </div>
                </div>

                <motion.button
                  onClick={() => handleAgent(agent, `run-${agent}-agent`)}
                  disabled={loading[agent]}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl transition-all flex items-center justify-center space-x-2 ${loading[agent]
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-accent-dark hover:bg-accent-light shadow-md hover:shadow-lg'
                    }`}
                >
                  {loading[agent] ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Run {agent.charAt(0).toUpperCase() + agent.slice(1)} Agent</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </motion.button>

                {Object.keys(agentStats[agent]).length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-primary-light"
                  >
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Last Run Stats:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(agentStats[agent]).map(([key, val]) => (
                        <div key={key} className="bg-primary-dark/50 p-2 rounded-lg text-center">
                          <p className="text-xs text-gray-400">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                          <p className="font-bold text-accent-light">{val}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-900/30 border border-red-700 text-red-300 p-4 rounded-xl flex items-start space-x-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h4 className="font-bold mb-1">Operation Failed</h4>
                <p className="text-sm">{error}</p>
              </div>
            </motion.div>
          )}

          {/* Candidate Tables */}
          <div className="grid lg:grid-cols-2 gap-8">
            {[{ title: 'All Candidates', data: candidates }, { title: 'Shortlisted', data: shortlisted }].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.2 }}
                className="bg-secondary-dark rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-primary-dark px-6 py-4 flex justify-between items-center">
                  <h3 className="text-lg font-semibold">
                    {section.title}
                    <span className="ml-2 bg-accent-dark text-white text-sm px-3 py-1 rounded-full">
                      {section.data.length}
                    </span>
                  </h3>
                  <button className="text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary-dark/50 text-gray-400">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          {section.title.includes('Shortlisted') ? 'Score' : 'Date Added'}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-primary-light/20">
                      {section.data.length > 0 ? (
                        section.data.map((c, i) => (
                          <motion.tr
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="hover:bg-primary-light/10 transition-colors"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 bg-accent-dark/20 rounded-full flex items-center justify-center mr-3">
                                  <span className="text-accent-light font-medium">
                                    {c.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                                  </span>
                                </div>
                                <div>
                                  <div className="font-medium">{c.name}</div>
                                  {section.title.includes('Shortlisted') && (
                                    <div className="text-xs text-gray-500">ID: {c.id || 'N/A'}</div>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-300">{c.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {section.title.includes('Shortlisted') ? (
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${c.score > 75 ? 'bg-green-900/30 text-green-400' :
                                  c.score > 50 ? 'bg-yellow-900/30 text-yellow-400' :
                                    'bg-red-900/30 text-red-400'
                                  }`}>
                                  {c.score}%
                                </span>
                              ) : (
                                <div className="text-sm text-gray-400">{formatDate(c.dateAdded)}</div>
                              )}
                            </td>
                          </motion.tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3" className="px-6 py-12 text-center text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            No {section.title.toLowerCase()} found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default CandidateManagement;