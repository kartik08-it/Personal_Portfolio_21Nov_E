import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CodeIcon from "@mui/icons-material/Code";
import PeopleIcon from "@mui/icons-material/People";

const StatCard = ({ icon, title, subtitle }) => (
  <Paper
    elevation={2}
    sx={{
      p: 3,
      background: (theme) => theme.palette.background.paper,
      borderRadius: 2,
      display: "flex",
      gap: 2,
      alignItems: "center",
      boxShadow: (theme) => `0 8px 24px rgba(2,8,23,0.25)`,
    }}
  >
    <Box
      sx={{ p: 1.25, borderRadius: 1.5, background: "rgba(0,208,201,0.05)" }}
    >
      {icon}
    </Box>
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>
    </Box>
  </Paper>
);

const About = () => {
  return (
    <Box sx={{ py: 8, mr: 10, ml: 10 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 700 }}>
        About Me
      </Typography>

      <Paper
        sx={{
          p: 4,
          borderRadius: 4,
          background: (t) => t.palette.background.paper,
        }}
        elevation={2}
      >
        <Grid
  container
  spacing={3}
  justifyContent="space-evenly"   // PERFECT EVEN SPACING
  alignItems="center"
  textAlign="center"
>
  <Grid item xs={12} md={3}>
    <StatCard
      icon={<WorkOutlineIcon sx={{ color: "primary.main" }} />}
      title="8+ Years"
      subtitle="Experience"
    />
  </Grid>

  <Grid item xs={12} md={3}>
    <StatCard
      icon={<CodeIcon sx={{ color: "primary.main" }} />}
      title="50+"
      subtitle="Projects Completed"
    />
  </Grid>

  <Grid item xs={12} md={3}>
    <StatCard
      icon={<PeopleIcon sx={{ color: "primary.main" }} />}
      title="30+"
      subtitle="Happy Clients"
    />
  </Grid>
</Grid>

      </Paper>
    </Box>
  );
};

export default About;
