import { Link, useNavigate, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, LogOut } from "lucide-react";

function Navbar() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      try {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser && (parsedUser.username || parsedUser.email)) {
            setUser(parsedUser);
          } else {
            sessionStorage.removeItem("user");
            setUser(null);
          }
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        sessionStorage.removeItem("user");
        setUser(null);
      }
    };

    checkUser();

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStarted = () => navigate(user ? "/agent" : "/login");

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  // Notice only change here: href for "Team" has leading slash
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Services", href: "/services" },
    { name: "Features", href: "/features" },
    { name: "Team", href: "/team" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 ${scrolled ? 'bg-background-dark/90 backdrop-blur-md' : 'bg-background-dark'}`}
      style={{
        isolation: 'isolate',
      }}
    >
      <div
        className={`absolute inset-0 ${scrolled ? 'backdrop-blur-md' : ''}`}
        style={{
          zIndex: -1,
          backgroundColor: scrolled ? 'rgba(3, 32, 43, 0.9)' : 'rgba(3, 32, 43, 1)',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent font-serif"
          >
            AIInterviews
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center font-serif">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-md text-sm font-medium transition-colors ${isActive
                    ? "bg-primary-light text-black"
                    : "text-gray-300 hover:text-white hover:bg-primary-dark/50"
                  }`
                }
                end={link.href === "/"}
              >
                {link.name}
              </NavLink>
            ))}

            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-primary-light" />
                  <span className="text-sm text-gray-300">
                    {user.username || user.email || "User"}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="border border-primary-light/50 text-primary-light hover:bg-primary-light/10 px-4 py-2 rounded-full text-sm transition"
                >
                  <LogOut className="w-4 h-4 inline mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-primary-light to-accent-light text-black px-5 py-2 rounded-full text-sm font-semibold hover:from-white hover:to-accent-light transition"
              >
                Get Started
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-md bg-primary-dark/60 hover:bg-primary-dark"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background-dark/95 backdrop-blur-md border-t border-primary-dark overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `block text-base px-3 py-2 rounded-md ${isActive
                      ? "bg-primary-light/20 text-white"
                      : "text-gray-300 hover:text-white hover:bg-primary-dark/30"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                  end={link.href === "/"}
                >
                  {link.name}
                </NavLink>
              ))}
              {user ? (
                <div className="pt-2 border-t border-primary-dark/30">
                  <div className="text-gray-300 mb-3 flex items-center space-x-2 px-3 py-2">
                    <User className="w-4 h-4 text-primary-light" />
                    <span>{user.username || user.email || "User"}</span>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left border border-primary-light/50 text-primary-light hover:bg-primary-light/10 px-4 py-2 rounded-full text-sm"
                  >
                    <LogOut className="w-4 h-4 inline mr-1" />
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    handleGetStarted();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-primary-light to-accent-light text-black px-4 py-2 rounded-full text-sm font-semibold mt-2"
                >
                  Get Started
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
