import React from "react";
import { Box, Paper, Typography, Chip, Stack } from "@mui/material";

// OFFICIAL LINKS FOR EACH SKILL
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
};

// GROUPS
const skillGroups = [
  {
    title: "Backend Development",
    items: ["PHP", "Laravel", "Python", "Flask", "Node.js", "FastAPI"],
  },
  {
    title: "Frontend Development",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "TypeScript"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    title: "Cloud",
    items: ["AWS"],
  },
];

const SkillItem = ({ name }) => (
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
    <Chip label="Expert" size="small" />
  </Box>
);

const GroupCard = ({ group }) => (
  <Paper
    elevation={2}
    sx={{
      p: 3,
      borderRadius: 3,
      minWidth: 260,      
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

// MAIN SECTION
const Skills = () => (
  <Box sx={{ py: 10 }}>
    <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 700 }}>
      Technical Skills
    </Typography>

    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        gap: 2,
        px: 2,
        pb: 1,
        scrollSnapType: "x mandatory",
        justifyContent:"center" 
      }}
    >
      {skillGroups.map((group) => (
        <Box key={group.title} sx={{ scrollSnapAlign: "start"}}>
          <GroupCard group={group} />
        </Box>
      ))}
    </Box>
  </Box>
);

export default Skills;
