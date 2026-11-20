import { Box, Button, Paper, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Contact = () => (
  <Box
    component="section"
    sx={{ px: { xs: 2.5, sm: 4, lg: 6 }, py: { xs: 7, md: 10 } }}
  >
    <Paper
      sx={{
        width: "100%",
        mx: "auto",
        p: { xs: 3, sm: 5, md: 7 },
        borderRadius: 5,
        background: (theme) =>
          theme.palette.mode === "light"
            ? "linear-gradient(125deg, #ffffff 0%, #edf1ff 100%)"
            : "linear-gradient(125deg, #111a2d 0%, #182546 100%)",
      }}
    >
      <Typography
        variant="overline"
        sx={{ color: "primary.main", fontWeight: 750, letterSpacing: "0.12em" }}
      >
        HAVE A PROJECT IN MIND?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: 3,
          mt: 1,
        }}
      >
        <Box sx={{ maxWidth: 700 }}>
          <Typography variant="h3" sx={{ mb: 1.5 }}>
            Let’s build something useful.
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
            I’m open to conversations about product engineering, full-stack
            opportunities, and ideas worth bringing to life. Send me an email
            and let’s talk.
          </Typography>
        </Box>
        <Button
          component="a"
          href="mailto:kartiku03@gmail.com?subject=Let%E2%80%99s%20connect"
          variant="contained"
          size="large"
          endIcon={<ArrowOutwardIcon />}
          startIcon={<MailOutlineIcon />}
          sx={{ flexShrink: 0, py: 1.5 }}
        >
          Get in touch
        </Button>
      </Box>
    </Paper>
  </Box>
);

export default Contact;
