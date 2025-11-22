import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
  const theme = useTheme(); // ← GET CURRENT THEME

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: theme.palette.background.paper, // ← THEME-BASED COLOR
        color: theme.palette.text.primary,
        backdropFilter: "blur(12px)",
        px: 4,
        transition: "all 0.3s ease", // smooth theme change
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Left – Name */}
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
                color:
                  activeSection === item.id
                    ? theme.palette.primary.main // active color
                    : theme.palette.text.primary, // default text color
                fontWeight: activeSection === item.id ? 700 : 400,
                transition: "color 0.3s ease",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Theme Toggle */}
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
