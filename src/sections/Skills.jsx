import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

// OFFICIAL LINKS FOR EACH SKILL
const skillLinks = {
  PHP: "https://www.php.net/",
  Laravel: "https://laravel.com/",
  Python: "https://www.python.org/",
  Flask: "https://flask.palletsprojects.com/",
  "Node.js": "https://nodejs.org/",
  "Express.js": "https://expressjs.com/",
  FastAPI: "https://fastapi.tiangolo.com/",
  HTML5: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  CSS3: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "React.js": "https://react.dev/",
  "Vue.js": "https://vuejs.org/",
  TypeScript: "https://www.typescriptlang.org/",
  "Tailwind CSS": "https://tailwindcss.com/",
  MySQL: "https://www.mysql.com/",
  MongoDB: "https://www.mongodb.com/",
  PostgreSQL: "https://www.postgresql.org/",
  Redis: "https://redis.io/",
};

// GROUP DEFINITIONS
const skillGroups = [
  {
    title: "Backend Development",
    items: ["PHP", "Laravel", "Python", "Flask", "Node.js", "Express.js", "FastAPI"],
  },
  {
    title: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
  },
];

// SKILL CARD COMPONENT
const SkillItem = ({ name }) => (
  <Box
    onClick={() => window.open(skillLinks[name], "_blank")}
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      p: 1.5,
      borderRadius: 2,
      border: "1px solid rgba(255,255,255,0.08)",
      background: "rgba(255,255,255,0.02)",
      cursor: "pointer",
      transition: "all 0.25s ease",
      "&:hover": {
        transform: "scale(1.04)",
        boxShadow: "0 0 12px rgba(0,200,255,0.4)",
        background: "rgba(0,200,255,0.05)",
      },
    }}
  >
    <Typography sx={{ fontWeight: 500 }}>{name}</Typography>
    <Chip label="Expert" size="small" />
  </Box>
);

// SKILL GROUP (CARD)
const GroupCard = ({ group }) => (
  <Paper
    elevation={2}
    sx={{
      p: 3,
      borderRadius: 3,
      minHeight: 380, // equal height
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    }}
  >
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
      {group.title}
    </Typography>
    <Stack spacing={1}>
      {group.items.map((item) => (
        <SkillItem key={item} name={item} />
      ))}
    </Stack>
  </Paper>
);

// MAIN SECTION
const Skills = () => (
  <Box sx={{ py: 10 }}>
    <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 700 }}>
      Technical Skills
    </Typography>

    <Grid
      container
      spacing={4}
      justifyContent="center"   // CENTER THE THREE CARDS
    >
      {skillGroups.map((group) => (
        <Grid item xs={12} md={4} key={group.title}>
          <GroupCard group={group} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Skills;
