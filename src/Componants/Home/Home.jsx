import HeroSection from "../HeroSection";
import HowItWorks from "../HowItWorks";
import Services from "../Services";
import Features from "../Features";
import Team from "../Team";
import CandidateManagement from "../Agent";

// import Dashboard from "../DashBoard";

function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <Services />
      <Features />
      <Team />

      {/* <Dashboard /> */}

    </>
  );
}

export default Home;