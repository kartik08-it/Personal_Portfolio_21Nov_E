import React from "react";
import { Box, Grid, Paper, Typography, Stack } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const educationList = [
  {
    degree: "Bachelor of Science in Computer Science",
    institute: "D.A.V PG College, Muzaffarnagar",
    duration: "2016 – 2020",
  },
  {
    degree: "Senior Secondary (12th) – Science Stream",
    institute: "LJP SVM Inter College",
    duration: "2016 • 70%",
  },
  {
    degree: "Secondary School (10th)",
    institute: "LJP SVM Inter College",
    duration: "2014",
  },
];

const learningAreas = [
  {
    title: "Backend & API Development",
    desc: "RESTful APIs, SOAP services, middleware, queues, and performance optimization using Laravel.",
  },
  {
    title: "Frontend Engineering",
    desc: "Responsive UI development with React, TypeScript, and Material-UI.",
  },
  {
    title: "Security & Authentication",
    desc: "Role-Based Access Control (RBAC) and Two-Factor Authentication (2FA).",
  },
  {
    title: "Agile & Team Collaboration",
    desc: "Sprint-based development, peer reviews, and cross-functional collaboration.",
  },
  {
    title: "Linux & Developer Tooling",
    desc: "Ubuntu/Linux, Git, Postman, debugging, and deployment workflows.",
  },
];

const Card = ({ children }) => (
  <Paper
    elevation={2}
    sx={{
      p: 3,
      borderRadius: 2,
      background: (t) => t.palette.background.paper,
    }}
  >
    {children}
  </Paper>
);

const Education = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 700 }}>
        Education & Learning
      </Typography>

      <Grid
        container
        spacing={6}
        sx={{ width: "90%", mx: "auto", justifyContent: "center" }}
      >
        {/* LEFT — EDUCATION */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1.2 }}>
            <SchoolIcon sx={{ color: "primary.main" }} />
            <Typography variant="h6" fontWeight={600}>
              Education
            </Typography>
          </Box>

          <Stack spacing={3}>
            {educationList.map((edu, i) => (
              <Card key={i}>
                <Typography variant="h6" fontWeight={600}>
                  {edu.degree}
                </Typography>
                <Typography sx={{ color: "text.secondary", mt: 0.5 }}>
                  {edu.institute}
                </Typography>
                <Typography
                  sx={{ mt: 1.5, color: "text.secondary", fontSize: 14 }}
                >
                  📅 {edu.duration}
                </Typography>
              </Card>
            ))}
          </Stack>
        </Grid>

        {/* RIGHT — LEARNING & FOCUS */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1.2 }}>
            <WorkspacePremiumIcon sx={{ color: "primary.main" }} />
            <Typography variant="h6" fontWeight={600}>
              Professional Learning
            </Typography>
          </Box>

          <Stack spacing={3}>
            {learningAreas.map((item, i) => (
              <Card key={i}>
                <Typography variant="h6" fontWeight={600}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", mt: 1 }}>
                  {item.desc}
                </Typography>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
