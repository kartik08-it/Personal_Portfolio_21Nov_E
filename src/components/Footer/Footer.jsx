import React from "react";
import { Box, Typography, IconButton, Divider, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 10,
        py: 6,
        px: 4,
        bgcolor: (t) => t.palette.background.default,
      }}
    >
      {/* TOP SECTION */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          mx: "auto",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {/* Left */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
            Kartik Gaur
          </Typography>
          <Typography color="text.secondary">
            Full Stack Developer
          </Typography>
        </Box>

        {/* Right Icons */}
        <Stack direction="row" spacing={2}>
          <IconButton
            size="large"
            sx={{
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 2,
            }}
            onClick={() => window.open("https://github.com/kartik08-it", "_blank")}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            size="large"
            sx={{
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 2,
            }}
            onClick={() => window.open("https://linkedin.com/in/kartik", "_blank")}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            size="large"
            sx={{
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 2,
            }}
            onClick={() => window.open("mailto:kartiku03@gmail.com")}
          >
            <EmailIcon />
          </IconButton>
        </Stack>
      </Box>

      {/* Divider */}
      <Divider sx={{ my: 4, opacity: 0.3 }} />

      {/* BOTTOM COPYRIGHT */}
      <Typography
        align="center"
        color="text.secondary"
        sx={{ fontSize: "0.9rem" }}
      >
        © {new Date().getFullYear()} Kartik Gaur. All rights reserved.  
        Built with <strong>React & MUI</strong>.
      </Typography>
    </Box>
  );
};

export default Footer;
