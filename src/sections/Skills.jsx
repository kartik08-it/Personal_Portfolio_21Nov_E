import React from "react";
import { Box, Paper, Typography, Chip, Stack } from "@mui/material";

/* ----------------------------------
   OFFICIAL LINKS FOR EACH SKILL
---------------------------------- */
const skillLinks = {
  PHP: "https://www.php.net/",
  Laravel: "https://laravel.com/",
  Python: "https://www.python.org/",
  Django: "https://www.djangoproject.com/",
  Flask: "https://flask.palletsprojects.com/",
  "Node.js": "https://nodejs.org/",
  FastAPI: "https://fastapi.tiangolo.com/",
  "Generative AI": "https://ai.google.dev/",
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
  "Flask",
  "Material-UI",
  "WordPress",
  "Git",
  "GitHub",
  "Postman",
  "Ubuntu/Linux",
  "Agile/Scrum",
  "Java",
  "Spring Boot",
  "CodeIgniter",
];

const CURRENTLY_LEARNING = ["Python", "Django", "FastAPI", "Generative AI"];

/* ----------------------------------
   SKILL GROUPS
---------------------------------- */
const skillGroups = [
  {
    title: "Backend Development",
    items: ["PHP", "Laravel", "CodeIgniter", "Java", "Spring Boot", "Flask", "RESTful APIs", "SOAP"],
  },
  {
    title: "AI & Currently Learning",
    items: ["Python", "Django", "FastAPI", "Generative AI"],
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
  if (CURRENTLY_LEARNING.includes(name)) return "Learning";
  if (ADVANCED.includes(name)) return "Advanced";
  if (INTERMEDIATE.includes(name)) return "Intermediate";
  return "Beginner";
};

const levelColor = {
  Advanced: "success",
  Intermediate: "warning",
  Beginner: "default",
  Learning: "info",
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
        borderRadius: 2.5,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.default",
        cursor: link ? "pointer" : "default",
        transition: "0.25s",
        "&:hover": {
          transform: link ? "translateY(-2px)" : "none",
          boxShadow: link ? 2 : "none",
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
      borderRadius: 4,
      minHeight: 360,
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Box
      sx={{
        mb: 2,
        minHeight: 36,
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
    <Box component="section" sx={{ py: { xs: 7, md: 9 }, px: { xs: 2.5, sm: 4, lg: 6 } }}>
      <Box sx={{ maxWidth: 1220, mx: "auto" }}>
      <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 750, letterSpacing: "0.12em" }}>
        TOOLKIT
      </Typography>
      <Typography variant="h3" sx={{ mt: 0.5, mb: 1.5 }}>Skills & continuous learning</Typography>

      <Typography
        color="text.secondary"
        sx={{ maxWidth: 720, mb: 4, lineHeight: 1.75 }}
      >
        Alongside my current stack, I’m leveling up in AI and expanding my skills
        in Python, Django, FastAPI, and Generative AI. The more I learn, the more
        curious I become—so I keep exploring, growing, and never settling.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 2.5,
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
    </Box>
  );
};

export default Skills;
