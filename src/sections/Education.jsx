// src/sections/Education.jsx
import React from "react";
import { Box, Grid, Paper, Typography, Link } from "@mui/material";

const Education = () => (
  <Box sx={{ py: 8 }}>
    <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 700 }}>
      Education & Certifications
    </Typography>

    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, borderRadius: 2 }} elevation={2}>
          <Typography variant="h6">Bachelor of Science in Computer Science</Typography>
          <Typography color="text.secondary">University of California, Berkeley</Typography>
          <Typography sx={{ mt: 1 }} color="text.secondary">2013 - 2017 • GPA: 3.8/4.0</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, borderRadius: 2 }} elevation={2}>
          <Typography variant="h6">AWS Certified Solutions Architect</Typography>
          <Typography color="text.secondary">Amazon Web Services • Issued 2023</Typography>
          <Link href="#" sx={{ mt: 1, display: "inline-block" }}>View Credential</Link>
        </Paper>

        <Paper sx={{ p: 3, borderRadius: 2, mt: 3 }} elevation={2}>
          <Typography variant="h6">MongoDB Certified Developer</Typography>
          <Typography color="text.secondary">MongoDB University • Issued 2022</Typography>
          <Link href="#" sx={{ mt: 1, display: "inline-block" }}>View Credential</Link>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

export default Education;
