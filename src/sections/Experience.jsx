import React from "react";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Stack,
} from "@mui/material";
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
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    date: "Jan 2021 - Present",
    bullets: [
      "Led development of microservices architecture serving 2M+ monthly users",
      "Improved app performance by 45% through DB optimization",
      "Mentored team of 5 junior devs",
      "Implemented CI/CD reducing deployment time to 15 minutes",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "AWS", "Docker", "Redis"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Inc.",
    date: "Mar 2019 - Dec 2020",
    bullets: [
      "Developed RESTful APIs handling 100k+ daily requests",
      "Built real-time analytics dashboard",
      "Integrated payment gateway processing $2M+ transactions",
      "Collaborated on UX redesign increasing engagement by 35%",
    ],
    tech: ["Laravel", "Vue.js", "MySQL", "Stripe", "Redis"],
  },
  // add more entries if needed
];

const ExperienceCard = ({ exp }) => (
  <Paper sx={{ p: 3, borderRadius: 2, background: (t) => t.palette.background.paper }} elevation={2}>
    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>{exp.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{exp.company}</Typography>

        <Box component="ul" sx={{ mt: 2, pl: 2 }}>
          {exp.bullets.map((b, i) => (
            <Typography key={i} component="li" sx={{ color: "text.secondary", mb: 1 }}>{b}</Typography>
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

      <Timeline position="right" sx={{ py: 2 }}>
        {experiences.map((exp, idx) => (
          <TimelineItem key={idx}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} />
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: "primary.main", boxShadow: "0 0 10px rgba(0,160,200,0.12)" }} />
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
