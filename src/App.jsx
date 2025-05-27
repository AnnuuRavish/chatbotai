import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Componants/Home/Layout/Layout';
import Home from './Componants/Home/Home';
import Main from './Componants/Main';
import Services from './Componants/Services';
import Features from './Componants/Features';
import Team from './Componants/Team';
import HowItWorks from './Componants/HowItWorks';
import Dashboard from './Componants/DashBoard';
import Login from './Componants/Login';
import SignUp from './Componants/SignUp';
import CandidateManagement from './Componants/Agent';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="services" element={<Services />} />
          <Route path="features" element={<Features />} />
          <Route path="team" element={<Team />} />
          <Route path="about" element={<Main />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/agent" element={<CandidateManagement />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;