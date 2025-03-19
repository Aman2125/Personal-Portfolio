import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
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
            mb: 4
          }}
        >
          Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </AnimatedSection>
    </Container>
  );
};

export default Projects;
