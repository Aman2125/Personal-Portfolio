import React, { useState } from 'react';
import { Box, Container, Typography, Grid, useTheme, IconButton, Chip } from '@mui/material';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ProjectCaseStudy from '../components/ProjectCaseStudy';

const ProjectCard = ({ project, index }) => {
  const theme = useTheme();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 100);
    y.set(yPct * 100);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        perspective: 2000,
      }}
    >
      <motion.div
        style={{
          x,
          y,
          rotateX,
          rotateY,
          z: 100,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.8,
          velocity: 0.5
        }}
      >
        <Box
          sx={{
            p: 3,
            height: '100%',
            background: theme.palette.mode === 'light'
              ? 'rgba(255, 255, 255, 0.9)'
              : 'rgba(18, 18, 18, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: theme.palette.mode === 'light'
              ? '0 4px 30px rgba(0, 0, 0, 0.1)'
              : '0 4px 30px rgba(0, 0, 0, 0.3)',
            border: '1px solid',
            borderColor: theme.palette.mode === 'light'
              ? 'rgba(255, 255, 255, 0.3)'
              : 'rgba(255, 255, 255, 0.1)',
            position: 'relative',
            transformStyle: 'preserve-3d',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #2196f3, #f50057)',
            }}
          />
          
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <FolderOpenIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
            <Box>
              <IconButton
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ mr: 1 }}
              >
                <GitHubIcon />
              </IconButton>
              {project.demo && (
                <IconButton
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                >
                  <LaunchIcon />
                </IconButton>
              )}
            </Box>
          </Box>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            {project.title}
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            {project.description}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
            {project.technologies.map((tech, i) => (
              <Chip
                key={i}
                label={tech}
                size="small"
                sx={{
                  background: theme.palette.mode === 'light'
                    ? 'rgba(0, 0, 0, 0.08)'
                    : 'rgba(255, 255, 255, 0.08)',
                  '&:hover': {
                    background: theme.palette.mode === 'light'
                      ? 'rgba(0, 0, 0, 0.12)'
                      : 'rgba(255, 255, 255, 0.12)',
                  },
                }}
              />
            ))}
          </Box>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `radial-gradient(circle at ${x.get()}px ${y.get()}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                  pointerEvents: 'none',
                }}
              />
            )}
          </AnimatePresence>
        </Box>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern portfolio website built with React and Material-UI",
      image: "/portfolio.jpg",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://your-portfolio.com",
      technologies: ["React", "Material-UI", "Framer Motion", "JavaScript"],
      keyFeatures: ["Responsive Design", "Dark Mode", "Interactive UI", "Animations"],
      problemStatement: "Needed a modern, interactive portfolio to showcase projects and skills effectively while demonstrating frontend development expertise.",
      approach: "Implemented a React-based solution with Material-UI for consistent design and Framer Motion for smooth animations. Focused on user experience and performance.",
      implementation: "Built with modular components, custom hooks for state management, and responsive design principles. Used Framer Motion for page transitions and micro-interactions.",
      challenges: "Optimizing performance with complex animations, ensuring cross-browser compatibility, and maintaining smooth transitions across different screen sizes.",
      results: "Created a highly interactive, performant portfolio that effectively showcases projects and skills while providing an engaging user experience."
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management, secure payments, and an intuitive admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://demo-ecommerce.com'
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application powered by AI for smart responses and language translation features.',
      technologies: ['Next.js', 'OpenAI API', 'WebSocket', 'PostgreSQL'],
      github: 'https://github.com/yourusername/ai-chat',
      demo: 'https://ai-chat-demo.com'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management system with real-time updates, file sharing, and automated workflows.',
      technologies: ['Vue.js', 'Firebase', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://task-manager-demo.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with interactive maps, forecasts, and weather alerts.',
      technologies: ['React', 'D3.js', 'Weather API', 'Leaflet'],
      github: 'https://github.com/yourusername/weather-app',
      demo: 'https://weather-dashboard-demo.com'
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with data visualization and reporting features.',
      technologies: ['React', 'Redux', 'Chart.js', 'Node.js'],
      github: 'https://github.com/yourusername/social-analytics',
      demo: 'https://social-analytics-demo.com'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 8,
            background: theme.palette.mode === 'light'
              ? 'linear-gradient(45deg, #2196f3, #f50057)'
              : 'linear-gradient(45deg, #90caf9, #f48fb1)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Featured Projects
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                onClick={() => setSelectedProject(project)}
                sx={{
                  p: 2,
                  height: '100%',
                  cursor: 'pointer',
                  background: theme.palette.mode === 'light'
                    ? 'rgba(255, 255, 255, 0.9)'
                    : 'rgba(18, 18, 18, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: theme.palette.mode === 'light'
                    ? '0 4px 30px rgba(0, 0, 0, 0.1)'
                    : '0 4px 30px rgba(0, 0, 0, 0.3)',
                  border: '1px solid',
                  borderColor: theme.palette.mode === 'light'
                    ? 'rgba(255, 255, 255, 0.3)'
                    : 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.palette.mode === 'light'
                      ? '0 8px 40px rgba(0, 0, 0, 0.15)'
                      : '0 8px 40px rgba(0, 0, 0, 0.5)',
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #2196f3, #f50057)',
                  }}
                />
                
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <FolderOpenIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                  <Box>
                    <IconButton
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{ mr: 1 }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    {project.demo && (
                      <IconButton
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        <LaunchIcon />
                      </IconButton>
                    )}
                  </Box>
                </Box>

                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  {project.title}
                </Typography>

                <Typography variant="body1" color="text.secondary" paragraph>
                  {project.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                  {project.technologies.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      sx={{
                        background: theme.palette.mode === 'light'
                          ? 'rgba(0, 0, 0, 0.08)'
                          : 'rgba(255, 255, 255, 0.08)',
                        '&:hover': {
                          background: theme.palette.mode === 'light'
                            ? 'rgba(0, 0, 0, 0.12)'
                            : 'rgba(255, 255, 255, 0.12)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <ProjectCaseStudy
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </Container>
  );
};

export default Projects;
