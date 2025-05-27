import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Main from "./Main";

export default function HeroSection({ user }) {
  return (
    <section
      id="home"
      className="pt-24 pb-16 px-6 md:px-12 text-text-dark relative overflow-hidden bg-gradient-to-br from-background-dark via-primary-dark to-background-dark "
    >
      {/* Sparkle Effect Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sparkle dots */}
        {[...Array(550)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary-light rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 2}s alternate`
            }}
          />
        ))}
      </div>

      {/* Add this to your global CSS or Tailwind config */}
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.1); }
          100% { opacity: 0.1; transform: scale(0.8); }
        }
      `}</style>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <h1 className="text-6xl  font-serif md:text-5xl font-bold leading-tight">
            Revolutionize Hiring with{" "}
            <span className="bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
              AI Interviews
            </span>
          </h1>
          <p className="text-lg text-gray-500">
            Our intelligent interview agent evaluates candidates, scores
            responses, and helps you hire faster — all with zero human bias.
          </p>
          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={user ? "/agent" : "/login"}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT text-white font-medium rounded-xl shadow-btn hover:shadow-btn-active transition-all group relative overflow-hidden"
              >
                Try It Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/demo"
                className="inline-block bg-transparent border border-primary-light text-primary-light hover:bg-primary-light/10 font-medium py-3 px-8 rounded-full transition-all duration-300"
              >
                Live Demo
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center relative"
        >
          <div className="relative">
            <video
              src="/public/4433139-uhd_3840_2160_25fps.mp4"
              className="w-full rounded-lg"
              autoPlay
              loop
              muted
            ></video>
            <div className="absolute inset-0 bg-primary-dark opacity-40 rounded-lg"></div>
          </div>
        </motion.div>
      </div>
      <div>
        <div className="space-y-16 md:space-y-24">
          <Main />
        </div>
      </div>
    </section>
  );
}