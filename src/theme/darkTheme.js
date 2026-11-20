// src/theme/darkTheme.js
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#9aaeff", light: "#202c53", dark: "#c3ceff" },
    secondary: { main: "#52d4c2" },
    background: {
      default: "#0b1020",
      paper: "#111a2d",
    },
    text: { primary: "#edf1fb", secondary: "#a4afc4" },
    divider: "rgba(237, 241, 251, 0.12)",
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
          border: "1px solid rgba(237, 241, 251, 0.08)",
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
