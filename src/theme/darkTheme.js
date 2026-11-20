// src/theme/darkTheme.js
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#68d1bf", light: "#183b36", dark: "#a2f0df" },
    secondary: { main: "#9aaeff" },
    background: {
      default: "#0b1020",
      paper: "#121c19",
    },
    text: { primary: "#eff5f1", secondary: "#a4b4ad" },
    divider: "rgba(237, 245, 241, 0.12)",
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
          border: "1px solid rgba(237, 245, 241, 0.08)",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.18)",
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

export default darkTheme;
