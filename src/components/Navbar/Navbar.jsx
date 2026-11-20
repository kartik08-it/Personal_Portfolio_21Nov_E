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
  { id: "organizationprojects", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ activeSection, scrollToSection }) => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

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
          backgroundColor:
            theme.palette.mode === "light"
              ? "rgba(255,255,255,0.84)"
              : "rgba(11,16,32,0.84)",
          color: theme.palette.text.primary,
          backdropFilter: "blur(18px)",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            minHeight: { xs: 68, md: 76 },
            mx: "auto",
            px: { xs: 2, sm: 3, lg: 5 },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            color="inherit"
            aria-label="Go to the top of the page"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              p: 0,
              minWidth: 0,
              textAlign: "left",
              "&:hover": { backgroundColor: "transparent" },
            }}
            onClick={() => scrollToSection("top")}
          >
            <Box
              component="img"
              src="/KULogo.png"
              alt=""
              sx={{
                width: 42,
                height: 42,
                borderRadius: 1.25,
                objectFit: "cover",
              }}
            />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography sx={{ fontWeight: 750, lineHeight: 1.1 }}>
                Kartik Upadhayay
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Full Stack Developer
              </Typography>
            </Box>
          </Button>

          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 0.25,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  textTransform: "none",
                  color: activeSection === item.id ? "primary.main" : "text.secondary",
                  fontWeight: activeSection === item.id ? 700 : 400,
                  fontSize: "0.88rem",
                  borderRadius: 2,
                  px: 1.2,
                  minWidth: 0,
                  "&:hover": { bgcolor: "action.hover", color: "text.primary" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ThemeToggle />

            <IconButton
              aria-label="Open navigation menu"
              sx={{ display: { xs: "block", lg: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                variant="contained"
                size="small"
                onClick={() => scrollToSection("contact")}
              >
                Let’s talk
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: { xs: 280, sm: 320 }, p: 2.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Navigate
          </Typography>

          <List>
            {navItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  selected={activeSection === item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setDrawerOpen(false);
                  }}
                >
                  <ListItemText
                    primary={item.label}
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
