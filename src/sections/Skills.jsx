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
    items: ["Git", "GitHub", "Postman", "Ubuntu/Linux", "Agile/Scrum", "SVN Version Control"],
  },
  // {
  //   title: "Cloud Services",
  //   items: ["AWS"],
  // },
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
  const link = skillLinks[name];

  return (
    <Box
      onClick={() => link && window.open(link, "_blank")}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 1.5,
        borderRadius: 2,
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.03)",
        cursor: link ? "pointer" : "default",
        transition: "0.25s",
        "&:hover": {
          transform: link ? "translateY(-2px)" : "none",
          boxShadow: link ? "0px 0px 12px rgba(0,200,255,0.4)" : "none",
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
      minHeight: 420,
      maxHeight: 420,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}
  >
    <Box
      sx={{
        mb: 2,
        maxHeight: 64,
        overflowY: "auto",
        pr: 1,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {group.title}
      </Typography>
    </Box>

    <Stack
      spacing={1}
      sx={{
        flex: 1,
        overflowY: "auto",
        pr: 1,
      }}
    >
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
  const visibleSkillGroups = skillGroups.filter(
    (group) => group.items && group.items.length > 0
  );

  return (
    <Box sx={{ py: 10 }}>
      <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 700 }}>
        Technical Skills
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 4,
          px: { xs: 2, md: 4 },
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          maxWidth: 1800,
          maxHeight: 900,
          overflowY: "auto",
          alignItems: "stretch",
        }}
      >
        {visibleSkillGroups.map((group) => (
          <Box key={group.title} sx={{ minWidth: 0 }}>
            <GroupCard group={group} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
