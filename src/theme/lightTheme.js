// src/theme/lightTheme.js
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#087f73", light: "#e2f3ef", dark: "#07584f" },
    secondary: { main: "#3157d5" },
    background: {
      default: "#f8f8f5",
      paper: "#ffffff",
    },
    text: { primary: "#182521", secondary: "#65736e" },
    divider: "rgba(24, 37, 33, 0.12)",
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"DM Sans", "Segoe UI", Roboto, Arial, sans-serif',
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
          border: "1px solid rgba(24, 37, 33, 0.08)",
          boxShadow: "0 14px 40px rgba(24, 37, 33, 0.045)",
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
