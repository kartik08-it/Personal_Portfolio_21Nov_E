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
      borderRadius: 3,
      display: "flex",
      gap: 2,
      alignItems: "center",
      height: "100%",
    }}
  >
    <Box
      sx={{ p: 1.25, borderRadius: 2, bgcolor: "primary.light", color: "primary.main" }}
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
    <Box component="section" sx={{ py: { xs: 7, md: 9 }, px: { xs: 2.5, sm: 4, lg: 6 } }}>
      <Box sx={{ width: "100%", mx: "auto" }}>
        <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 750, letterSpacing: "0.12em" }}>
          A LITTLE ABOUT ME
        </Typography>
        <Typography variant="h3" sx={{ mt: 0.5, mb: 1.5 }}>About me</Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 680, mb: 4, lineHeight: 1.75 }}>
          I enjoy turning complex workflows into reliable software that feels straightforward to use.
        </Typography>

        <Paper sx={{ p: { xs: 2, md: 3 }, borderRadius: 4 }}>
          <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12} sm={6} lg={2.4}>
            <StatCard
              icon={<WorkOutlineIcon color="primary" />}
              title="2+ Years"
              subtitle="Industry Experience"
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={2.4}>
            <StatCard
              icon={<CodeIcon color="primary" />}
              title="40+"
              subtitle="Features & Modules"
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={2.4}>
            <StatCard
              icon={<SettingsSuggestIcon color="primary" />}
              title="Production"
              subtitle="Enterprise Systems"
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={2.4}>
            <StatCard
              icon={<TrendingUpIcon color="primary" />}
              title="45%+"
              subtitle="Performance Gains"
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={2.4}>
            <StatCard
              icon={<GroupsIcon color="primary" />}
              title="Agile"
              subtitle="Cross-Team Delivery"
            />
          </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default About;
