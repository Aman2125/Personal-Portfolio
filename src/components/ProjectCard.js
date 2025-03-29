import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, IconButton, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectCard = ({ project }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          background: theme.palette.mode === 'light' 
            ? 'rgba(255, 255, 255, 0.9)'
            : 'rgba(18, 18, 18, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: 4,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: theme.palette.mode === 'light'
              ? 'linear-gradient(45deg, #2196f3, #f50057)'
              : 'linear-gradient(45deg, #90caf9, #f48fb1)',
          }
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.title}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}
        />
        
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography 
            variant="h5" 
            gutterBottom
            sx={{
              fontWeight: 700,
              background: theme.palette.mode === 'light'
                ? 'linear-gradient(45deg, #2196f3, #f50057)'
                : 'linear-gradient(45deg, #90caf9, #f48fb1)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {project.title}
          </Typography>
          
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ mb: 2 }}
          >
            {project.description}
          </Typography>

          <Stack 
            direction="row" 
            spacing={1} 
            flexWrap="wrap" 
            sx={{ mb: 2, gap: 1 }}
          >
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  background: theme.palette.mode === 'light'
                    ? 'rgba(33, 150, 243, 0.1)'
                    : 'rgba(144, 202, 249, 0.1)',
                  borderRadius: '16px',
                }}
              />
            ))}
          </Stack>

          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
            {project.github && (
              <IconButton
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: 'action.hover',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    backgroundColor: 'action.selected',
                  }
                }}
              >
                <GitHubIcon />
              </IconButton>
            )}
            {project.demo && (
              <IconButton
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: 'action.hover',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    backgroundColor: 'action.selected',
                  }
                }}
              >
                <LaunchIcon />
              </IconButton>
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;