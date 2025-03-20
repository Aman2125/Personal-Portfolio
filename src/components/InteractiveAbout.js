import React from 'react';
import { Box, Container, Typography, Grid, useTheme, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BoltIcon from '@mui/icons-material/Bolt';
import DevicesIcon from '@mui/icons-material/Devices';

const FeatureCard = ({ icon, title, description, delay }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3,
          height: '100%',
          background: theme.palette.mode === 'light'
            ? 'rgba(255, 255, 255, 0.9)'
            : 'rgba(18, 18, 18, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: theme.palette.mode === 'light'
              ? '0 8px 20px rgba(0,0,0,0.1)'
              : '0 8px 20px rgba(0,0,0,0.4)',
          },
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
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: theme.palette.mode === 'light'
                ? 'linear-gradient(45deg, #2196f3, #f50057)'
                : 'linear-gradient(45deg, #90caf9, #f48fb1)',
              boxShadow: theme.palette.mode === 'light'
                ? '0 4px 8px rgba(0,0,0,0.1)'
                : '0 4px 8px rgba(0,0,0,0.4)',
              mr: 2
            }}
          >
            {icon}
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Paper>
    </motion.div>
  );
};

const InteractiveAbout = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <CodeIcon sx={{ color: 'white', fontSize: 30 }} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code is my priority. I follow best practices and design patterns.',
      delay: 0.2
    },
    {
      icon: <BoltIcon sx={{ color: 'white', fontSize: 30 }} />,
      title: 'Performance First',
      description: 'Optimizing for speed and efficiency while maintaining a smooth user experience across all devices.',
      delay: 0.4
    },
    {
      icon: <DevicesIcon sx={{ color: 'white', fontSize: 30 }} />,
      title: 'Responsive Design',
      description: 'Creating seamless experiences across all devices with mobile-first and responsive design principles.',
      delay: 0.6
    }
  ];

  return (
    <Box
      sx={{
        py: 12,
        background: theme.palette.mode === 'light'
          ? 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)'
          : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Gradient Orbs */}
      <Box
        sx={{
          position: 'absolute',
          width: '40%',
          height: '40%',
          background: theme.palette.primary.main,
          filter: 'blur(150px)',
          opacity: theme.palette.mode === 'light' ? 0.1 : 0.15,
          top: '20%',
          left: '-10%',
          borderRadius: '50%',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '40%',
          height: '40%',
          background: theme.palette.secondary.main,
          filter: 'blur(150px)',
          opacity: theme.palette.mode === 'light' ? 0.1 : 0.15,
          bottom: '-10%',
          right: '-10%',
          borderRadius: '50%',
        }}
      />

      <Container maxWidth="lg">
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
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Passionate Developer
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                I'm a Full Stack Developer with a passion for creating beautiful and functional web applications. 
                With expertise in both front-end and back-end development, I bring ideas to life using modern technologies 
                and best practices.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                My goal is to build applications that not only look great but also provide an exceptional user experience. 
                I'm constantly learning and staying up-to-date with the latest technologies and trends in web development.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  My Approach
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                  I believe in writing clean, maintainable code that scales. My experience with modern frameworks 
                  and tools allows me to choose the right technology for each project.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                  Whether it's building responsive user interfaces, implementing complex backend logic, or 
                  optimizing application performance, I'm committed to delivering high-quality solutions.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default InteractiveAbout;
