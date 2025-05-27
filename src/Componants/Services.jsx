import { motion } from 'framer-motion';
import {
  FaRobot,
  FaFileAlt,
  FaClock,
  FaChartLine,
  FaShieldAlt,
  FaLightbulb,
  FaArrowRight
} from 'react-icons/fa';

const services = [
  {
    icon: <FaRobot className="w-5 h-5" />,
    title: "AI-Powered Interviewing",
    description: "Our intelligent agents conduct first-round interviews with real-time analysis",
    features: [
      "Natural language processing",
      "Sentiment detection",
      "Response scoring"
    ],
    metrics: {
      efficiency: "87% faster",
      accuracy: "92% match rate"
    },
    status: "active",
    color: "primary",
    delay: 0.1
  },
  {
    icon: <FaFileAlt className="w-5 h-5" />,
    title: "Candidate Evaluation",
    description: "Detailed reports with comprehensive performance insights",
    features: [
      "Behavioral patterns",
      "Skill assessment",
      "Comparative analysis"
    ],
    metrics: {
      efficiency: "40+ data points",
      accuracy: "AI-generated scores"
    },
    status: "updated",
    color: "secondary",
    delay: 0.2
  },
  {
    icon: <FaClock className="w-5 h-5" />,
    title: "24/7 Scheduling",
    description: "Always-on availability for candidate convenience",
    features: [
      "Automated reminders",
      "Calendar integration",
      "Time zone detection"
    ],
    metrics: {
      efficiency: "100% availability",
      accuracy: "No scheduling conflicts"
    },
    status: "popular",
    color: "accent",
    delay: 0.3
  }
];

const statusStyles = {
  active: "bg-green-500/10 text-green-400 border-green-500/20",
  updated: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  popular: "bg-purple-500/10 text-purple-400 border-purple-500/20"
};

const Services = () => {
  return (
    <section className="relative py-24 bg-background-dark text-text-dark overflow-hidden">
      {/* Lighter Binary Code Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-white text-xs whitespace-nowrap"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 6 + 8}px`,
              filter: 'blur(0.5px)'
            }}
            animate={{
              y: [0, -1000],
              opacity: [0.1, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <span key={j} className="opacity-80">
                {Math.random() > 0.5 ? '1' : '0'}
              </span>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Floating AI Circuit Nodes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary/15 to-accent/15"
            style={{
              width: `${Math.random() * 10 + 3}px`,
              height: `${Math.random() * 10 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(0.8px)'
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Pulsing Neural Network Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        {[...Array(6)].map((_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = Math.random() * 100;
          const y2 = Math.random() * 100;

          return (
            <motion.line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="url(#pulse-gradient)"
              strokeWidth="0.3"
              strokeDasharray="3 3"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{
                duration: Math.random() * 6 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          );
        })}
        <defs>
          <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D8B7A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3AA89E" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary-light border border-primary-light/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light"></span>
            </span>
            AI Recruitment Solutions
          </motion.div>
          <h2 className=" text-4xl font-bold font-serif text-text-dark mb-4">
            <span className="bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
              Intelligent Hiring
            </span> Platform
          </h2>
          <p className="text-lg text-gray-500">
            Transform your recruitment with our cutting-edge AI technology
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: service.delay, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`h-full p-6 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-${service.color}-light/40 transition-all duration-300 hover:shadow-glow-lg overflow-hidden relative`}>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-gradient-to-br from-${service.color}-light/30 to-transparent pointer-events-none transition-opacity duration-500`}></div>

                {/* Card Header */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-${service.color}-dark/10 text-${service.color}-light border border-${service.color}-light/30`}>
                    {service.icon}
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusStyles[service.status]}`}>
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </span>
                </div>

                {/* Card Body */}
                <div className="mb-6 relative z-10">
                  <h3 className="text-xl font-semibold text-text-dark mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>

                  <div className="mb-5">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <span>Key Features</span>
                      <span className="h-px flex-1 bg-gray-800 mx-2"></span>
                      <span>{service.features.length}</span>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 bg-${service.color}-light`}></span>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-800/30 rounded-lg mb-6 border border-gray-800">
                    <div className="text-center">
                      <FaChartLine className={`mx-auto mb-1 text-${service.color}-light`} />
                      <span className="block text-xs text-gray-400 mb-1">Efficiency</span>
                      <span className="block text-sm font-medium text-white">{service.metrics.efficiency}</span>
                    </div>
                    <div className="text-center">
                      <FaShieldAlt className={`mx-auto mb-1 text-${service.color}-light`} />
                      <span className="block text-xs text-gray-400 mb-1">Accuracy</span>
                      <span className="block text-sm font-medium text-white">{service.metrics.accuracy}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex justify-between items-center border-t border-gray-800 pt-4 relative z-10">
                  <motion.a
                    href="#"
                    className={`inline-flex items-center text-sm text-${service.color}-light group`}
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                  <div className="flex items-center text-xs text-gray-500">
                    <FaLightbulb className="mr-1 text-yellow-400/70" />
                    AI-powered
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-DEFAULT to-accent-DEFAULT text-white font-medium rounded-xl shadow-btn hover:shadow-btn-active transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaArrowRight className="mr-2" />
            Launch Turbo Demo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;