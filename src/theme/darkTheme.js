// src/theme/darkTheme.js
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    background: {
      default: "#0a152f",
      paper: "#0a152f",
    },
  },
});

export default darkTheme;
