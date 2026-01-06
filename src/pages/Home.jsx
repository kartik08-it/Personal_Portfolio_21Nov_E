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
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CodeIcon from "@mui/icons-material/Code";
import OrganizationProjects from "../sections/OrganizationProjects";

/* ----------------------------------
   CONSTANTS
---------------------------------- */
const GITHUB_URL = "https://github.com/kartik08-it";
const LINKEDIN_URL = "https://www.linkedin.com/in/kartikUpadhayay";
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

  const sectionRefs = [
    { id: "about", ref: aboutRef },
    { id: "experience", ref: experienceRef },
    { id: "skills", ref: skillsRef },
    { id: "organizationprojects", ref: organizationprojectsRef },
    { id: "projects", ref: projectsRef },
    { id: "education", ref: educationRef },
    { id: "contact", ref: contactRef },
  ];

  useEffect(() => {
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
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
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
          {/* LEFT CONTENT */}
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
                bgcolor: "rgba(255,255,255,0.05)",
                "& .MuiChip-icon": { fontSize: "1.8rem" },
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

            <Typography sx={{ mt: 3, opacity: 0.8, maxWidth: "550px" }}>
              Results-oriented Full Stack Developer with 2+ years of experience
              building scalable web applications using Laravel, React, and
              TypeScript. Skilled in modern API development, database
              optimization, and modular front-end architectures. Proven ability
              to migrate legacy systems, improve performance, and deliver
              business-driven results.
            </Typography>

            {/* CONTACT INFO */}
            <Stack spacing={1} sx={{ mt: 3 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon fontSize="small" />
                <Typography
                  sx={{ cursor: "pointer" }}
                  onClick={() => window.open(`mailto:${EMAIL}`)}
                >
                  {EMAIL}
                </Typography>
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

            {/* ACTION BUTTONS */}
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => window.open(GITHUB_URL, "_blank")}
              >
                View My Work
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<MailOutlineIcon />}
                component="a"
                href={RESUME_URL}
                download
              >
                Download Resume
              </Button>
            </Stack>

            {/* SOCIAL ICONS */}
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <IconButton onClick={() => window.open(GITHUB_URL, "_blank")}>
                <GitHubIcon />
              </IconButton>

              <IconButton onClick={() => window.open(LINKEDIN_URL, "_blank")}>
                <LinkedInIcon />
              </IconButton>

              <IconButton onClick={() => window.open(`mailto:${EMAIL}`)}>
                <MailOutlineIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            flex={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://blinkexam-sandbox.s3.ap-south-1.amazonaws.com/public/sales/user/images/profilePic/676.png"
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
