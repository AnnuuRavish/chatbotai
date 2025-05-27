import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff, FiUser, FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1); // For multi-step form
  const navigate = useNavigate();

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const validateStep1 = () => {
    const { name, email } = formData;
    if (!name || !email) {
      setError('Name and email are required');
      return false;
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const { password, confirmPassword } = formData;
    if (!password || !confirmPassword) {
      setError('Both password fields are required');
      return false;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
      }
      return;
    }

    if (!validateStep2()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/login?registered=true');
      } else {
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-text-light flex items-center justify-center p-4 font-serif">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Progress Steps */}
          <div className="flex border-b border-gray-800">
            <div
              className={`flex-1 py-4 text-center font-medium ${step === 1 ? 'text-primary-light border-b-2 border-primary-light' : 'text-gray-400'}`}
            >
              Account Info
            </div>
            <div
              className={`flex-1 py-4 text-center font-medium ${step === 2 ? 'text-primary-light border-b-2 border-primary-light' : 'text-gray-400'}`}
            >
              Security
            </div>
          </div>

          <div className="p-8">
            <div className="text-center mb-8">
              <motion.h2
                className="text-3xl font-bold bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {step === 1 ? 'Create Your Account' : 'Set Your Password'}
              </motion.h2>
              <p className="text-gray-400 mt-2">
                {step === 1 ? 'Start your journey with us' : 'Secure your account with a password'}
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-red-900/20 text-red-400 border border-red-500 mb-4 p-3 rounded-lg text-sm"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <>
                  {/* Name */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="text-gray-500" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Password */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiLock className="text-gray-500" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        minLength="8"
                        required
                        className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-light"
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Must be at least 8 characters
                    </p>
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiLock className="text-gray-500" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                        minLength="8"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="flex items-center justify-between mt-6">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm text-primary-light hover:underline"
                  >
                    Back
                  </button>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className={`ml-auto py-3 px-6 bg-gradient-to-r from-primary-light to-accent-light text-white font-medium rounded-lg shadow hover:shadow-lg transition flex items-center ${loading ? 'opacity-70' : ''}`}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      {step === 1 ? 'Processing...' : 'Creating Account...'}
                    </span>
                  ) : (
                    <>
                      {step === 1 ? 'Continue' : 'Complete Registration'}
                      <FiArrowRight className="ml-2" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-800 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <a href="/login" className="text-primary-light hover:underline font-medium">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SignUp;