import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ThemeProviderWrapper from "./theme/ThemeProviderWrapper";
import { ThemeContextProvider } from "./theme/ThemeContext";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";
import "./index.css";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ThemeContextProvider>
      <ThemeProviderWrapper>
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

        <Box component="main" sx={{ pt: "76px" }}>
          <Home setActiveSection={setActiveSection} />
        </Box>

        <Footer /> 
      </ThemeProviderWrapper>
    </ThemeContextProvider>
  );
}

export default App;
