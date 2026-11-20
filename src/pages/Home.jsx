import { useRef, useEffect } from "react";
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
  Chip,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CodeIcon from "@mui/icons-material/Code";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import OrganizationProjects from "../sections/OrganizationProjects";

/* ----------------------------------
   CONSTANTS
---------------------------------- */
const GITHUB_URL = "https://github.com/kartik08-it";
const LINKEDIN_URL = "https://www.linkedin.com/in/kartik-upadhayay-77b722148/";
const EMAIL = "kartiku03@gmail.com";
const RESUME_URL = "/kartikUpadhayay.pdf";

const Home = ({ setActiveSection }) => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const organizationprojectsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sectionRefs = [
      { id: "about", ref: aboutRef },
      { id: "experience", ref: experienceRef },
      { id: "skills", ref: skillsRef },
      { id: "organizationprojects", ref: organizationprojectsRef },
      { id: "projects", ref: projectsRef },
      { id: "education", ref: educationRef },
      { id: "contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <div id="top">
      <Box
        component="section"
        sx={{
          minHeight: { md: "calc(100vh - 76px)" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2.5, sm: 4, lg: 6 },
          py: { xs: 7, md: 8 },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 8, lg: 12 }}
          alignItems="center"
          sx={{ maxWidth: 1220, width: "100%" }}
        >
          <Box flex={1.15}>
            <Chip
              icon={<CodeIcon />}
              label="FULL STACK DEVELOPER"
              size="small"
              sx={{
                height: 34,
                px: 1,
                borderRadius: 10,
                bgcolor: "primary.light",
                color: "primary.dark",
                fontSize: "0.72rem",
                fontWeight: 750,
                letterSpacing: "0.08em",
                "& .MuiChip-icon": { color: "inherit", fontSize: 17 },
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.7rem", sm: "3.5rem", md: "4.1rem" },
                lineHeight: 1.04,
                mt: 3,
                maxWidth: 720,
              }}
            >
              Building useful products, <Box component="span" sx={{ color: "primary.main" }}>one feature at a time.</Box>
            </Typography>

            <Typography variant="h5" sx={{ mt: 2.5, fontWeight: 600, color: "text.secondary" }}>
              Hi, I’m Kartik Upadhayay — a backend-focused Full Stack Developer.
            </Typography>

            <Typography sx={{ mt: 2, maxWidth: 660, color: "text.secondary", lineHeight: 1.85 }}>
              I build reliable web applications with Laravel, React, and TypeScript—from APIs and data workflows to clear, responsive interfaces. I’m also exploring AI and expanding my skills in Python, Django, FastAPI, and Generative AI. The more I learn, the more curious I become; I keep growing and never settle.
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2.5 }}>
              {["Laravel", "React", "TypeScript"].map((skill) => (
                <Chip key={skill} label={skill} size="small" variant="outlined" />
              ))}
              <Chip
                icon={<AutoAwesomeIcon />}
                label="Exploring AI"
                size="small"
                color="primary"
                variant="outlined"
              />
            </Stack>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                href="#projects"
                component="a"
                endIcon={<CodeIcon />}
              >
                Explore my work
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<MailOutlineIcon />}
                component="a"
                href="/SDE_Kartik_Upadhayay_CV.pdf"
                download
              >
                Download résumé
              </Button>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 3 }}>
              <IconButton aria-label="Email Kartik" onClick={() => window.open(`mailto:${EMAIL}`)}>
                <EmailIcon />
              </IconButton>
              <Typography variant="body2" color="text.secondary">{EMAIL}</Typography>
              <LocationOnIcon fontSize="small" sx={{ ml: 1, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">India</Typography>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ mt: 1.5 }}>
              <IconButton aria-label="GitHub profile" onClick={() => window.open(GITHUB_URL, "_blank", "noopener,noreferrer")}>
                <GitHubIcon />
              </IconButton>

              <IconButton aria-label="LinkedIn profile" onClick={() => window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer")}>
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box
            flex={0.85}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                position: "relative",
                p: { xs: 2, md: 3 },
                width: "min(100%, 420px)",
                borderRadius: 8,
                background: (theme) => theme.palette.mode === "light"
                  ? "linear-gradient(145deg, #e8edff 0%, #f6f7fb 52%, #d7f4ef 100%)"
                  : "linear-gradient(145deg, #202c53 0%, #111a2d 52%, #143632 100%)",
                border: "1px solid",
                borderColor: "divider",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 14,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 6,
                  pointerEvents: "none",
                },
              }}
            >
              <Avatar
                src="https://blinkexam-sandbox.s3.ap-south-1.amazonaws.com/public/sales/user/images/profilePic/676.png"
                alt="Kartik Upadhayay"
                sx={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1 / 1",
                  borderRadius: 5,
                  position: "relative",
                  zIndex: 1,
                  bgcolor: "background.paper",
                  boxShadow: "0 24px 60px rgba(23,35,59,0.16)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  left: { xs: 18, md: -34 },
                  bottom: { xs: 16, md: 28 },
                  px: 2,
                  py: 1.25,
                  borderRadius: 3,
                  bgcolor: "background.paper",
                  boxShadow: "0 12px 30px rgba(23,35,59,0.12)",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography variant="caption" color="text.secondary">FOCUS</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>Backend · Product UI · AI learning</Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>

      {/* SECTIONS */}
      <div ref={aboutRef} id="about">
        <About />
      </div>
      <div ref={experienceRef} id="experience">
        <Experience />
      </div>
      <div ref={skillsRef} id="skills">
        <Skills />
      </div>
      <div ref={organizationprojectsRef} id="organizationprojects">
        <OrganizationProjects />
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
