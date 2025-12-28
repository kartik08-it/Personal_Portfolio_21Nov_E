import React from "react";
import { Box, Grid, Paper, Typography, Chip, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CodeIcon from "@mui/icons-material/Code";

const projects = [
  {
    title: "Admin 2.0 Interface",
    desc: "Redesigned a modular and scalable admin dashboard used internally for managing core application workflows.",
    impact:
      "Reduced data load time by 35% and simplified feature maintenance across teams.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    features: [
      "Advanced CRUD",
      "Dynamic Forms",
      "Role-Based Access",
      "Reusable Components",
    ],
    stack: ["React.js", "Material UI", "TypeScript", "REST APIs"],
  },
  {
    title: "Proctor Panel",
    desc: "Built a real-time proctoring panel for live candidate monitoring during online assessments.",
    impact:
      "Improved event response latency by 50%, enabling faster and more reliable session tracking.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
    features: [
      "Live Monitoring",
      "WebSocket Events",
      "Session Tracking",
      "Real-time Alerts",
    ],
    stack: ["React.js", "TypeScript", "WebSockets", "Material UI"],
  },
  {
    title: "API Migration (SOAP to REST)",
    desc: "Led migration of legacy SOAP-based services to modern RESTful APIs with improved scalability and maintainability.",
    impact:
      "Increased request throughput and reduced server load across critical services.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    features: [
      "REST Architecture",
      "Async Queues",
      "Middleware",
      "API Optimization",
    ],
    stack: ["Laravel", "PHP", "REST APIs", "MySQL"],
  },
  {
    title: "SuperAdmin Panel",
    desc: "Developed a secure full-stack SuperAdmin system for managing users, roles, and system configurations.",
    impact:
      "Improved data transparency and integrity with granular permissions and audit visibility.",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=500&fit=crop",
    features: [
      "Role Management",
      "2FA Authentication",
      "Audit Logs",
      "System Alerts",
    ],
    stack: ["Laravel", "React.js", "Google Authenticator", "RBAC"],
  },
  {
    title: "Email Template System",
    desc: "Created dynamic and brand-aligned email templates for transactional and notification workflows.",
    impact:
      "Improved click-through rates by 20% with consistent and responsive email layouts.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    features: [
      "Reusable Templates",
      "Blade Components",
      "Dynamic Content",
      "Brand Consistency",
    ],
    stack: ["Laravel Blade", "HTML", "CSS", "Email Systems"],
  },
];

const ProjectCard = ({ p }) => (
  <Paper
    sx={{
      width: 330,
      borderRadius: 3,
      overflow: "hidden",
      mx: "auto",
      minHeight:700
    }}
  >
    <Box
      sx={{
        height: 220,
        backgroundImage: `url(${p.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: 220,
          backgroundImage: `url(${p.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",

          "&:hover .action-buttons": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        }}
      >
        <Box
          className="action-buttons"
          sx={{
            position: "absolute",
            top: 100,
            right: 50,
            display: "flex",
            gap: 1.5,

            opacity: 0,
            transform: "translateY(-8px)",
            transition: "all 0.3s ease",
          }}
        >
          <Button
            variant="contained"
            size="small"
            endIcon={<ArrowOutwardIcon />}
            sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600 }}
          >
            View Demo
          </Button>

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
          >
            View Code
          </Button>
        </Box>
      </Box>
    </Box>

    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        {p.title}
      </Typography>

      <Typography sx={{ color: "text.secondary", mb: 2, lineHeight: 1.6 }}>
        {p.desc}
      </Typography>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
        {p.features.map((t) => (
          <Chip
            key={t}
            label={t}
            size="small"
            sx={{ background: "rgba(255,255,255,0.06)" }}
          />
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
        <Typography
          variant="body2"
          sx={{
            color: "text.primary",
            fontWeight: 500,
            lineHeight: 1.5,
          }}
        >
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
      Featured Projects
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {projects.map((p) => (
        <Grid item xs={12} md={3.5} key={p.title}>
          <ProjectCard p={p} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;
