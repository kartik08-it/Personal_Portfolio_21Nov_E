import React from "react";
import { Box, Grid, Paper, Typography, Chip, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CodeIcon from "@mui/icons-material/Code";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-featured ecommerce solution with real-time inventory management, payment processing, and order tracking.",
    impact: "Increased sales by 40% and reduced cart abandonment by 25%",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    features: [
      "Real-time inventory",
      "Payment gateway",
      "Admin dashboard",
      "Email notifications",
    ],
    stack: ["React.js", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
  },
  {
    title: "Task Management System",
    desc: "Collaborative project management with real-time updates, team workspaces, and analytics dashboards.",
    impact: "Improved team productivity by 35% based on user surveys",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    features: [
      "Real-time collaboration",
      "Kanban boards",
      "Time tracking",
      "Analytics dashboard",
    ],
    stack: ["Laravel", "Vue.js", "MySQL", "WebSocket", "Docker"],
  },
  {
    title: "Content Management System",
    desc: "Custom CMS with drag-and-drop page builder, SEO tools, and multi-language support. Powers 500+ websites.",
    impact: "Reduced content publishing time by 60%",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    features: [
      "Drag-and-drop builder",
      "SEO optimization",
      "Multi-language",
      "Media library",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "AWS S3"],
  },
];

const ProjectCard = ({ p }) => (
  <Paper
    sx={{
      width: 330,
      borderRadius: 3,
      overflow: "hidden",
      mx: "auto",
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
            top: 16,
            right: 16,
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
