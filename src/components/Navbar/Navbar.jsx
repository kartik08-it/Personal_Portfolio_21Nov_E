import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
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
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* TOP NAV */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
          backdropFilter: "blur(12px)",
          px: { xs: 2, md: 4 },
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LEFT: Name */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              cursor: "pointer",
            }}
            onClick={() => scrollToSection("about")}
          >
            {/* KU LOGO */}
            <Box
              component="img"
              src="/KULogo.png"
              alt="kartik Upadhayay"
              sx={{
                width: 70,
                height: 70,
                borderRadius: 1.5,
              }}
            />
          </Box>

          {/* DESKTOP NAVIGATION */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  textTransform: "none",
                  color:
                    activeSection === item.id
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  fontWeight: activeSection === item.id ? 700 : 400,
                  transition: "color 0.3s ease",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* RIGHT SIDE: Theme toggle + Hamburger (mobile) */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ThemeToggle />

            {/* HAMBURGER ICON for Mobile */}
            <IconButton
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 240, p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Menu
          </Typography>

          <List>
            {navItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  onClick={() => {
                    scrollToSection(item.id);
                    setDrawerOpen(false);
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    sx={{
                      "& span": {
                        color:
                          activeSection === item.id
                            ? theme.palette.primary.main
                            : theme.palette.text.primary,
                        fontWeight: activeSection === item.id ? 700 : 400,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
