import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CodeIcon from "@mui/icons-material/Code";
import PeopleIcon from "@mui/icons-material/People";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";

const StatCard = ({ icon, title, subtitle }) => (
  <Paper
    elevation={2}
    sx={{
      p: 3,
      background: (theme) => theme.palette.background.paper,
      borderRadius: 10,
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
          pb: 4,
          pt: .5,
          borderRadius: 4,
          background: (t) => t.palette.background.paper,
        }}
        elevation={2}
      >
        <Grid
          container
          spacing={3}
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ mt: 5 }}
        >
          <Grid item xs={12} md={2.2}>
            <StatCard
              icon={<WorkOutlineIcon color="primary" />}
              title="2+ Years"
              subtitle="Industry Experience"
            />
          </Grid>

          <Grid item xs={12} md={2.2}>
            <StatCard
              icon={<CodeIcon color="primary" />}
              title="40+"
              subtitle="Features & Modules"
            />
          </Grid>

          <Grid item xs={12} md={2.2}>
            <StatCard
              icon={<SettingsSuggestIcon color="primary" />}
              title="Production"
              subtitle="Enterprise Systems"
            />
          </Grid>

          <Grid item xs={12} md={2.2}>
            <StatCard
              icon={<TrendingUpIcon color="primary" />}
              title="45%+"
              subtitle="Performance Gains"
            />
          </Grid>

          <Grid item xs={12} md={2.2}>
            <StatCard
              icon={<GroupsIcon color="primary" />}
              title="Agile"
              subtitle="Cross-Team Delivery"
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default About;
