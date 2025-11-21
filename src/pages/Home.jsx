import { useRef, useEffect, useState } from "react";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Avatar,
  useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const Home = ({ setActiveSection }) => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { id: "about", ref: aboutRef },
    { id: "experience", ref: experienceRef },
    { id: "skills", ref: skillsRef },
    { id: "projects", ref: projectsRef },
    { id: "education", ref: educationRef },
    { id: "contact", ref: contactRef },
  ];

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, options);

    sectionRefs.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
        <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 8,
        pt: 12,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={8}
        sx={{ maxWidth: "1200px", width: "100%" }}
      >
        {/* LEFT SIDE */}
        <Box flex={1}>
          <Typography variant="h5" sx={{ opacity: 0.8 }}>
            Hi, I'm <span style={{ color: "#0ea5e9" }}>Kartik Gaur</span>
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mt: 2,
              lineHeight: 1.2,
              maxWidth: "550px",
            }}
          >
            Passionate Web Developer
          </Typography>

          <Typography sx={{ mt: 3, opacity: 0.75, maxWidth: "550px" }}>
            I build user-friendly, scalable, and modern web applications.
            Specialized in React, Laravel, JavaScript, TypeScript, and
            full-stack development. I enjoy problem-solving and delivering
            high-impact features with clean UI/UX.
          </Typography>

          {/* CONTACT DETAILS */}
          <Stack spacing={1} sx={{ mt: 3 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon fontSize="small" />
              <Typography>kartiku03@gmail.com</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon fontSize="small" />
              <Typography>+91 9876543210</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOnIcon fontSize="small" />
              <Typography>India</Typography>
            </Stack>
          </Stack>

          {/* BUTTONS */}
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Button variant="contained" size="large">
              View My Work
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<MailOutlineIcon />}
            >
              Download Resume
            </Button>
          </Stack>

          {/* SOCIAL ICONS */}
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <IconButton size="large">
              <GitHubIcon />
            </IconButton>
            <IconButton size="large">
              <LinkedInIcon />
            </IconButton>
            <IconButton size="large">
              <MailOutlineIcon />
            </IconButton>
          </Stack>
        </Box>

        {/* RIGHT SIDE IMAGE */}
        <Box
          flex={1}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <Avatar
            src="https://via.placeholder.com/350" // replace with your image
            alt="Profile"
            sx={{
              width: 350,
              height: 350,
              borderRadius: "20px",
              boxShadow: 4,
            }}
          />
        </Box>
      </Stack>
    </Box>
      <div ref={aboutRef} id="about"><About /></div>
      <div ref={experienceRef} id="experience"><Experience /></div>
      <div ref={skillsRef} id="skills"><Skills /></div>
      <div ref={projectsRef} id="projects"><Projects /></div>
      <div ref={educationRef} id="education"><Education /></div>
      <div ref={contactRef} id="contact"><Contact /></div>
    </div>
  );
};

export default Home;
