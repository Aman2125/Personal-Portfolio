import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Box, useScrollTrigger, Slide } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = ({ toggleTheme, mode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects'];
    const scrollPosition = window.scrollY;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop - 100;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }
  ];

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{ 
          backdropFilter: 'blur(8px)',
          backgroundColor: mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(18, 18, 18, 0.8)',
        }}
        elevation={0}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography 
              variant="h6" 
              component="div"
              sx={{ 
                fontWeight: 700,
                background: mode === 'light' 
                  ? 'linear-gradient(45deg, #2196f3, #f50057)'
                  : 'linear-gradient(45deg, #90caf9, #f48fb1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Portfolio
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: 'text.primary',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: activeSection === item.id ? '100%' : '0%',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease-in-out'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 1 }}>
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Toolbar>

          {/* Mobile Menu */}
          <Box
            sx={{
              display: { xs: mobileOpen ? 'flex' : 'none', md: 'none' },
              flexDirection: 'column',
              gap: 2,
              py: 2,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color: 'text.primary',
                  width: '100%',
                  justifyContent: 'center',
                  py: 1,
                  backgroundColor: activeSection === item.id ? 'action.selected' : 'transparent'
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={toggleTheme}
              startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              sx={{ width: '100%', justifyContent: 'center', py: 1 }}
            >
              {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </Box>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
