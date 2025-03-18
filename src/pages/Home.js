import React from 'react';
import { Container, Typography, Box, Button, useTheme, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Home = () => {
  const theme = useTheme();

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'light'
            ? 'radial-gradient(circle at 50% 50%, rgba(33, 150, 243, 0.1), rgba(245, 0, 87, 0.05))'
            : 'radial-gradient(circle at 50% 50%, rgba(144, 202, 249, 0.1), rgba(244, 143, 177, 0.05))',
          zIndex: -1,
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              background: theme.palette.mode === 'light'
                ? 'linear-gradient(45deg, #2196f3, #f50057)'
                : 'linear-gradient(45deg, #90caf9, #f48fb1)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textAlign: 'center',
            }}
          >
            Hi, I'm Aman Kumar Gupta
          </Typography>
          
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2.5rem' },
              fontWeight: 500,
              mb: 4,
              color: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)',
            }}
          >
            Full Stack Developer
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              maxWidth: '800px',
              margin: '0 auto',
              mb: 6,
              color: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)',
            }}
          >
            I create beautiful and functional web applications using modern technologies.
            Let's build something amazing together!
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
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
        </Box>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': {
              transform: 'translateX(-50%) translateY(0)',
            },
            '40%': {
              transform: 'translateX(-50%) translateY(-20px)',
            },
            '60%': {
              transform: 'translateX(-50%) translateY(-10px)',
            },
          },
        }}
      >
        <IconButton onClick={scrollToAbout} sx={{ color: 'text.secondary' }}>
          <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home;
