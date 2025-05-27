import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaChartLine, FaMagic, FaUserShield, FaSyncAlt, FaLanguage } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { IoMdAnalytics } from 'react-icons/io';
import { RiTeamFill } from 'react-icons/ri';

const featureItems = [
  {
    icon: <FaRobot className="text-2xl" />,
    title: "Automated Interviews",
    description: "Our AI agents conduct natural conversations using advanced NLP with sentiment analysis, follow-up questions, and contextual understanding.",
    color: "text-primary-light",
    subFeatures: [
      "24/7 availability",
      "Multi-language support",
      "Customizable question sets"
    ]
  },
  {
    icon: <FaBrain className="text-2xl" />,
    title: "Cognitive Analysis",
    description: "Deep learning algorithms analyze verbal responses, facial expressions (when available), and speech patterns for comprehensive evaluation.",
    color: "text-secondary-light",
    subFeatures: [
      "Emotional intelligence scoring",
      "Communication style detection",
      "Problem-solving approach"
    ]
  },
  {
    icon: <FaChartLine className="text-2xl" />,
    title: "Performance Analytics",
    description: "Detailed metrics dashboard with comparative analysis against industry benchmarks and role-specific requirements.",
    color: "text-accent-light",
    subFeatures: [
      "Skill gap identification",
      "Growth potential assessment",
      "Team fit prediction"
    ]
  },
  {
    icon: <FaMagic className="text-2xl" />,
    title: "Bias Elimination",
    description: "Patented algorithms remove demographic, gender, and racial bias while preserving relevant competency indicators.",
    color: "text-state-info",
    subFeatures: [
      "Anonymized audio processing",
      "Culture-add (not culture-fit) focus",
      "Diversity scoring"
    ]
  },
  {
    icon: <FaUserShield className="text-2xl" />,
    title: "Candidate Experience",
    description: "Personalized interview flows with real-time feedback and practice modes to help candidates perform at their best.",
    color: "text-primary-light",
    subFeatures: [
      "Interview coaching tips",
      "Stress-reduction techniques",
      "Accessibility features"
    ]
  },
  {
    icon: <IoMdAnalytics className="text-2xl" />,
    title: "Predictive Hiring",
    description: "Machine learning models predict candidate success based on historical hiring data and performance outcomes.",
    color: "text-accent-light",
    subFeatures: [
      "Retention likelihood",
      "Ramp-up time prediction",
      "Performance trajectory"
    ]
  }
];

const stats = [
  { value: "75%", label: "Reduction in time-to-hire" },
  { value: "4.8/5", label: "Candidate satisfaction" },
  { value: "42%", label: "Increase in diversity" },
  { value: "90%", label: "Prediction accuracy" }
];

const testimonials = [
  {
    quote: "This AI platform reduced our hiring time by 65% while improving candidate quality.",
    author: "Sarah K., Head of Talent at TechCorp",
    role: "Enterprise Customer"
  },
  {
    quote: "The bias elimination features helped us build a truly diverse engineering team.",
    author: "Michael T., CTO at Innovate",
    role: "Fast-Growing Startup"
  }
];

const integrationLogos = [
  { name: "LinkedIn", icon: "https://www.citypng.com/public/uploads/preview/hd-vector-flat-linkedin-in-round-icon-png-701751695046390m4phkuuiqm.png" },
  { name: "Greenhouse", icon: "https://www.universityofcalifornia.edu/sites/default/files/longform/images/emissions_0.jpg" },
  { name: "Workday", icon: "https://www.erpresearch.com/hubfs/chub_backup/workday%20erp%20.png" },
  { name: "Lever", icon: "/lever-icon.svg" },
  { name: "Zoom", icon: "/zoom-icon.svg" }
];

function Main() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Grid */}
      <section className="fixed inset-0 pointer-events-none z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(1.5)"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeOpacity="0.05"
                className="text-primary-dark/30"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </section>

      {/* Main Platform Section */}
      <div className="relative bg-background-dark/90 text-text-dark py-28 px-4 overflow-hidden z-10 mt-24">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-stretch gap-8 xl:gap-12 min-h-[600px]">
            {/* Left - Image Container with Heading */}
            <motion.div
              className="w-full lg:w-1/2 flex flex-col justify-center"
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            >
              {/* Main Heading in Image Container */}
              <div className="mb-8 lg:mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 border border-primary-light/30 rounded-full text-primary-light px-4 py-1.5 text-sm font-medium hover:bg-primary-light/10 transition-all backdrop-blur-sm mb-4"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light"></span>
                  </span>
                  The Future of Hiring is Here
                  <FaLanguage className="ml-1 opacity-80" />
                </motion.div>

                <h2 className="text-4xl font-bold font-serif text-text-dark mb-4">
                  <span className="bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
                    Next-Gen AI
                  </span>
                  <br />
                  <span className="text-text-dark">Interview Intelligence</span>
                </h2>

                <p className="text-lg text-gray-500 mb-8 leading-relaxed mt-3">
                  Our platform combines cutting-edge artificial intelligence with industrial-organizational psychology to deliver the most advanced candidate evaluation system available.
                  <span className="block mt-2 text-primary-light/90">Reduce hiring bias by 92% while improving quality-of-hire by 40%.</span>
                </p>

              </div>

              {/* Image Content */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Interactive glow effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary-light/20 to-accent-light/20 rounded-3xl blur-xl opacity-70"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Image container */}
                <motion.div className="relative w-full h-full max-w-[800px] flex items-center justify-center">
                  <div className='relative'>
                    <motion.img
                      src="/public/UniversalUpscaler_2aa82296-4ca1-4cf2-a7f0-f61ad8596ef4.jpg"
                      alt="AI Interview Platform Dashboard"
                      className="w-full h-auto max-h-[400px] object-contain rounded-xl border border-gray-800 bg-gray-900/50"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-primary-dark opacity-40 rounded-lg"></div>
                  </div>
                  {/* Floating UI elements overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                      className="absolute top-1/4 left-1/4 w-16 h-16 bg-accent-light/10 rounded-full border border-accent-light/20 backdrop-blur-sm"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-primary-light/10 rounded-lg border border-primary-light/20 backdrop-blur-sm"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.7, 0.9, 0.7],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                      }}
                    />
                  </div>
                </motion.div>

                {/* Stats floating cards */}
                <motion.div
                  className="absolute bottom-8 right-8 bg-gray-900/80 backdrop-blur-md p-4 rounded-xl border border-gray-800 shadow-lg z-20"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent-light/10 rounded-lg text-accent-light">
                      <FaSyncAlt className="text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">87% Faster</p>
                      <p className="text-sm text-gray-400">Hiring cycle</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-8 left-8 bg-gray-900/80 backdrop-blur-md p-4 rounded-xl border border-gray-800 shadow-lg z-20"
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  whileHover={{ y: 5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary-light/10 rounded-lg text-primary-light">
                      <RiTeamFill className="text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">2.5x More</p>
                      <p className="text-sm text-gray-400">Diverse hires</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Content Container */}
            <motion.div
              className="w-full lg:w-1/2 flex items-center"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
            >
              <div className="w-full max-w-2xl mx-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {/* Performance stats grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{
                          y: -3,
                          backgroundColor: 'rgba(3, 32, 43, 0.7)' // primary-dark
                        }}
                      >
                        <p className="text-2xl font-bold bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced features grid */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {featureItems.slice(0, 4).map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-5 bg-gray-900/50 hover:bg-gray-900/70 rounded-xl border border-gray-800 hover:border-primary-light/30 transition-all backdrop-blur-sm group"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
                        whileHover={{
                          y: -5,
                          borderColor: 'rgba(45, 139, 122, 0.3)', // primary-light
                          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
                        }}
                      >
                        <div className={`p-3 rounded-lg bg-gray-800/50 ${item.color} group-hover:bg-gray-800/70 transition-colors`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-text-dark">{item.title}</h3>
                          <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                          <ul className="space-y-1">
                            {item.subFeatures.map((sub, i) => (
                              <li key={i} className="flex items-center text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-light mr-2"></span>
                                {sub}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA with animated elements */}
                  <div className="flex flex-col sm:flex-row gap-4 relative">
                    <motion.div
                      className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-primary-light/10 blur-[60px]"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <motion.a
                      href="/demo"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT text-white font-medium rounded-xl shadow-btn hover:shadow-btn-active transition-all group relative overflow-hidden"
                      whileHover={{
                        scale: 1.03,
                        boxShadow: '0 10px 25px -5px rgba(16, 78, 74, 0.4)' // primary-DEFAULT
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">Schedule Demo</span>
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-light/80 to-accent-light/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.a>

                    <motion.a
                      href="/how-it-works"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gray-900/80 border border-gray-800 text-white font-medium rounded-xl hover:bg-gray-800 transition-all group relative overflow-hidden"
                      whileHover={{
                        scale: 1.03,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">See Case Studies</span>
                      <FiArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity -mr-3 group-hover:mr-0 relative z-10" />
                      <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -translate-x-full group-hover:translate-x-0 duration-700"></div>
                      </div>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <section className="relative py-16 px-4 overflow-hidden z-10 bg-transparent mt-52">
          {/* Wave Pattern */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            <path
              d="M0,192L48,186C96,180,192,168,288,165.3C384,163,480,171,576,165.3C672,160,768,141,864,138.7C960,137,1056,155,1152,154.7C1248,155,1344,139,1392,128L1440,117L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              fill="rgba(16, 78, 74, 0.3)"  // primary-DEFAULT
              className="opacity-70"
            ></path>
            <path
              d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,213.3C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              fill="rgba(45, 139, 122, 0.4)"  // primary-light
              className="opacity-90"
            ></path>
          </svg>

          <div className="container mx-auto relative z-10 max-w-5xl">
            {/* Testimonials */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-3 text-primary-dark font-serif">Trusted by Leading Companies</h3>
              <p className="text-primary-dark/80 text-center text-sm max-w-lg mx-auto mb-8">
                Organizations worldwide are transforming their hiring with our AI platform
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-primary-light/30 hover:border-primary-light/50 transition-all shadow-lg"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-primary-light text-2xl mt-1">"</div>
                      <div>
                        <p className="text-base mb-4 text-primary-dark">{testimonial.quote}</p>
                        <div>
                          <p className="font-semibold text-sm text-primary-DEFAULT">{testimonial.author}</p>
                          <p className="text-primary-dark/80 text-xs">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-3 text-primary-dark font-serif">Seamless Integrations</h3>
              <p className="text-primary-dark/80 text-center text-sm max-w-lg mx-auto mb-8">
                Works with your existing HR tech stack for a unified workflow
              </p>

              <motion.div
                className="flex flex-wrap justify-center gap-6 md:gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {integrationLogos.map((logo, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-lg p-3 w-28 h-16 border-primary-light/30 hover:border-primary-light/50 transition-all shadow-lg"
                    whileHover={{ y: -3, scale: 1.03 }}
                  >
                    <img
                      src={logo.icon}
                      alt={logo.name}
                      className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Final CTA */}
            <div className="relative mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-primary-light  font-serif  ">Ready to Transform Your Hiring?</h2>
              <p className="text-primary-dark/80 text-sm text-center max-w-lg mx-auto mb-6">
                Join thousands of companies making better hiring decisions with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a
                  href="/demo"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-light to-accent-light text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:shadow-primary-light/30 transition-all text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Demo
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-primary-light rounded-lg py-3 px-6 font-medium hover:bg-primary-light/10 transition-all border border-primary-light/50 hover:border-primary-light/70 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Pricing
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;