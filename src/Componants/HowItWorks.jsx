import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cards = [
    {
      title: "Candidate Intake",
      description: "Automated collection and secure storage of candidate information with intelligent data parsing.",
      stage: "Stage 1",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      color: "secondary",
      bg: "bg-secondary-dark/10"
    },
    {
      title: "Resume Analysis",
      description: "Comprehensive evaluation using NLP to assess qualifications against job requirements.",
      stage: "Stage 2",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
      ),
      color: "secondary",
      bg: "bg-secondary-dark/10"
    },
    {
      title: "Interview Coordination",
      description: "Seamless scheduling with candidate preference matching and calendar integration.",
      stage: "Stage 3",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      ),
      color: "secondary",
      bg: "bg-secondary-dark/10"
    },
    {
      title: "AI Evaluation",
      description: "Natural language processing assesses responses with behavioral and technical scoring.",
      stage: "Stage 4",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      color: "secondary",
      bg: "bg-secondary-dark/10"
    },
  ];

  return (
    <section id="how-it-works" className="relative py-16 md:py-24 bg-background-dark overflow-hidden" ref={ref}>
      {/* Background Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(3,32,43,1) 0%, rgba(21,51,58,0.8) 30%, rgba(37,89,89,0.5) 60%, transparent 100%)",
          maskImage: "linear-gradient(to top, transparent 0%, black 20%)"
        }}
      />

      {/* Top Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-light/50 to-transparent"
      />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -100, y: -100 }}
          animate={{ opacity: isInView ? 0.1 : 0, x: isInView ? 0 : -100, y: isInView ? 0 : -100 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-light/10 blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0, x: 100, y: 100 }}
          animate={{ opacity: isInView ? 0.1 : 0, x: isInView ? 0 : 100, y: isInView ? 0 : 100 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary-light/10 blur-[100px]"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,240,235,0.05)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: isInView ? 1 : 0.9, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="inline-flex items-center px-4 py-2 text-xs font-medium tracking-wider text-primary-light uppercase rounded-full bg-primary-dark/20 border border-primary-light/30 mb-6"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light"></span>
            </span>
            Process Overview
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-bold font-serif text-text-dark mb-4">
            <span className="bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
              Our AI-Powered Recruitment
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            An intelligent four-stage evaluation system designed to identify top talent with precision and efficiency.
          </motion.p>
        </motion.div>

        {/* Process Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {cards.map(({ title, description, stage, icon, bg }, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className="group relative h-full"
            >
              {/* Card Container */}
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                }}
                className={`relative h-full ${bg} backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 group-hover:shadow-glow`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Card Shine Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-secondary-light/5 group-hover:opacity-100 opacity-0 transition-opacity duration-500 transform-gpu blur-[80px]"></div>
                </div>

                {/* Card Content */}
                <div className="relative h-full flex flex-col">
                  {/* Icon Container with 3D Effect */}
                  <motion.div
                    whileHover={{
                      rotateY: 8,
                      rotateX: 4,
                      transition: { duration: 0.5, ease: "easeOut" }
                    }}
                    className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-secondary-light to-secondary rounded-xl mb-5 mx-auto shadow-lg"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {icon}
                    </svg>
                  </motion.div>

                  {/* Title with Gradient Text */}
                  <h3 className="text-xl font-semibold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary-light to-secondary">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 text-center mb-5 leading-relaxed flex-grow">
                    {description}
                  </p>

                  {/* Stage Badge */}
                  <div className="flex justify-center">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden text-xs font-medium px-3 py-1 rounded-full bg-secondary-dark/10 text-secondary-light"
                    >
                      <span className="relative z-10">{stage}</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-secondary-light/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </motion.span>
                  </div>
                </div>

                {/* Animated Connector (for desktop) */}
                {i < cards.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-8 w-8 h-px bg-gradient-to-r from-transparent via-primary-light/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isInView ? 1 : 0 }}
                    transition={{ delay: 0.3 + (i * 0.15) + 0.3, duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute -right-1 top-1/2 w-2 h-2 rounded-full bg-primary-light"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isInView ? 1 : 0 }}
                      transition={{ delay: 0.3 + (i * 0.15) + 0.6, duration: 0.3 }}
                    />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;