import React from 'react';
import { Box, Container, Grid, Typography, IconButton, useTheme, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        mt: 8,
        py: 6,
        backgroundColor: theme.palette.mode === 'light' 
          ? 'rgba(255, 255, 255, 0.8)'
          : 'rgba(18, 18, 18, 0.8)',
        backdropFilter: 'blur(10px)',
        borderTop: `1px solid ${theme.palette.divider}`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'light'
            ? 'linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(245, 0, 87, 0.1))'
            : 'linear-gradient(135deg, rgba(144, 202, 249, 0.1), rgba(244, 143, 177, 0.1))',
          zIndex: -1,
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                background: theme.palette.mode === 'light'
                  ? 'linear-gradient(45deg, #2196f3, #f50057)'
                  : 'linear-gradient(45deg, #90caf9, #f48fb1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 700,
                mb: 2
              }}
            >
              Get in Touch
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Feel free to reach out for collaborations or just a friendly hello
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                href="https://github.com/Aman2125"
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
              <IconButton
                href="https://www.linkedin.com/in/aman-kumar-gupta-910041214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://x.com/Aman_gupta045?t=xOHClh_8W1WtNOWmMo3hBg&s=09"
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
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="amandev8864@gmail.com"
                sx={{
                  backgroundColor: 'action.hover',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    backgroundColor: 'action.selected',
                  }
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                background: theme.palette.mode === 'light'
                  ? 'linear-gradient(45deg, #2196f3, #f50057)'
                  : 'linear-gradient(45deg, #90caf9, #f48fb1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 700,
                mb: 2
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Home', 'About', 'Skills', 'Projects'].map((section) => (
                <Typography
                  key={section}
                  variant="body2"
                  onClick={() => document.getElementById(section.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    cursor: 'pointer',
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                    }
                  }}
                >
                  {section}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                background: theme.palette.mode === 'light'
                  ? 'linear-gradient(45deg, #2196f3, #f50057)'
                  : 'linear-gradient(45deg, #90caf9, #f48fb1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 700,
                mb: 2
              }}
            >
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Stay updated with my latest projects and tech articles
            </Typography>
            <Box
              component="form"
              sx={{
                display: 'flex',
                gap: 1,
                '& input': {
                  flex: 1,
                  p: 1,
                  borderRadius: 1,
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: 'background.paper',
                  color: 'text.primary',
                  outline: 'none',
                  '&:focus': {
                    borderColor: 'primary.main',
                  }
                }
              }}
            >
              <input type="email" placeholder="Enter your email" />
              <IconButton
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  }
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Your Name. All rights reserved.
          </Typography>
          <IconButton
            onClick={scrollToTop}
            sx={{
              backgroundColor: 'action.hover',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-3px)',
                backgroundColor: 'action.selected',
              }
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
