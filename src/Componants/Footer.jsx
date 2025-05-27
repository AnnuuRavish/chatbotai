import { motion } from "framer-motion";
import { FaHeart, FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaRegEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaTwitter className="w-4 h-4" />, label: "Twitter", color: "hover:text-blue-400" },
    { icon: <FaLinkedin className="w-4 h-4" />, label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: <FaGithub className="w-4 h-4" />, label: "GitHub", color: "hover:text-gray-200" },
    { icon: <FaFacebook className="w-4 h-4" />, label: "Facebook", color: "hover:text-blue-500" }
  ];

  const quickLinks = ['Home', 'Features', 'Pricing', 'About Us', 'Testimonials'];
  const resources = ['Blog', 'Documentation', 'Help Center', 'API Status', 'Community'];
  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookies'];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-gradient-to-b from-background-dark to-gray-900 text-gray-300 pt-20 pb-10 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-1/3 -left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-primary-light to-accent-light rounded-full blur-[150px]"></div>
        <div className="absolute -bottom-1/3 -right-1/4 w-[800px] h-[800px] bg-gradient-to-r from-secondary-light to-accent-light rounded-full blur-[150px]"></div>
      </div>

      {/* Glowing top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-light/70 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="bg-primary-light/10 p-2 rounded-lg"
              >
                <RiSendPlaneFill className="text-2xl text-primary-light" />
              </motion.div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent font-serif">
                AIInterviews
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolutionizing recruitment with AI-powered interview solutions that help companies find the perfect candidates efficiently.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5, scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 shadow-lg`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-serif text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-light rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary-light transition-colors duration-300 text-sm flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-light rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-serif text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-light rounded-full"></span>
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-accent-light transition-colors duration-300 text-sm flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-light rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-serif text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary-light rounded-full"></span>
              Contact Us
            </h3>
            <address className="text-gray-400 not-italic text-sm space-y-4">
              <motion.p
                whileHover={{ x: 3 }}
                className="flex items-start gap-3"
              >
                <FaMapMarkerAlt className="text-secondary-light mt-0.5 flex-shrink-0" />
                <span>123 AI Avenue, Tech Park<br />Silicon Valley, CA 94000</span>
              </motion.p>
              <motion.p
                whileHover={{ x: 3 }}
                className="flex items-center gap-3"
              >
                <FaRegEnvelope className="text-secondary-light flex-shrink-0" />
                <a href="mailto:hello@aiinterviews.com" className="hover:text-secondary-light transition-colors">hello@aiinterviews.com</a>
              </motion.p>
              <motion.p
                whileHover={{ x: 3 }}
                className="flex items-center gap-3"
              >
                <FaPhoneAlt className="text-secondary-light flex-shrink-0" />
                <a href="tel:+11234567890" className="hover:text-secondary-light transition-colors">+1 (123) 456-7890</a>
              </motion.p>
            </address>

            <div className="pt-4">
              <h4 className="text-sm font-medium text-white mb-3">Subscribe to our newsletter</h4>
              <motion.form
                whileHover={{ scale: 1.01 }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light/50 text-white placeholder-gray-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-light to-accent-light text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:shadow-primary-light/20 transition-all"
                >
                  Join
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10"
        />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 flex items-center flex-wrap justify-center gap-2"
          >
            <span>&copy; {currentYear} AIInterviews. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="inline-flex items-center">
              Crafted with <FaHeart className="text-red-500 mx-1.5 animate-pulse" /> by Annu Ravish
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex gap-6 flex-wrap justify-center"
          >
            {legalLinks.map((item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -2, color: "#ffffff" }}
                transition={{ duration: 0.2 }}
                className="text-gray-500 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;