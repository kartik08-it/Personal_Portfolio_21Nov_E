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
import { Chip } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

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
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={8}
          sx={{ maxWidth: "1200px", width: "100%" }}
        >
          {/* LEFT SIDE */}
          <Box flex={1}>
            <Chip
              icon={<CodeIcon />}
              label={
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Full Stack Developer
                </Typography>
              }
              sx={{
                py: 2,
                px: 3,
                borderRadius: 3,
                "& .MuiChip-icon": { fontSize: "1.8rem" },
                bgcolor: "rgba(255,255,255,0.05)",
              }}
            />

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mt: 2,
                lineHeight: 1.2,
                maxWidth: "550px",
              }}
            >
              Hi, I'm <span style={{ color: "#0ea5e9" }}>Kartik Upadhayay</span>
            </Typography>

            <Typography sx={{ mt: 3, opacity: 0.75, maxWidth: "550px" }}>
              Results-oriented Full Stack Developer with 2+ years of experience
              building scalable web applications using Laravel, React, and
              TypeScript. Skilled in modern API development, database
              optimization, and modular front-end architectures. Proven ability
              to transition legacy systems, improve performance, and deliver
              user-focused, business-driven results. Known for improving
              workflow efficiency, enhancing digital presence, and contributing
              to organizational growth through technical excellence.
            </Typography>

            {/* CONTACT DETAILS */}
            <Stack spacing={1} sx={{ mt: 3 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon fontSize="small" />
                <Typography>kartiku03@gmail.com</Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon fontSize="small" />
                <Typography>+91 7088586048</Typography>
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
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://media.licdn.com/dms/image/v2/D5603AQHTLwchiP6tYg/profile-displayphoto-shrink_200_200/B56ZQySdqVHoAY-/0/1736010491265?e=1765411200&v=beta&t=tLuzFvvppAjv4I5faci0qv1lyPb5zEsJeDgpXH16p6g"
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
      <div ref={aboutRef} id="about">
        <About />
      </div>
      <div ref={experienceRef} id="experience">
        <Experience />
      </div>
      <div ref={skillsRef} id="skills">
        <Skills />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      <div ref={educationRef} id="education">
        <Education />
      </div>
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
