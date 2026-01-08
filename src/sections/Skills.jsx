import React from "react";
import { Box, Paper, Typography, Chip, Stack } from "@mui/material";

/* ----------------------------------
   OFFICIAL LINKS FOR EACH SKILL
---------------------------------- */
const skillLinks = {
  PHP: "https://www.php.net/",
  Laravel: "https://laravel.com/",
  Python: "https://www.python.org/",
  Flask: "https://flask.palletsprojects.com/",
  "Node.js": "https://nodejs.org/",
  FastAPI: "https://fastapi.tiangolo.com/",
  HTML5: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  CSS3: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "React.js": "https://react.dev/",
  TypeScript: "https://www.typescriptlang.org/",
  MySQL: "https://www.mysql.com/",
  MongoDB: "https://www.mongodb.com/",
  AWS: "https://aws.amazon.com/",
  "RESTful APIs": "https://restfulapi.net/",
  SOAP: "https://www.w3.org/TR/soap/",
  "Material-UI": "https://mui.com/",
  WordPress: "https://wordpress.org/",
  Git: "https://git-scm.com/",
  GitHub: "https://github.com/",
  Postman: "https://www.postman.com/",
  "Ubuntu/Linux": "https://ubuntu.com/",
  "Agile/Scrum": "https://www.scrum.org/",
};

const ADVANCED = [
  "PHP",
  "Laravel",
  "React.js",
  "JavaScript",
  "TypeScript",
  "MySQL",
  "RESTful APIs",
  "SOAP",
];

const INTERMEDIATE = [
  "HTML5",
  "CSS3",
  "Python",
  "Flask",
  "Material-UI",
  "WordPress",
  "Git",
  "GitHub",
  "Postman",
  "Ubuntu/Linux",
  "Agile/Scrum",
];

/* ----------------------------------
   SKILL GROUPS
---------------------------------- */
const skillGroups = [
  {
    title: "Backend Development",
    items: ["PHP", "Laravel", "Python", "Flask", "RESTful APIs", "SOAP"],
  },
  {
    title: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "TypeScript",
      "Material-UI",
      "WordPress",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Ubuntu/Linux", "Agile/Scrum"],
  },
  {
    title: "Cloud Services",
    items: ["AWS"],
  },
];

/* ----------------------------------
   HELPERS
---------------------------------- */
const getSkillLevel = (name) => {
  if (ADVANCED.includes(name)) return "Advanced";
  if (INTERMEDIATE.includes(name)) return "Intermediate";
  return "Beginner";
};

const levelColor = {
  Advanced: "success",
  Intermediate: "warning",
  Beginner: "default",
};

/* ----------------------------------
   COMPONENTS
---------------------------------- */
const SkillItem = ({ name }) => {
  const level = getSkillLevel(name);

  return (
    <Box
      onClick={() => window.open(skillLinks[name], "_blank")}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 1.5,
        borderRadius: 2,
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.03)",
        cursor: "pointer",
        transition: "0.25s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 0px 12px rgba(0,200,255,0.4)",
        },
      }}
    >
      <Typography>{name}</Typography>

      <Chip
        label={level}
        size="small"
        color={levelColor[level]}
        variant={level === "Beginner" ? "outlined" : "filled"}
      />
    </Box>
  );
};

const GroupCard = ({ group }) => (
  <Paper
    elevation={2}
    sx={{
      p: 3,
      borderRadius: 3,
      minWidth: 280,
      height: 420,
      overflowY: "auto",
      flexShrink: 0,
      mr: 3,
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

/* ----------------------------------
   MAIN SECTION
---------------------------------- */
const Skills = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 700 }}>
        Technical Skills
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          overflowX: "auto",
          px: 4,
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          maxWidth: 1800,
          height: "430px",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        {skillGroups.map((group) => (
          <Box key={group.title} sx={{ scrollSnapAlign: "start" }}>
            <GroupCard group={group} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
