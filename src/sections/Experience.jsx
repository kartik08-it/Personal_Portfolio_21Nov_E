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
    title: "Software Developer",
    company: "Webverse IT, Noida, India",
    date: "January 2026 – Present",
    bullets: [
      "Worked on the DC Ashram edtech panel using CodeIgniter, contributing to feature development and ongoing platform improvements.",
      "Integrated market research APIs to bring external data into the platform and support business workflows.",
      "Created new services and modules for existing clients based on changing project requirements.",
      "Maintained and enhanced existing application functionality while ensuring stable integrations and smooth delivery.",
      "Collaborated with the team to ship client-focused updates and support day-to-day product needs.",
    ],
    tech: [
      "CodeIgniter",
      "React.js",
      "MySQL",
      "SVN Version Control",
    ],
  },
  {
    title: "Software Developer",
    company: "Pioneering The Future, Noida, India",
    date: "Oct 2023 – January 2026",
    bullets: [
      "Developed and maintained SOAP-based APIs for internal modules using Laravel while supporting day-to-day backend workflows.",
      "Contributed to migrating legacy services from SOAP to RESTful APIs, improving maintainability and overall API performance.",
      "Created automated Laravel Artisan commands to reduce manual operational tasks and improve developer efficiency.",
      "Implemented middleware, async queue handling, and optimized database queries to reduce response time.",
      "Enhanced application security by integrating Role-Based Access Control (RBAC).",
      "Implemented Two-Factor Authentication (2FA) using Google Authenticator.",
      "Developed responsive front-end interfaces using React and Material-UI, improving UI consistency and usability.",
      "Redesigned the Admin 2.0 dashboard with modular architecture, advanced CRUD flows, and dynamic forms.",
      "Built a real-time WebSocket-based Proctor Panel for live candidate monitoring and faster event handling.",
      "Collaborated with product, QA, and design teams in Agile sprints to deliver production-ready features.",
      "Improved system reliability through structured error handling and logging.",
    ],
    tech: [
      "Laravel",
      "PHP",
      "SOAP",
      "REST APIs",
      "React.js",
      "TypeScript",
      "Material-UI",
      "MySQL",
      "Queues",
      "WebSockets",
      "RBAC",
      "Google Authenticator",
      "Git",
    ],
  }
];

const ExperienceCard = ({ exp }) => (
  <Paper
    sx={{
      p: { xs: 2, sm: 3 },
      borderRadius: 2,
      background: (t) => t.palette.background.paper,
      width: "100%",
    }}
    elevation={2}
  >
    <Stack
      spacing={2}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "flex-start" }}
        spacing={{ xs: 1.5, sm: 2 }}
      >
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {exp.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {exp.company}
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{
            color: "text.secondary",
            width: { xs: "100%", sm: "auto" },
            justifyContent: { xs: "flex-start", sm: "flex-end" },
            textAlign: { xs: "left", sm: "right" },
            flexShrink: 0,
          }}
        >
          <CalendarTodayIcon fontSize="small" />
          <Typography variant="body2">{exp.date}</Typography>
        </Stack>
      </Stack>

      <Box
        component="ul"
        sx={{
          mt: 0,
          mb: 0,
          pl: 2.5,
          pr: { xs: 0.5, sm: 0 },
        }}
      >
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
          px: { xs: 1, sm: 2, md: 0 },
          pl: { xs: 0, md: 4 },
          ml: { xs: 0, md: -22 },
        }}
      >
        {experiences.map((exp, idx) => (
          <TimelineItem
            key={idx}
            sx={{
              minHeight: "auto",
              alignItems: "stretch",
              "&::before": {
                flex: { xs: 0, md: 1 },
                padding: 0,
              },
            }}
          >
            <TimelineOppositeContent
              sx={{
                display: { xs: "none", md: "block" },
                m: "auto 0",
              }}
            />
            <TimelineSeparator
              sx={{
                flex: 0,
                px: { xs: 1, sm: 2 },
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TimelineDot
                sx={{
                  bgcolor: "primary.main",
                  boxShadow: "0 0 10px rgba(0,160,200,0.12)",
                }}
              />
              {idx !== experiences.length - 1 && (
                <TimelineConnector
                  sx={{
                    flexGrow: 1,
                    minHeight: 24,
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent
              sx={{
                py: "12px",
                px: { xs: 1, sm: 2 },
              }}
            >
              <ExperienceCard exp={exp} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Experience;
