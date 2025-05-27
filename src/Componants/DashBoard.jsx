import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FiUsers, FiCalendar, FiPieChart, FiMessageSquare,
  FiSettings, FiBell, FiSearch, FiUser, FiMail,
  FiMic, FiMicOff, FiSend, FiX
} from 'react-icons/fi';
import { FaRobot, FaUserCheck, FaUserClock } from 'react-icons/fa';
import { RiDashboardFill } from 'react-icons/ri';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import emailjs from 'emailjs-com';
import { NavLink } from 'react-router-dom';

ChartJS.register(...registerables);

// Initialize emailjs (replace with your actual credentials)
emailjs.init('YOUR_EMAILJS_USER_ID');

const Dashboard = () => {
  // const [activeTab, setActiveTab] = useState('dashboard');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'ai', text: 'Hello! I\'m your AI Interview Assistant. Ready to begin the interview?' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isInterviewing, setIsInterviewing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [interviewType, setInterviewType] = useState('technical');
  const [difficulty, setDifficulty] = useState('medium');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [evaluation, setEvaluation] = useState(null);
  const recognitionRef = useRef(null);
  const chatEndRef = useRef(null);

  // Scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Mock data for charts
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Interviews Completed',
        data: [12, 19, 15, 28, 24, 32],
        borderColor: '#2D8B7A',
        backgroundColor: 'rgba(45, 139, 122, 0.1)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Candidates Hired',
        data: [5, 8, 7, 12, 10, 15],
        borderColor: '#3AA89E',
        backgroundColor: 'rgba(58, 168, 158, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const pieChartData = {
    labels: ['Technical', 'Behavioral', 'Culture Fit', 'Skills'],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: [
          '#104E4A',
          '#2D8B7A',
          '#3AA89E',
          '#256D66'
        ],
        borderWidth: 0
      }
    ]
  };

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event) => {
          const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');
          setUserInput(transcript);
        };

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error', event.error);
          setIsRecording(false);
        };
      } else {
        console.warn('Speech recognition not supported in this browser');
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch (error) {
        console.error('Error starting speech recognition:', error);
        alert('Please allow microphone access to use voice features');
      }
    }
  };

  const sendInterviewEmail = async () => {
    if (!candidateEmail) {
      alert('Please enter candidate email');
      return;
    }

    try {
      const templateParams = {
        to_email: candidateEmail,
        interview_type: interviewType,
        date: new Date().toLocaleDateString(),
        candidate_name: 'Candidate'
      };

      await emailjs.send(
        'YOUR_EMAILJS_SERVICE_ID',
        'YOUR_EMAILJS_TEMPLATE_ID',
        templateParams
      );

      setEmailSent(true);
      setShowEmailModal(false);
      setTimeout(() => setEmailSent(false), 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  const evaluateAnswer = (question, answer) => {
    // Simple keyword-based evaluation - in a real app this would be more sophisticated
    const evaluationCriteria = {
      "Explain the concept of closures in JavaScript.": {
        keywords: ['scope', 'function', 'access', 'outer', 'lexical'],
        weight: 0.7
      },
      "How would you optimize a slow-performing database query?": {
        keywords: ['index', 'query plan', 'optimize', 'normalize', 'join'],
        weight: 0.8
      },
      // Add more evaluation criteria for other questions
    };

    if (!evaluationCriteria[question]) return null;

    const { keywords, weight } = evaluationCriteria[question];
    const answerLower = answer.toLowerCase();
    const matches = keywords.filter(kw => answerLower.includes(kw.toLowerCase()));
    const score = (matches.length / keywords.length) * 100 * weight;

    return {
      score: Math.min(Math.round(score), 100),
      feedback: matches.length > 0 ?
        `Good job mentioning ${matches.join(', ')}` :
        'Try to include more technical terms in your answer',
      keywords: keywords
    };
  };

  const generateQuizQuestions = (type, difficulty) => {
    const questions = {
      technical: {
        easy: [
          "What is JavaScript?",
          "Explain what a function is in programming.",
          "What are the basic data types in JavaScript?",
          "How do you declare a variable in JavaScript?",
          "What is the DOM?"
        ],
        medium: [
          "Explain the concept of closures in JavaScript.",
          "How would you optimize a slow-performing database query?",
          "Describe the difference between REST and GraphQL.",
          "What are the advantages of using React hooks?",
          "How does the virtual DOM improve performance?"
        ],
        hard: [
          "Explain the event loop in JavaScript and how it handles asynchronous operations.",
          "Describe how you would implement a custom hook for fetching data in React.",
          "Compare and contrast SQL and NoSQL databases with use cases for each.",
          "Explain the concept of memoization and provide an implementation example.",
          "How would you design a scalable microservice architecture?"
        ]
      },
      behavioral: {
        easy: [
          "Tell me about yourself.",
          "What are your strengths?",
          "Where do you see yourself in 5 years?",
          "Why do you want to work here?",
          "What are your hobbies outside of work?"
        ],
        medium: [
          "Tell me about a time you had to work under pressure.",
          "Describe a situation where you had to resolve a conflict within your team.",
          "Give an example of how you've handled a difficult client or stakeholder.",
          "Tell me about a time you failed and what you learned from it.",
          "Describe your approach to mentoring junior team members."
        ],
        hard: [
          "Describe a time when you had to make an unpopular decision. How did you handle it?",
          "Tell me about a time you had to persuade a team to adopt an approach they initially resisted.",
          "Describe a situation where you had to deliver bad news to a client or stakeholder.",
          "Give an example of when you had to adapt your communication style to work with someone.",
          "Tell me about a time you had to make a decision with incomplete information."
        ]
      },
      culture: {
        easy: [
          "What values are important to you in a workplace?",
          "How do you prefer to receive feedback?",
          "What kind of work environment do you thrive in?",
          "How do you handle stress at work?",
          "What motivates you to do your best work?"
        ],
        medium: [
          "How do you handle disagreements with company policies?",
          "Describe your ideal work environment.",
          "How do you maintain work-life balance?",
          "What does teamwork mean to you?",
          "How do you handle competing priorities?"
        ],
        hard: [
          "Describe a time when you had to adapt to a company culture that was different from what you were used to.",
          "How would you handle a situation where your personal values conflicted with a company policy?",
          "Tell me about a time you had to champion diversity and inclusion in the workplace.",
          "Describe how you would handle working with a colleague whose work style was very different from yours.",
          "How do you approach situations where you need to give difficult feedback to a peer?"
        ]
      }
    };

    setQuizQuestions(questions[type][difficulty].map((q, i) => ({
      id: i + 1,
      question: q,
      answered: false,
      answer: '',
      evaluation: null
    })));
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newUserMessage = {
      id: chatMessages.length + 1,
      sender: 'user',
      text: userInput
    };

    setChatMessages([...chatMessages, newUserMessage]);
    setUserInput('');

    // Mark current question as answered and evaluate response
    if (quizQuestions.length > 0 && currentQuestionIndex < quizQuestions.length) {
      const updatedQuestions = [...quizQuestions];
      updatedQuestions[currentQuestionIndex].answered = true;
      updatedQuestions[currentQuestionIndex].answer = userInput;

      // Evaluate the answer
      const evaluation = evaluateAnswer(
        updatedQuestions[currentQuestionIndex].question,
        userInput
      );
      updatedQuestions[currentQuestionIndex].evaluation = evaluation;

      setQuizQuestions(updatedQuestions);
    }

    // Simulate AI response
    setTimeout(() => {
      if (quizQuestions.length > 0) {
        // Move to next question or end interview
        if (currentQuestionIndex < quizQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          const nextQuestion = quizQuestions[currentQuestionIndex + 1].question;

          const aiMessage = {
            id: chatMessages.length + 2,
            sender: 'ai',
            text: nextQuestion
          };

          setChatMessages(prev => [...prev, aiMessage]);

          // Speak the next question
          if (typeof window !== 'undefined' && window.speechSynthesis) {
            const utterance = new SpeechSynthesisUtterance(nextQuestion);
            window.speechSynthesis.speak(utterance);
          }
        } else {
          // Calculate overall score
          const answeredQuestions = quizQuestions.filter(q => q.answered);
          const totalScore = answeredQuestions.reduce(
            (sum, q) => sum + (q.evaluation?.score || 0),
            0
          );
          const averageScore = Math.round(totalScore / answeredQuestions.length);

          const feedbackMessage = {
            id: chatMessages.length + 2,
            sender: 'ai',
            text: `Thank you for your answers. The interview is now complete. 
                  Your overall score is ${averageScore}/100. 
                  We will review your responses and get back to you soon.`
          };

          setChatMessages(prev => [...prev, feedbackMessage]);
          setIsInterviewing(false);
          setEvaluation({
            score: averageScore,
            answers: quizQuestions.filter(q => q.answered)
          });

          // Show email modal
          setShowEmailModal(true);
        }
      } else {
        // Fallback generic responses if not in quiz mode
        const aiResponses = [
          "That's an excellent answer. Can you elaborate more about your experience with team collaboration?",
          "Interesting perspective. How would you handle a situation where...",
          "Thanks for sharing. Let's move to the next question about...",
          "I've noted your response. Now, could you describe a time when you faced a significant challenge at work?"
        ];

        const aiMessage = {
          id: chatMessages.length + 2,
          sender: 'ai',
          text: aiResponses[Math.floor(Math.random() * aiResponses.length)]
        };

        setChatMessages(prev => [...prev, aiMessage]);
      }
    }, 1000);
  };

  const startInterview = (type) => {
    setIsInterviewing(true);
    setInterviewType(type);
    generateQuizQuestions(type, difficulty);
    setCurrentQuestionIndex(0);
    setEvaluation(null);

    const firstQuestions = {
      technical: {
        easy: "Let's begin the technical interview (easy level). First question: What is JavaScript?",
        medium: "Let's begin the technical interview. First question: Explain the concept of closures in JavaScript.",
        hard: "Let's begin the advanced technical interview. First question: Explain the event loop in JavaScript and how it handles asynchronous operations."
      },
      behavioral: {
        easy: "Let's begin the behavioral interview (easy level). First question: Tell me about yourself.",
        medium: "Let's begin the behavioral interview. First question: Tell me about a time you had to work under pressure.",
        hard: "Let's begin the advanced behavioral interview. First question: Describe a time when you had to make an unpopular decision. How did you handle it?"
      },
      culture: {
        easy: "Let's begin the culture fit interview (easy level). First question: What values are important to you in a workplace?",
        medium: "Let's begin the culture fit interview. First question: How do you handle disagreements with company policies?",
        hard: "Let's begin the advanced culture fit interview. First question: Describe a time when you had to adapt to a company culture that was different from what you were used to."
      }
    };

    const firstQuestion = firstQuestions[type][difficulty];

    setChatMessages([{
      id: 1,
      sender: 'ai',
      text: firstQuestion
    }]);

    // Speak the first question
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(firstQuestion);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex h-screen bg-background-dark text-text-dark py-14">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-20 md:w-64 bg-gray-900 border-r border-gray-800 flex flex-col"
      >
        <div className="p-4 flex items-center justify-center md:justify-start">
          <span className=" font-serif hidden md:block ml-2 text-xl font-bold bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
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
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-between">
          <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2 w-64">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm text-white w-full"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowEmailModal(true)}
              className="p-2 text-gray-400 hover:text-primary-light relative"
              title="Send Interview Email"
            >
              <FiMail className="text-xl" />
              {emailSent && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
              )}
            </button>
            <button className="p-2 text-gray-400 hover:text-primary-light relative">
              <FiBell className="text-xl" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary-light/20 flex items-center justify-center">
                <FiUser className="text-primary-light" />
              </div>
              <span className="hidden md:block ml-2 text-sm">Admin User</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Stats Cards */}
            {[
              {
                title: "Total Interviews",
                value: "128",
                change: "+12%",
                icon: <FaRobot className="text-primary-light" />,
                bg: "bg-primary-dark/10"
              },
              {
                title: "Completed",
                value: "96",
                change: "+8%",
                icon: <FaUserCheck className="text-secondary-light" />,
                bg: "bg-secondary-dark/10"
              },
              {
                title: "Pending Review",
                value: "32",
                change: "-4%",
                icon: <FaUserClock className="text-accent-light" />,
                bg: "bg-accent-dark/10"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`${stat.bg} p-6 rounded-xl border border-gray-800`}
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-400">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <p className={`text-xs mt-1 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className="text-3xl">
                    {stat.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Line Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Interview Analytics</h3>
                <select className="bg-gray-800 text-xs px-2 py-1 rounded border border-gray-700">
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="h-64">
                <Line
                  data={lineChartData}
                  options={{
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top',
                        labels: {
                          color: '#E0F2F1'
                        }
                      }
                    },
                    scales: {
                      x: {
                        grid: {
                          color: 'rgba(200, 240, 235, 0.1)'
                        },
                        ticks: {
                          color: '#C8F0EB'
                        }
                      },
                      y: {
                        grid: {
                          color: 'rgba(200, 240, 235, 0.1)'
                        },
                        ticks: {
                          color: '#C8F0EB'
                        }
                      }
                    }
                  }}
                />
              </div>
            </motion.div>

            {/* Pie Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Evaluation Distribution</h3>
                <select className="bg-gray-800 text-xs px-2 py-1 rounded border border-gray-700">
                  <option>Current Month</option>
                  <option>Last Month</option>
                </select>
              </div>
              <div className="h-64">
                <Pie
                  data={pieChartData}
                  options={{
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'right',
                        labels: {
                          color: '#E0F2F1'
                        }
                      }
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* AI Interview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Candidates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
            >
              <h3 className="font-medium mb-4">Recent Candidates</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center p-3 hover:bg-gray-800/50 rounded-lg transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary-dark/20 flex items-center justify-center mr-3">
                      <FiUser className="text-primary-light" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Candidate {item}</p>
                      <p className="text-xs text-gray-400">Applied {item} day{item !== 1 ? 's' : ''} ago</p>
                    </div>
                    <button className="text-xs bg-primary-light/10 text-primary-light px-3 py-1 rounded">
                      Review
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI Interview Chat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">AI Interview Assistant</h3>
                {!isInterviewing ? (
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                    <select
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                      className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded"
                    >
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                    <button
                      onClick={() => startInterview('technical')}
                      className="text-xs bg-gradient-to-r from-primary-light to-accent-light text-white px-3 py-1 rounded"
                    >
                      Technical
                    </button>
                    <button
                      onClick={() => startInterview('behavioral')}
                      className="text-xs bg-gradient-to-r from-secondary-light to-accent-light text-white px-3 py-1 rounded"
                    >
                      Behavioral
                    </button>
                    <button
                      onClick={() => startInterview('culture')}
                      className="text-xs bg-gradient-to-r from-purple-500 to-accent-light text-white px-3 py-1 rounded"
                    >
                      Culture Fit
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsInterviewing(false)}
                    className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded"
                  >
                    End Interview
                  </button>
                )}
              </div>

              <div className="flex-1 bg-gray-800/30 rounded-lg p-4 mb-4 overflow-y-auto max-h-64">
                <div className="space-y-4">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-xs md:max-w-md rounded-lg p-3 ${message.sender === 'ai' ? 'bg-gray-700 text-white' : 'bg-primary-light/10 text-primary-light'}`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
              </div>

              {isInterviewing && (
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-400">
                      Question {currentQuestionIndex + 1} of {quizQuestions.length}
                    </p>
                    <button
                      onClick={toggleRecording}
                      className={`p-2 rounded-full ${isRecording ? 'bg-red-500/20 text-red-500 animate-pulse' : 'bg-gray-800 text-gray-400'}`}
                      title={isRecording ? "Stop recording" : "Start recording"}
                    >
                      {isRecording ? <FiMicOff /> : <FiMic />}
                    </button>
                  </div>

                  <div className="flex">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder={isRecording ? "Speaking..." : "Type your answer..."}
                      className="flex-1 bg-gray-800 text-white text-sm rounded-l-lg px-4 py-2 border border-gray-700 focus:outline-none focus:border-primary-light"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!userInput.trim()}
                      className="bg-gradient-to-r from-primary-light to-accent-light text-white px-4 py-2 rounded-r-lg disabled:opacity-50"
                    >
                      <FiSend />
                    </button>
                  </div>
                </div>
              )}

              {evaluation && (
                <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
                  <h4 className="text-sm font-medium mb-2">Interview Evaluation</h4>
                  <div className="flex items-center mb-2">
                    <span className="text-xs mr-2">Overall Score:</span>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${evaluation.score > 70 ? 'bg-green-500' : evaluation.score > 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${evaluation.score}%` }}
                      ></div>
                    </div>
                    <span className="text-xs ml-2">{evaluation.score}/100</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {evaluation.answers.filter(a => a.evaluation?.feedback).length > 0 && (
                      <p>Feedback: {evaluation.answers.find(a => a.evaluation?.feedback)?.evaluation.feedback}</p>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </main>
      </div>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 rounded-lg p-6 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Send Interview Results</h3>
              <button onClick={() => setShowEmailModal(false)} className="text-gray-400 hover:text-white">
                <FiX />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Candidate Email</label>
                <input
                  type="email"
                  value={candidateEmail}
                  onChange={(e) => setCandidateEmail(e.target.value)}
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 text-sm border border-gray-600 focus:outline-none focus:border-primary-light"
                  placeholder="candidate@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Interview Type</label>
                <div className="bg-gray-700 rounded-lg px-4 py-2 text-sm border border-gray-600">
                  {interviewType.charAt(0).toUpperCase() + interviewType.slice(1)} Interview
                </div>
              </div>
              {evaluation && (
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Evaluation Score</label>
                  <div className="bg-gray-700 rounded-lg px-4 py-2 text-sm border border-gray-600">
                    {evaluation.score}/100
                  </div>
                </div>
              )}
              <button
                onClick={sendInterviewEmail}
                className="w-full bg-gradient-to-r from-primary-light to-accent-light text-white py-2 rounded-lg mt-4"
              >
                Send Email
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;