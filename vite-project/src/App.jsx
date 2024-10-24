import { useState } from "react"; // Make sure to import useState
import PreHero from "./Pages/PreHero";
import Hero from "./Pages/Hero";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import FooterSection from "./Pages/FooterSection";
import Navbar from "./Components/Navbar";

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Define isLoading state

  const handleLoadComplete = () => {
    setIsLoading(false); // Function to change loading state
  };

  return (
    <>
      <div>
        {isLoading ? (
          <PreHero onLoadComplete={handleLoadComplete} /> // Pass handleLoadComplete to PreHero
        ) : (
          <>
            <Navbar />
            <Hero />
            <AboutPage />
            <ProjectsPage />
            <ContactPage />
            <FooterSection />
          </>
        )}
      </div>
    </>
  );
};

export default App;
