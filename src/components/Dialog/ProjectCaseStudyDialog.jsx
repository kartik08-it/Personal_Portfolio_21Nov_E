import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  Chip,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Section = ({ title, children }) => (
  <Box sx={{ mb: 3 }}>
    <Typography sx={{ fontWeight: 700, mb: 1 }}>{title}</Typography>
    {children}
  </Box>
);

const List = ({ items }) => (
  <ul style={{ marginTop: 0 }}>
    {items.map((item, idx) => (
      <li key={idx}>
        <Typography variant="body2">{item}</Typography>
      </li>
    ))}
  </ul>
);

const ProjectCaseStudyDialog = ({ open, onClose, project }) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontWeight: 700 }}>
        {project.title}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 12, top: 12 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {/* Overview */}
        <Section title="Overview">
          <Typography variant="body2">{caseStudy.overview}</Typography>
        </Section>

        <Divider />

        {/* Responsibilities */}
        <Section title="Responsibilities">
          <List items={caseStudy.responsibilities} />
        </Section>

        <Divider />

        {/* Architecture */}
        <Section title="Architecture">
          <List items={caseStudy.architecture} />
        </Section>

        <Divider />

        {/* Tech Stack */}
        <Section title="Tech Stack">
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {caseStudy.techStack.map((tech) => (
              <Chip key={tech} label={tech} size="small" />
            ))}
          </Box>
        </Section>

        <Divider />

        {/* Impact Metrics */}
        <Section title="Impact Metrics">
          <List items={caseStudy.impactMetrics} />
        </Section>  

        {/* NDA Notice */}
        {project.isConfidential && (
          <Typography
            sx={{ mt: 4, fontSize: 12, color: "text.secondary" }}
          >
            This project was developed in a professional environment. Source
            code and system access are restricted under NDA.
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCaseStudyDialog;
