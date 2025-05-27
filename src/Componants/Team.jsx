import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function Team() {
  const [teamMembers, setTeamMembers] = useState(null);

  useEffect(() => {
    // Simulate API fetch with delay
    setTimeout(() => {
      setTeamMembers([
        {
          name: "Ajay Kumar",
          role: "AI Interview Engineer",
          image: "img/team-1.jpg",
          social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
          },
        },
        {
          name: "Ritika Sharma",
          role: "Product Designer",
          image: "img/team-2.jpg",
          social: {
            linkedin: "#",
            twitter: "#",
            dribbble: "#",
          },
        },
        {
          name: "Maya Patel",
          role: "Frontend Developer",
          image: "img/team-3.jpg",
          social: {
            linkedin: "#",
            github: "#",
          },
        },
      ]);
    }, 1000);
  }, []);

  if (!teamMembers)
    return (
      <div className="flex justify-center items-center min-h-[300px] text-white">
        Loading team members...
      </div>
    );

  return (
    <section
      id="team"
      className="relative py-24 bg-background-dark overflow-hidden min-h-screen"
    >
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-1/3 -left-1/4 w-1/2 h-full bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT rounded-full blur-[150px]"></div>
        <div className="absolute -bottom-1/3 -right-1/4 w-1/2 h-full bg-gradient-to-r from-accent-DEFAULT to-state-info rounded-full blur-[150px]"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-primary-DEFAULT/10 text-primary-light border border-primary-light/20 mb-4"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light"></span>
            </span>
            Our Creative Team
          </motion.span>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold font-serif text-text-dark mb-4"
          >
            <span className="bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
              Meet Our
            </span> Experts
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            The brilliant minds behind our innovative solutions, dedicated to
            transforming the recruitment experience.
          </motion.p>
        </motion.div>

        {/* Team members grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
          {teamMembers.map((member, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              transitionSpeed={400}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="group relative"
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card border glow */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-primary-light/20 via-secondary-light/30 to-accent-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card content */}
              <div className="relative h-full bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-800 p-8 transition-all duration-500 group-hover:border-primary-light/30 overflow-hidden">
                {/* Floating avatar */}
                <motion.div
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  className="relative w-40 h-40 mx-auto mb-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-secondary-light rounded-full blur-md opacity-30"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full rounded-full object-cover border-4 border-gray-800 group-hover:border-primary-light transition-all duration-500 z-10"
                  />
                </motion.div>

                {/* Team member info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-text-dark mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-light mb-6">{member.role}</p>

                  {/* Social links */}
                  <div className="flex justify-center gap-3">
                    {member.social.linkedin && (
                      <motion.a
                        whileHover={{ y: -5 }}
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-gray-800 hover:bg-primary-DEFAULT rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn className="text-lg" />
                      </motion.a>
                    )}
                    {member.social.twitter && (
                      <motion.a
                        whileHover={{ y: -5 }}
                        href={member.social.twitter}
                        className="w-10 h-10 bg-gray-800 hover:bg-primary-DEFAULT rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter className="text-lg" />
                      </motion.a>
                    )}
                    {member.social.github && (
                      <motion.a
                        whileHover={{ y: -5 }}
                        href={member.social.github}
                        className="w-10 h-10 bg-gray-800 hover:bg-primary-DEFAULT rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="text-lg" />
                      </motion.a>
                    )}
                    {member.social.dribbble && (
                      <motion.a
                        whileHover={{ y: -5 }}
                        href={member.social.dribbble}
                        className="w-10 h-10 bg-gray-800 hover:bg-primary-DEFAULT rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                        aria-label="Dribbble"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaDribbble className="text-lg" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-primary-light/10 blur-xl"></div>
                <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-secondary-light/10 blur-xl"></div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 mb-6">Want to join our talented team?</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT rounded-xl text-white font-medium shadow-btn hover:shadow-btn-active transition-all duration-300"
          >
            We're Hiring <FiArrowUpRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Team;