import { MotionConfig } from "motion/react";

import Loader from "./components/Loader";
import MouseGlow from "./components/MouseGlow";
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import CounterBand from "./components/CounterBand";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Loader />
      <MouseGlow />
      <Navbar />
      <SocialSidebar />

      <main>
        <Hero />
        <About />
        <CounterBand />
        <Resume />
        <Services />
        <Skills />
        <Projects />
        <Certifications />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  );
}

export default App;
