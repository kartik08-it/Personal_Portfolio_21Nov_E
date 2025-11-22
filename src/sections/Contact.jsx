// src/sections/Contact.jsx
import React from "react";
import { Box, Paper, Typography, Grid, TextField, Button } from "@mui/material";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // integrate with EmailJS / backend later
    alert("Message sent (demo)");
  };

  return (
    <Box sx={{ py: 8, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 4, width: "100%", maxWidth: 900, borderRadius: 2 }} elevation={2}>
        <Typography variant="h5" align="center" sx={{ fontWeight: 700, mb: 1 }}>Let's Work Together</Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 3 }}>
          I'm open to discussing new projects, creative ideas, or opportunities.
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Name" placeholder="Your name" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Email" placeholder="you@email.com" variant="outlined" />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth label="Message" placeholder="Tell me about your project..." multiline rows={6} />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth sx={{ background: "linear-gradient(90deg,#00d0c9,#00a6ff)" }} variant="contained">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Contact;
