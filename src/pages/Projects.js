import React from 'react';
import { Container, Typography, Grid, useTheme } from '@mui/material';
import Interactive3DCard from '../components/Interactive3DCard';
import AnimatedSection from '../components/AnimatedSection';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
    image: 'https://via.placeholder.com/400x200',
    github: '#',
    demo: '#',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates using Socket.IO. Includes features like task assignment, progress tracking, and team chat.',
    image: 'https://via.placeholder.com/400x200',
    github: '#',
    demo: '#',
    technologies: ['React', 'Socket.IO', 'Node.js', 'PostgreSQL']
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts for multiple cities. Integrates with OpenWeatherMap API.',
    image: 'https://via.placeholder.com/400x200',
    github: '#',
    demo: '#',
    technologies: ['React', 'Material-UI', 'OpenWeatherMap API']
  }
];

const Projects = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <AnimatedSection>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 700,
            mb: 6,
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

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <Interactive3DCard project={project} />
            </Grid>
          ))}
        </Grid>
      </AnimatedSection>
    </Container>
  );
};

export default Projects;
