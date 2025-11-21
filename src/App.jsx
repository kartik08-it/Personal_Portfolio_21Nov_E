import { useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ThemeProviderWrapper from "./theme/ThemeProviderWrapper";
import { ThemeContextProvider } from "./theme/ThemeContext";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeContextProvider>
      <ThemeProviderWrapper>
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
        
        <div style={{ paddingTop: "80px" }}>
          <Home setActiveSection={setActiveSection} />
        </div>
      </ThemeProviderWrapper>
    </ThemeContextProvider>
  );
}

export default App;
