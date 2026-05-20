// src/sections/Contact.jsx
import React from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = "your.email@example.com";
    const subject = `Portfolio contact from ${name || "a visitor"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        display: "flex",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 900,
          borderRadius: 4,
          p: 5,
          background: (t) => t.palette.background.paper,
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <ChatBubbleOutlineIcon
            sx={{ fontSize: 40, color: "primary.main" }}
          />
        </Box>

        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: 700, mb: 1 }}
        >
          Let’s Work Together
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          I'm always open to discussing new projects, creative ideas,
          or opportunities to be part of your vision.
        </Typography>

        {/* <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 4, fontStyle: "italic" }}
        >
          This form opens your email client directly, so no backend or SMTP service is required.
        </Typography> */}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              width: "96%",
            }}
          >
            <Box sx={{ width: "40%" }}>
              <Typography sx={{ mb: 1, fontWeight: 600 }}>Name</Typography>
              <TextField
                fullWidth
                placeholder="Your name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>

            <Box sx={{ width: "40%" }}>
              <Typography sx={{ mb: 1, fontWeight: 600 }}>Email</Typography>
              <TextField
                fullWidth
                placeholder="kartiku03@gmail.com"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
          </Box>

          <Box sx={{ width: "80%" }}>
            <Typography sx={{ mb: 1, fontWeight: 600 }}>Message</Typography>
            <TextField
              fullWidth
              placeholder="Tell me about your project or opportunity..."
              multiline
              rows={6}
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Box> */}

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "80%",
              py: 1.4,
              borderRadius: 3,
              fontWeight: 600,
              fontSize: 15,
              textTransform: "none",
              background: "linear-gradient(90deg, #00E1FF, #00B2FF)",
              "&:hover": {
                background: "linear-gradient(90deg, #00CEEB, #009EE0)",
              },
            }}
          >
            Send Message 
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Contact;
