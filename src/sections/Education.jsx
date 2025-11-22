import React from "react";
import { Box, Grid, Paper, Typography, Link,Stack } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Margin } from "@mui/icons-material";

const education = {
  degree: "Bachelor of Science in Computer Science",
  college: "D.A.V PG College, Muzaffarnagar",
  duration: "2016 - 2020",
};

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    org: "Amazon Web Services",
    year: "Issued 2023",
    link: "#",
  },
  {
    title: "MongoDB Certified Developer",
    org: "MongoDB University",
    year: "Issued 2022",
    link: "#",
  },
  {
    title: "Professional Scrum Master I",
    org: "Scrum.org",
    year: "Issued 2021",
    link: "#",
  },
];

const Card = ({ children }) => (
  <Paper
    elevation={2}
    sx={{
      p: 3,
      borderRadius: 2,
      background: (t) => t.palette.background.paper,
    }}
  >
    {children}
  </Paper>
);

const Education = () => {
  return (
    <Box sx={{ py: 10 }}>
      {/* Heading */}
      <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 700 }}>
        Education & Certifications
      </Typography>

      <Grid
        container
        spacing={6}
        sx={{ width: "90%", mx: "auto", justifyContent: "center" }}
      >
        {/* LEFT — EDUCATION */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1.2 }}>
            <SchoolIcon sx={{ color: "primary.main" }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Education
            </Typography>
          </Box>

          <Card>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {education.degree}
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 0.5 }}>
              {education.college}
            </Typography>

            <Typography sx={{ mt: 2, color: "text.secondary", fontSize: 14 }}>
              📅 {education.duration}
            </Typography>

            <Typography sx={{ mt: 1.5, color: "text.secondary", fontSize: 14 }}>
              {education.details}
            </Typography>
          </Card>
        </Grid>

        {/* RIGHT — CERTIFICATIONS */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1.2 }}>
            <WorkspacePremiumIcon sx={{ color: "primary.main" }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Certifications
            </Typography>
          </Box>

          <Stack spacing={3}>
            {certifications.map((c, i) => (
              <Card key={i} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {c.title}
                </Typography>

                <Typography sx={{ color: "text.secondary", mt: 0.5 }}>
                  {c.org}
                </Typography>

                <Typography
                  sx={{ color: "text.secondary", mt: 1, fontSize: 14 }}
                >
                  📅 {c.year}
                </Typography>

                <Link
                  href={c.link}
                  target="_blank"
                  sx={{
                    mt: 1.5,
                    display: "inline-block",
                    fontWeight: 600,
                    color: "primary.light",
                  }}
                >
                  View Credential ↗
                </Link>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
