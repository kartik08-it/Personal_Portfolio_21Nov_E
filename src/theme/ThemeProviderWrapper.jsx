// src/theme/ThemeProviderWrapper.jsx
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProviderWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
