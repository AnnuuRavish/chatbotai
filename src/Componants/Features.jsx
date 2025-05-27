import { motion } from 'framer-motion';
import { FaBolt, FaBrain, FaShieldAlt, FaRocket, FaChartLine, FaClock, FaUserCheck, FaArrowRight } from 'react-icons/fa';

const features = [
  {
    icon: <FaBolt className="w-5 h-5" />,
    title: 'Turbo Screening',
    description: 'Process candidates 10x faster with accelerated AI pipeline',
    stats: [
      { label: 'Time Saved', value: '87%', icon: <FaClock className="w-3 h-3" /> },
      { label: 'Accuracy', value: '92%', icon: <FaUserCheck className="w-3 h-3" /> }
    ],
    features: [
      'Real-time analysis',
      'Automated scoring',
      'Candidate ranking'
    ],
    color: 'text-primary-light',
    bgColor: 'bg-primary-light/10',
    borderColor: 'border-primary-light/30',
    delay: 0.1
  },
  {
    icon: <FaBrain className="w-5 h-5" />,
    title: 'Neural Analysis',
    description: 'Deep learning evaluates verbal and non-verbal cues',
    stats: [
      { label: 'Data Points', value: '40+', icon: <FaChartLine className="w-3 h-3" /> },
      { label: 'Bias Reduced', value: '95%', icon: <FaShieldAlt className="w-3 h-3" /> }
    ],
    features: [
      'Sentiment detection',
      'Tone analysis',
      'Behavioral insights'
    ],
    color: 'text-secondary-light',
    bgColor: 'bg-secondary-dark/10',
    borderColor: 'border-secondary-light/30',
    delay: 0.2
  },
  {
    icon: <FaShieldAlt className="w-5 h-5" />,
    title: 'Bias Shield',
    description: 'Advanced algorithms eliminate unconscious bias',
    stats: [
      { label: 'Fairness', value: '99%', icon: <FaShieldAlt className="w-3 h-3" /> },
      { label: 'Diversity', value: '+45%', icon: <FaUserCheck className="w-3 h-3" /> }
    ],
    features: [
      'Gender-neutral',
      'Culture-blind',
      'Education-agnostic'
    ],
    color: 'text-accent-light',
    bgColor: 'bg-accent-dark/10',
    borderColor: 'border-accent-light/30',
    delay: 0.3
  },
  {
    icon: <FaRocket className="w-5 h-5" />,
    title: 'Rocket Assessments',
    description: 'Complete technical evaluations in record time',
    stats: [
      { label: 'Speed', value: '4x faster', icon: <FaBolt className="w-3 h-3" /> },
      { label: 'Completion', value: '98%', icon: <FaChartLine className="w-3 h-3" /> }
    ],
    features: [
      'Automated grading',
      'Skill mapping',
      'Benchmarking'
    ],
    color: 'text-state-info',
    bgColor: 'bg-state-info/10',
    borderColor: 'border-state-info/30',
    delay: 0.4
  }
];

export default function Features() {
  return (
    <section className="relative py-20 bg-background-dark overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary-light/10 to-secondary-light/10"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary-dark/20 text-primary-light border border-primary-light/20 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light"></span>
            </span>
            Turbo Features
          </motion.div>

          <motion.h2
            className="text-4xl font-bold font-serif text-text-dark mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
              Accelerated
            </span> Hiring Intelligence
          </motion.h2>

          <motion.p
            className="text-lg text-gray-500 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our platform leverages cutting-edge AI to transform your recruitment process with measurable results
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: feature.delay, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`h-full p-8 rounded-xl border border-gray-800 ${feature.bgColor} backdrop-blur-sm transition-all duration-300 group-hover:shadow-glow group-hover:${feature.borderColor.replace('border-', 'border-')}`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${feature.color} ${feature.bgColor} border ${feature.borderColor}`}>
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold text-text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>

                {/* Stats section */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {feature.stats.map((stat, i) => (
                    <div key={i} className="flex items-center">
                      <div className={`p-1.5 rounded mr-2 ${feature.color.replace('text-', 'bg-')}/20`}>
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-text-dark">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features list */}
                <div className="mb-6">
                  <div className="text-xs text-gray-500 mb-2">KEY FEATURES</div>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className={`w-1.5 h-1.5 rounded-full mr-2 ${feature.color.replace('text-', 'bg-')}`}></span>
                        <span className="text-sm text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <motion.a
                    href="#"
                    className={`text-sm ${feature.color} flex items-center group`}
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <FaArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-400">AI-Powered</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-DEFAULT to-accent-DEFAULT text-white font-medium rounded-xl shadow-btn hover:shadow-btn-active transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaBolt className="mr-2" />
            Launch Turbo Demo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}