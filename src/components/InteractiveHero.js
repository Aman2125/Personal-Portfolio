import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, useTheme, Button } from '@mui/material';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParticleBackground from './ParticleBackground';

const FloatingShape = ({ delay, duration, x, y, rotate, size, color }) => (
  <motion.div
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: `radial-gradient(circle at 30% 30%, ${color}, transparent)`,
      position: 'absolute',
      filter: 'blur(8px)',
      opacity: 0.4,
    }}
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0.2, 0.4, 0.2],
      x: x,
      y: y,
      rotate: rotate,
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  />
);

const InteractiveHero = () => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useTransform(mouseX, [-500, 500], [-200, 200]);
  const spotlightY = useTransform(mouseY, [-500, 500], [-200, 200]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const shapes = [
    { delay: 0, duration: 8, x: [-20, 20], y: [-30, 30], rotate: [0, 360], size: 100, color: theme.palette.primary.main },
    { delay: 1, duration: 10, x: [30, -30], y: [20, -20], rotate: [360, 0], size: 80, color: theme.palette.secondary.main },
    { delay: 2, duration: 9, x: [-40, 40], y: [-10, 10], rotate: [0, -360], size: 120, color: theme.palette.primary.light },
    { delay: 3, duration: 11, x: [10, -10], y: [-40, 40], rotate: [-360, 0], size: 90, color: theme.palette.secondary.light },
  ];

  const techStack = ['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'MongoDB'];

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: theme.palette.mode === 'light'
          ? 'linear-gradient(135deg, rgba(245,247,250,0.9) 0%, rgba(228,232,235,0.9) 100%)'
          : 'linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(45,45,45,0.95) 100%)',
      }}
    >
      <ParticleBackground />
      
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}

      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${spotlightX}px ${spotlightY}px, 
            ${theme.palette.mode === 'light' ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.05)'} 0%, 
            transparent 50%)`,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                textAlign: 'center',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '4rem' },
                background: theme.palette.mode === 'light'
                  ? 'linear-gradient(45deg, #2196f3, #f50057)'
                  : 'linear-gradient(45deg, #90caf9, #f48fb1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: theme.palette.mode === 'light'
                  ? '0 2px 4px rgba(0,0,0,0.1)'
                  : '0 2px 4px rgba(255,255,255,0.1)',
              }}
            >
              Hi, I'm Aman Kumar Gupta
            </Typography>
          </motion.div>

          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <TypeAnimation
              sequence={[
                'Building modern web applications',
                2000,
                'Creating seamless user experiences',
                2000,
                'Developing scalable solutions',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: '1.5rem',
                display: 'inline-block',
                color: theme.palette.text.secondary,
              }}
              repeat={Infinity}
            />
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                maxWidth: '800px',
                margin: '0 auto',
                mb: 6,
                textAlign: 'center',
                color: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)',
              }}
            >
              I create beautiful and functional web applications using modern technologies.
              Let's build something amazing together!
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 6 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  background: theme.palette.mode === 'light'
                    ? 'linear-gradient(45deg, #2196f3, #f50057)'
                    : 'linear-gradient(45deg, #90caf9, #f48fb1)',
                  '&:hover': {
                    background: theme.palette.mode === 'light'
                      ? 'linear-gradient(45deg, #1976d2, #dc004e)'
                      : 'linear-gradient(45deg, #64b5f6, #f06292)',
                  }
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                }}
              >
                About Me
              </Button>
            </Box>
          </motion.div>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 2,
              mt: 4,
            }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <Box
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: '20px',
                    background: theme.palette.mode === 'light'
                      ? 'rgba(255, 255, 255, 0.9)'
                      : 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.mode === 'light'
                      ? 'rgba(255, 255, 255, 0.5)'
                      : 'rgba(255, 255, 255, 0.1)'}`,
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    boxShadow: theme.palette.mode === 'light'
                      ? '0 4px 6px rgba(0,0,0,0.1)'
                      : '0 4px 6px rgba(0,0,0,0.2)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: theme.palette.mode === 'light'
                        ? '0 6px 8px rgba(0,0,0,0.1)'
                        : '0 6px 8px rgba(0,0,0,0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {tech}
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default InteractiveHero;
