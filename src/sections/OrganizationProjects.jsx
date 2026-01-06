import React from "react";
import { Box, Grid, Paper, Typography, Chip, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CodeIcon from "@mui/icons-material/Code";
import ProjectCaseStudyDialog from "../components/Dialog/ProjectCaseStudyDialog";

const projects = [
  {
    title: "Admin 2.0 Interface",
    desc: "Re-architected a scalable admin dashboard used internally for managing core application workflows.",
    impact:
      "Reduced data load time by 35% and simplified long-term feature maintenance across teams.",
    img: "/Dashboard.png",
    features: [
      "Advanced CRUD",
      "Dynamic Forms",
      "Role-Based Access",
      "Reusable Components",
    ],
    stack: ["React.js", "Material UI", "TypeScript", "REST APIs"],
    isConfidential: true,

    caseStudy: {
      overview:
        "A modern, modular admin dashboard designed to manage core platform workflows with scalability and long-term maintainability in mind.",

      responsibilities: [
        "Re-architected legacy UI into reusable, modular React components",
        "Designed advanced CRUD workflows with dynamic form handling",
        "Implemented role-based access control across modules",
        "Optimized frontend data-fetching and state management",
      ],

      architecture: [
        "React frontend using Material UI",
        "REST API integration with backend services",
        "Role-based access enforced at UI and API levels",
        "Component-driven architecture for scalability",
      ],

      techStack: ["React.js", "TypeScript", "Material UI", "REST APIs"],

      impactMetrics: [
        "35% reduction in data load time",
        "Simplified feature maintenance across teams",
        "Improved developer productivity with reusable components",
      ],
    },
  },

  {
    title: "Proctor & Invigilator Panel",
    desc: "Built a unified real-time monitoring system for proctors and invigilators.",
    impact: "Improved monitoring efficiency and reduced response latency.",
    img: "/ProctorInvigilator.png",
    features: [
      "Role-Based Dashboards",
      "Real-Time Candidate Monitoring",
      "WebSocket Event Streaming",
      "Session Verification & Flagging",
    ],
    stack: ["React.js", "TypeScript", "WebSockets", "Material UI", "RBAC"],
    isConfidential: true,

    caseStudy: {
      overview:
        "A real-time proctoring and invigilation system used during online examinations to monitor candidate behavior and session integrity.",

      responsibilities: [
        "Designed role-based dashboards for proctors and invigilators",
        "Implemented WebSocket-based real-time event streaming",
        "Built controlled actions for session verification and activity flagging",
        "Collaborated with backend teams to define event schemas",
      ],

      architecture: [
        "React frontend with Material UI",
        "WebSocket layer for real-time events",
        "Laravel backend with queue-based async processing",
        "RBAC for controlled access",
      ],

      techStack: [
        "React.js",
        "TypeScript",
        "Material UI",
        "WebSockets",
        "Laravel",
        "MySQL",
      ],

      impactMetrics: [
        "50% reduction in event response latency",
        "Improved monitoring efficiency across concurrent sessions",
        "Reduced manual intervention through automation",
      ],
    },
  },

  {
    title: "API Development & Migration (SOAP → REST)",
    desc: "Led end-to-end backend API development and migration from legacy SOAP services to modern RESTful APIs.",
    impact:
      "Improved backend throughput and reduced server load by introducing async processing with Laravel queues.",
    img: "/SoapRest.png",
    features: [
      "SOAP to REST Migration",
      "Backward Compatibility",
      "Middleware Layers",
    ],
    stack: ["Laravel", "PHP", "REST APIs", "MySQL"],
    isConfidential: true,

    caseStudy: {
      overview:
        "A backend modernization initiative to migrate legacy SOAP services to scalable, maintainable RESTful APIs.",

      responsibilities: [
        "Migrated legacy SOAP APIs to RESTful architecture",
        "Ensured backward compatibility during phased rollout",
        "Designed standardized request validation and authentication layers",
        "Implemented async processing using Laravel queues",
      ],

      architecture: [
        "Laravel-based REST API layer",
        "Middleware-driven authentication and validation",
        "Queue-based async processing",
        "MySQL-backed persistence layer",
      ],

      techStack: ["Laravel", "PHP", "REST APIs", "MySQL", "Laravel Queues"],

      impactMetrics: [
        "Improved backend throughput under high load",
        "Reduced server load via async processing",
        "Improved maintainability and scalability of APIs",
      ],
    },
  },

  {
    title: "SuperAdmin Panel",
    desc: "Built a secure full-stack SuperAdmin system to manage users, roles, and system configurations.",
    impact:
      "Strengthened system security, auditability, and data integrity across the platform.",
    img: "/superadmin.png",
    features: [
      "Role-Based Access Control",
      "Two-Factor Authentication",
      "Audit Logs",
      "System Configuration",
    ],
    stack: ["Laravel", "React.js", "RBAC", "Google Authenticator"],
    isConfidential: true,

    caseStudy: {
      overview:
        "A secure administrative system providing full control over users, roles, and critical platform configurations.",

      responsibilities: [
        "Designed granular role-based access control",
        "Implemented two-factor authentication for privileged users",
        "Built audit logging for critical system actions",
        "Developed system-wide configuration management features",
      ],

      architecture: [
        "React-based frontend for admin controls",
        "Laravel backend with RBAC enforcement",
        "Audit logging at API and database layers",
        "Secure authentication and authorization flows",
      ],

      techStack: [
        "Laravel",
        "React.js",
        "RBAC",
        "Google Authenticator",
        "MySQL",
      ],

      impactMetrics: [
        "Improved system security and access control",
        "Enhanced auditability and compliance readiness",
        "Reduced risk of unauthorized configuration changes",
      ],
    },
  },

  {
    title: "Email Template System",
    desc: "Engineered dynamic and reusable email templates for transactional and notification workflows.",
    impact:
      "Boosted email click-through rates by 20% through consistent, responsive, brand-aligned templates.",
    img: "/Email.png",
    features: [
      "Reusable Templates",
      "Dynamic Content",
      "Blade Components",
      "Brand Consistency",
    ],
    stack: ["Laravel Blade", "HTML", "CSS", "Email Systems"],
    isConfidential: true,

    caseStudy: {
      overview:
        "A centralized email templating system to standardize transactional and notification emails across the platform.",

      responsibilities: [
        "Designed reusable Blade-based email templates",
        "Implemented dynamic data binding for transactional emails",
        "Ensured responsive layouts across email clients",
        "Aligned templates with brand guidelines",
      ],

      architecture: [
        "Laravel Blade templating engine",
        "Dynamic data injection from backend services",
        "Reusable components for layout consistency",
      ],

      techStack: ["Laravel Blade", "HTML", "CSS", "Email Delivery Systems"],

      impactMetrics: [
        "20% increase in email click-through rates",
        "Improved brand consistency across communications",
        "Reduced effort for future email template updates",
      ],
    },
  },

  {
    title: "WordPress Site Optimization",
    desc: "Optimized WordPress-based websites to improve performance, SEO, and user engagement.",
    impact:
      "Increased organic reach and lead conversions through improved SEO and page optimization.",
    img: "/BlinkExam.png",
    features: [
      "SEO Optimization",
      "Performance Tuning",
      "Landing Page Improvements",
      "Content Optimization",
    ],
    stack: ["WordPress", "WPBakery", "Elementor", "SEO"],
    isConfidential: true,

    caseStudy: {
      overview:
        "Optimization of WordPress websites to improve visibility, performance, and user engagement.",

      responsibilities: [
        "Optimized on-page SEO and metadata",
        "Improved page performance and load times",
        "Enhanced landing page layouts for better conversions",
        "Worked with content teams to optimize structure and flow",
      ],

      architecture: [
        "WordPress CMS",
        "Page builders for layout customization",
        "SEO tooling and performance optimization techniques",
      ],

      techStack: ["WordPress", "WPBakery", "Elementor", "SEO Tools"],

      impactMetrics: [
        "Improved SEO rankings and page engagement",
        "Increased organic traffic and lead conversions",
        "Better performance and user experience",
      ],
    },
  },
];

const ProjectCard = ({ p, onViewDetails }) => (
  <Paper
    sx={{
      width: 330,
      borderRadius: 3,
      overflow: "hidden",
      mx: "auto",
      minHeight: 700,
    }}
  >
    {/* Image Section */}
    <Box
      sx={{
        height: 220,
        backgroundImage: `url(${p.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",

        "&:hover .action-buttons": {
          opacity: 1,
          transform: "translateY(0px)",
        },
      }}
    >
      {/* Confidential Badge */}
      {p.isConfidential && (
        <Chip
          label="Confidential Project"
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "rgba(0,0,0,0.7)",
            color: "#fff",
            fontWeight: 600,
          }}
        />
      )}

      {/* Action Buttons */}
      <Box
        className="action-buttons"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          display: "flex",
          gap: 1.5,
          opacity: 0,
          transition: "all 0.3s ease",
        }}
      >
        <Button
          variant="contained"
          size="small"
          endIcon={<ArrowOutwardIcon />}
          sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600 }}
          onClick={() => onViewDetails(p)}
        >
          View Details
        </Button>

        {!p.isConfidential && (
          <Button
            variant="outlined"
            size="small"
            endIcon={<CodeIcon />}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              color: "white",
              borderColor: "white",
            }}
          >
            View Code
          </Button>
        )}
      </Box>
    </Box>

    {/* Content */}
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        {p.title}
      </Typography>

      <Typography sx={{ color: "text.secondary", mb: 2, lineHeight: 1.6 }}>
        {p.desc}
      </Typography>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
        {p.features.map((t) => (
          <Chip
            key={t}
            label={t}
            size="small"
            sx={{ background: "rgba(255,255,255,0.06)" }}
          />
        ))}
      </Box>

      {/* Impact Box */}
      <Box
        sx={{
          p: 2,
          borderRadius: 2,
          background: "rgba(0, 200, 255, 0.08)",
          border: "1px solid rgba(0,200,255,0.25)",
          mb: 2,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: 1.5 }}>
          {p.impact}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {p.stack.map((t) => (
          <Chip key={t} label={t} size="small" />
        ))}
      </Box>
    </Box>
  </Paper>
);

const OrganizationProjects = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);
  return (
    <Box sx={{ py: 10 }}>
      <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 700 }}>
        Professional Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((p) => (
          <Grid item xs={12} md={3.5} key={p.title}>
            <ProjectCard p={p} onViewDetails={setSelectedProject} />
          </Grid>
        ))}
      </Grid>
      <ProjectCaseStudyDialog
        open={Boolean(selectedProject)}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Box>
  );
};

export default OrganizationProjects;
