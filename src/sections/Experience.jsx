import React from "react";
import { Box, Typography, Paper, Chip, Stack } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const experiences = [
  {
    title: "Backend Developer Trainee",
    company: "Pioneering The Future, Noida, India",
    date: "Oct 2023 – Mar 2024",
    bullets: [
      "Developed and maintained SOAP-based APIs for internal modules using Laravel.",
      "Assisted in migrating selected legacy services from SOAP to REST architecture.",
      "Created automated Laravel Artisan commands to reduce manual operational tasks.",
      "Worked with senior developers to understand API design, database relations, and system workflows.",
      "Used Git-based version control and followed coding standards to maintain code consistency.",
    ],
    tech: ["Laravel", "PHP", "SOAP", "MySQL", "Git"],
  },
  {
    title: "Backend Developer",
    company: "Pioneering The Future, Noida, India",
    date: "Apr 2024 – Sep 2024",
    bullets: [
      "Boosted API performance and maintainability by migrating legacy SOAP services to RESTful APIs.",
      "Implemented middleware, async queue handling, and optimized database queries to reduce response time.",
      "Enhanced application security by integrating Role-Based Access Control (RBAC).",
      "Implemented Two-Factor Authentication (2FA) using Google Authenticator.",
      "Improved system reliability through structured error handling and logging.",
    ],
    tech: [
      "Laravel",
      "REST APIs",
      "MySQL",
      "Queues",
      "RBAC",
      "Google Authenticator",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Pioneering The Future, Noida, India",
    date: "Oct 2024 – Present",
    bullets: [
      "Developed responsive front-end interfaces using React and Material-UI, improving load time and UI consistency.",
      "Redesigned Admin 2.0 dashboard with modular architecture, advanced CRUD, and dynamic forms.",
      "Built a real-time WebSocket-based Proctor Panel for live candidate monitoring, reducing event latency by 50%.",
      "Collaborated with product, QA, and design teams in Agile sprints to deliver production-ready features.",
      "Maintained high code quality through peer reviews and ensured smooth deployments via Git workflows.",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "Material-UI",
      "Laravel",
      "WebSockets",
      "RBAC",
    ],
  },
];

const ExperienceCard = ({ exp }) => (
  <Paper
    sx={{
      p: 3,
      borderRadius: 2,
      background: (t) => t.palette.background.paper,
    }}
    elevation={2}
  >
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {exp.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {exp.company}
        </Typography>

        <Box component="ul" sx={{ mt: 2, pl: 2 }}>
          {exp.bullets.map((b, i) => (
            <Typography
              key={i}
              component="li"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              {b}
            </Typography>
          ))}
        </Box>

        <Box sx={{ mt: 1 }}>
          {exp.tech.map((t) => (
            <Chip key={t} label={t} size="small" sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>
      </Box>

      <Box sx={{ color: "text.secondary", textAlign: "right" }}>
        <CalendarTodayIcon fontSize="small" />
        <Typography variant="body2">{exp.date}</Typography>
      </Box>
    </Stack>
  </Paper>
);

const Experience = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 700 }}>
        Experience
      </Typography>

      <Timeline
        position="right"
        sx={{
          py: 2,
          pl: { xs: 0, md: 4 }, // push timeline slightly left
              ml: { xs: 0, md: -22 }, // ⬅️ push timeline left
        }}
      >
        {experiences.map((exp, idx) => (
          <TimelineItem key={idx}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} />
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: "primary.main",
                  boxShadow: "0 0 10px rgba(0,160,200,0.12)",
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <ExperienceCard exp={exp} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Experience;
