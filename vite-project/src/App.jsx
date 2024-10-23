import  { useState } from "react"; // Import useState
import PreHero from "./Pages/PreHero"; // Ensure you import PreHero
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
          <PreHero onLoadComplete={handleLoadComplete} /> // Render PreHero while loading
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
