import React from "react";
import { Box, Typography, IconButton, Divider, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 3, md: 5 },
        py: 4,
        px: { xs: 2.5, sm: 4, lg: 6 },
        bgcolor: (t) => t.palette.background.default,
        borderTop: "1px solid",
        borderColor: "divider",
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
          <Typography variant="h6" sx={{ fontWeight: 750, mb: 0.5 }}>
            Kartik Upadhayay
          </Typography>
          <Typography color="text.secondary">Full Stack Developer</Typography>
        </Box>

        {/* Right Icons */}
        <Stack direction="row" spacing={2}>
          <IconButton
            size="large"
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
            onClick={() =>
              window.open("https://github.com/kartik08-it", "_blank")
            }
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            size="large"
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/kartik-upadhayay-77b722148/", "_blank")
            }
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            size="large"
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
            onClick={() => window.open("mailto:kartiku03@gmail.com")}
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            size="large"
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
            onClick={() => window.open("https://wa.me/917088586048", "_blank")}
          >
            <WhatsAppIcon />
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
        © {new Date().getFullYear()} Kartik Upadhayay. All rights reserved. Built
        with <strong>React & MUI</strong>.
      </Typography>
    </Box>
  );
};

export default Footer;
