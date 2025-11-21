import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ activeSection, scrollToSection }) => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(10,25,47,0.6)",
        backdropFilter: "blur(12px)",
        px: 4,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Left */}
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Kartik Gaur
        </Typography>

        {/* Nav items */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {navItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              sx={{
                textTransform: "none",
                color: activeSection === item.id ? "#0ea5e9" : "white",
                fontWeight: activeSection === item.id ? 600 : 400,
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Toggle */}
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
