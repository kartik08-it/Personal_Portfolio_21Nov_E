import React from "react";
import { Box, Grid, Paper, Typography, Chip, Button } from "@mui/material";
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
];
const ProjectCard = ({ p }) => (
  <Paper
    sx={{
      width: 330,
      borderRadius: 3,
      overflow: "hidden",
      mx: "auto",
      minHeight: 700,
    }}
  >
    {/* Image */}
    <Box
      sx={{
        height: 220,
        backgroundImage: `url(${p.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",

        "&:hover .action-buttons": {
          opacity: 1,
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      {/* Action Buttons */}
      <Box
        className="action-buttons"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          display: "flex",
          gap: 1.5,
          opacity: 0,
          transition: "all 0.3s ease",
        }}
      >
        {p.demoLink && (
          <Button
            variant="contained"
            size="small"
            endIcon={<ArrowOutwardIcon />}
            sx={{ borderRadius: 2, textTransform: "none" }}
            onClick={() => window.open(p.demoLink, "_blank")}
          >
            View Demo
          </Button>
        )}

        {/* View Code */}
        {p.codeLink && (
          <Button
            variant="outlined"
            size="small"
            endIcon={<CodeIcon />}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              color: "white",
              borderColor: "white",
            }}
            onClick={() => window.open(p.codeLink, "_blank")}
          >
            View Code
          </Button>
        )}
      </Box>
    </Box>

    {/* Content */}
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        {p.title}
      </Typography>

      <Typography sx={{ color: "text.secondary", mb: 2, lineHeight: 1.6 }}>
        {p.desc}
      </Typography>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
        {p.features.map((t) => (
          <Chip key={t} label={t} size="small" />
        ))}
      </Box>

      <Box
        sx={{
          p: 2,
          borderRadius: 2,
          background: "rgba(0, 200, 255, 0.08)",
          border: "1px solid rgba(0,200,255,0.25)",
          mb: 2,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {p.impact}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {p.stack.map((t) => (
          <Chip key={t} label={t} size="small" />
        ))}
      </Box>
    </Box>
  </Paper>
);

const Projects = () => (
  <Box sx={{ py: 10 }}>
    <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 700 }}>
      Personal Projects
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {personalProjects.map((p) => (
        <Grid item xs={12} md={3.5} key={p.title}>
          <ProjectCard p={p} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;
