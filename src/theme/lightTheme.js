// src/theme/lightTheme.js
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#3157d5", light: "#e8edff", dark: "#233fa8" },
    secondary: { main: "#0f9f92" },
    background: {
      default: "#f6f7fb",
      paper: "#fff",
    },
    text: { primary: "#17233b", secondary: "#64718a" },
    divider: "rgba(23, 35, 59, 0.1)",
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: 'Inter, "Segoe UI", Roboto, Arial, sans-serif',
    h1: { fontWeight: 750, letterSpacing: "-0.055em" },
    h2: { fontWeight: 750, letterSpacing: "-0.045em" },
    h3: { fontWeight: 750, letterSpacing: "-0.04em" },
    h4: { fontWeight: 720, letterSpacing: "-0.035em" },
    h5: { fontWeight: 700, letterSpacing: "-0.025em" },
    button: { fontWeight: 650, textTransform: "none" },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid rgba(23, 35, 59, 0.08)",
          boxShadow: "0 12px 32px rgba(23, 35, 59, 0.055)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, paddingInline: 18 },
      },
    },
  },
});

export default lightTheme;
