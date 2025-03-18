import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

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
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Projects
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <Card 
              elevation={3}
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Technologies: {project.technologies.join(', ')}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  startIcon={<GitHubIcon />}
                  href={project.github}
                  target="_blank"
                >
                  Code
                </Button>
                <Button 
                  size="small" 
                  startIcon={<LaunchIcon />}
                  href={project.demo}
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
