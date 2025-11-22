// src/sections/Projects.jsx
import React from "react";
import { Box, Grid, Paper, Typography, Chip, Button } from "@mui/material";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-featured ecommerce solution with real-time inventory and payments.",
    img: "https://via.placeholder.com/600x350",
    tags: ["React.js", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Task Management System",
    desc: "Collaborative project management with kanban boards and analytics.",
    img: "https://via.placeholder.com/600x350",
    tags: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "CMS System",
    desc: "Custom CMS with drag-and-drop builder and SEO tools.",
    img: "https://via.placeholder.com/600x350",
    tags: ["PHP", "MySQL", "JS"],
  },
];

const ProjectCard = ({ p }) => (
  <Paper sx={{ borderRadius: 2, overflow: "hidden", position: "relative" }} elevation={2}>
    <Box sx={{ height: 200, backgroundImage: `url(${p.img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <Box sx={{
        position: "absolute",
        top: 12,
        right: 12,
        display: "flex",
        gap: 1,
      }}>
        <Button variant="contained" size="small">View Demo</Button>
        <Button variant="outlined" size="small">View Code</Button>
      </Box>
    </Box>

    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>{p.title}</Typography>
      <Typography sx={{ color: "text.secondary", mb: 2 }}>{p.desc}</Typography>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {p.tags.map((t) => <Chip key={t} label={t} size="small" />)}
      </Box>
    </Box>
  </Paper>
);

const Projects = () => (
  <Box sx={{ py: 8 }}>
    <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 700 }}>Featured Projects</Typography>

    <Grid container spacing={3}>
      {projects.map((p) => (
        <Grid item xs={12} md={4} key={p.title}>
          <ProjectCard p={p} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;
