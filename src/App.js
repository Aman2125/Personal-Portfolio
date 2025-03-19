import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import SEO from './components/SEO';
import { Box } from '@mui/material';

function App() {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#2196f3' : '#90caf9',
      },
      secondary: {
        main: mode === 'light' ? '#f50057' : '#f48fb1',
      },
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
      },
    },
    typography: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SEO 
          title="Home"
          description="Full Stack Developer Portfolio showcasing modern web applications and technical expertise"
          image="https://via.placeholder.com/1200x630"
        />
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar toggleTheme={toggleTheme} mode={mode} />
          <Box component="main" sx={{ flexGrow: 1, scrollBehavior: 'smooth' }}>
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="projects">
              <Projects />
            </section>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
