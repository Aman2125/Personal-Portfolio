import React, { useState, useRef, useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Chip, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Interactive3DCard = ({ project }) => {
  const theme = useTheme();
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 150,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 20
  });

  function onMouseMove({ clientX, clientY }) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        resetMouse();
      }}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d'
      }}
    >
      <motion.div
        style={{
          rotateX: hovered ? rotateX : 0,
          rotateY: hovered ? rotateY : 0
        }}
      >
        <Card
          elevation={hovered ? 12 : 4}
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            background: theme.palette.mode === 'light'
              ? 'rgba(255, 255, 255, 0.9)'
              : 'rgba(18, 18, 18, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            overflow: 'hidden',
            transition: 'all 0.3s ease-in-out',
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
              opacity: hovered ? 1 : 0.7,
              transition: 'opacity 0.3s ease-in-out'
            }
          }}
        >
          <motion.div
            initial={false}
            animate={{
              scale: hovered ? 1.05 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt={project.title}
              sx={{
                objectFit: 'cover',
                filter: hovered ? 'brightness(1.1)' : 'brightness(1)',
                transition: 'filter 0.3s ease-in-out'
              }}
            />
          </motion.div>

          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Typography 
              variant="h5" 
              component="h2" 
              gutterBottom
              sx={{
                fontWeight: 600,
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

            <Typography variant="body2" color="text.secondary" paragraph>
              {project.description}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {project.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    background: theme.palette.mode === 'light'
                      ? 'rgba(33, 150, 243, 0.1)'
                      : 'rgba(144, 202, 249, 0.1)',
                    '&:hover': {
                      background: theme.palette.mode === 'light'
                        ? 'rgba(33, 150, 243, 0.2)'
                        : 'rgba(144, 202, 249, 0.2)',
                    }
                  }}
                />
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                  }
                }}
              >
                Code
              </Button>
              <Button
                variant="contained"
                startIcon={<LaunchIcon />}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: theme.palette.mode === 'light'
                    ? 'linear-gradient(45deg, #2196f3, #f50057)'
                    : 'linear-gradient(45deg, #90caf9, #f48fb1)',
                  color: 'white',
                  '&:hover': {
                    background: theme.palette.mode === 'light'
                      ? 'linear-gradient(45deg, #1976d2, #c51162)'
                      : 'linear-gradient(45deg, #64b5f6, #f06292)',
                  }
                }}
              >
                Live Demo
              </Button>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Interactive3DCard;
