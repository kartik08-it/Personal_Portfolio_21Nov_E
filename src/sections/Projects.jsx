import React from "react";
import { Box, Paper, Typography, Chip, Button, Stack } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CodeIcon from "@mui/icons-material/Code";

const personalProjects = [
  {
    title: "Developer Portfolio",
    desc: "A personal portfolio website to showcase professional and personal projects with case studies.",
    impact:
      "Provides a clear overview of my experience, skills, and real-world project work.",
    img: "/DeveloperPortfolio.png",
    features: [
      "Project Showcase",
      "Case Study Modals",
      "Responsive Design",
      "Dark Mode UI",
    ],
    stack: ["React.js", "Material UI", "Vite"],
    isPersonal: true,
    demoLink: import.meta.env.VITE_PORTFOLIO_DEMO,
    codeLink: import.meta.env.VITE_PORTFOLIO_REPO,
  },
  {
    title: "QA Testing Tool",
    desc: "A full-stack QA testing platform to create, execute, and track test cases and defects.",
    impact:
      "Streamlined QA workflows by centralizing test execution, defect logging, and status tracking.",
    img: "/Upcoming.png",
    features: [
      "Test Case Management",
      "Test Execution",
      "Defect Tracking",
      "Status Reporting",
    ],
    stack: ["Laravel", "MySQL", "Blade", "Bootstrap"],
    isPersonal: true,
    demoLink: "",
    codeLink: import.meta.env.VITE_QA_TOOL_REPO,
  },

  {
    title: "Task Manager Tool",
    desc: "A lightweight task management application for developers inspired by Jira and Trello.",
    impact:
      "Improved task visibility and tracking for small projects and personal productivity.",
    img: "/Upcoming.png",
    features: [
      "Project-based Tasks",
      "Task Status Tracking",
      "Developer-Friendly UI",
    ],
    stack: ["React", "TypeScript", "Vite"],
    isPersonal: true,
    demoLink: "",
    codeLink: import.meta.env.VITE_TASK_MANAGER_REPO,
  },

  {
    title: "Notes App",
    desc: "A simple REST-based notes application for creating, organizing, and managing notes.",
    impact:
      "Helped practice clean API design and CRUD workflows with authentication.",
    img: "/Upcoming.png",
    features: ["Create & Edit Notes", "REST APIs", "Authentication"],
    stack: ["Laravel", "REST APIs", "MySQL"],
    isPersonal: true,
    demoLink: "",
    codeLink: import.meta.env.VITE_NOTES_APP_REPO,
  },
  {
    title: "Parallax Website",
    desc: "An interactive parallax-based roadmap website showcasing the Full-Stack Developer learning journey with smooth scrolling animations and modern UI design.",
    impact:
      "Strengthened understanding of CSS parallax effects, layout structuring, and scroll-based animations while building a visually engaging, content-driven web experience.",
    img: "/ParallaxWebsite.png",
    features: ["Parallax Scrolling", "Animated Sections", "Responsive Layout"],
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    isPersonal: true,
    demoLink: import.meta.env.VITE_PARALLAX_ROADMAP_DEMO,
    codeLink: import.meta.env.VITE_PARALLAX_ROADMAP_REPO,
  },

  {
    title: "HRMS All-in-One Panel",
    desc: "HRMS platform with employee, admin, and HR modules using Java, Spring Boot, React, and MySQL.",
    impact:
      "Delivered a complete role-based HR management solution that supports employee self-service, HR workflows, and admin governance.",
    img: "/Upcoming.png",
    features: [
      "Employee Self-Service",
      "Admin Control Panel",
      "HR Workflow Management",
      "Role-Based Access",
      "REST API Modules",
    ],
    stack: ["Java", "Spring Boot", "React.js", "MySQL"],
    isPersonal: true,
    demoLink: "",
    codeLink: "",
  },
];
const ProjectCard = ({ p }) => (
  <Paper
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      borderRadius: 4,
      transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
      "&:hover": { transform: "translateY(-6px)", boxShadow: "0 22px 48px rgba(24,37,33,0.12)", borderColor: "primary.main" },
    }}
  >
    <Box
      component="img"
      src={p.img}
      alt={`${p.title} preview`}
      loading="lazy"
      sx={{ width: "100%", height: { xs: 205, md: 220 }, objectFit: "cover", bgcolor: "action.hover", transition: "transform 350ms ease", "&:hover": { transform: "scale(1.025)" } }}
    />
    <Box sx={{ p: { xs: 2.5, md: 3 }, display: "flex", flexDirection: "column", flex: 1 }}>
      <Typography variant="h6" sx={{ fontWeight: 720, mb: 1 }}>{p.title}</Typography>
      <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>{p.desc}</Typography>
      <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
        {p.features.slice(0, 3).map((feature) => (
          <Chip key={feature} label={feature} size="small" variant="outlined" />
        ))}
      </Stack>
      <Box
        sx={{
          p: 1.75,
          mb: 2,
          borderRadius: 2.5,
          bgcolor: "primary.light",
          color: "text.primary",
        }}
      >
        <Typography variant="caption" sx={{ display: "block", color: "primary.main", fontWeight: 750, mb: 0.5 }}>
          OUTCOME
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.65 }}>{p.impact}</Typography>
      </Box>
      <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap" sx={{ mt: "auto", mb: 2 }}>
        {p.stack.map((technology) => (
          <Chip key={technology} label={technology} size="small" sx={{ bgcolor: "action.hover" }} />
        ))}
      </Stack>
      <Stack direction="row" spacing={1}>
        {p.demoLink && (
          <Button component="a" href={p.demoLink} target="_blank" rel="noreferrer" size="small" endIcon={<ArrowOutwardIcon />}>
            Live demo
          </Button>
        )}
        {p.codeLink && (
          <Button component="a" href={p.codeLink} target="_blank" rel="noreferrer" size="small" variant="outlined" endIcon={<CodeIcon />}>
            Source code
          </Button>
        )}
      </Stack>
    </Box>
  </Paper>
);

const Projects = () => (
  <Box component="section" sx={{ py: { xs: 7, md: 10 }, px: { xs: 2.5, sm: 4, lg: 6 } }}>
    <Box sx={{ width: "100%", mx: "auto" }}>
      <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 750, letterSpacing: "0.12em" }}>
        SELECTED BUILDS
      </Typography>
      <Typography variant="h3" sx={{ mt: 0.5, mb: 1.5 }}>Personal projects</Typography>
      <Typography color="text.secondary" sx={{ maxWidth: 650, mb: 4.5, lineHeight: 1.75 }}>
        A selection of tools and experiments I’ve built to solve practical problems and keep learning by doing.
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" }, gap: 2.5, alignItems: "stretch" }}>
        {personalProjects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </Box>
    </Box>
  </Box>
);

export default Projects;
