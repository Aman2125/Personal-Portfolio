import React, { useState } from 'react';
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingMenu = ({ toggleTheme, mode }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const actions = [
    { icon: <HomeIcon />, name: 'Home', action: () => scrollToSection('home') },
    { icon: <PersonIcon />, name: 'About', action: () => scrollToSection('about') },
    { icon: <CodeIcon />, name: 'Skills', action: () => scrollToSection('skills') },
    { icon: <WorkIcon />, name: 'Projects', action: () => scrollToSection('projects') },
    { 
      icon: mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />, 
      name: `${mode === 'dark' ? 'Light' : 'Dark'} Mode`, 
      action: toggleTheme 
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <SpeedDial
          ariaLabel="Navigation SpeedDial"
          icon={<SpeedDialIcon openIcon={<MoreVertIcon />} />}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          direction="up"
          FabProps={{
            sx: {
              bgcolor: theme.palette.mode === 'light' ? 'primary.main' : 'primary.dark',
              '&:hover': {
                bgcolor: theme.palette.mode === 'light' ? 'primary.dark' : 'primary.main',
              },
              '&.MuiSpeedDial-fab': {
                width: 56,
                height: 56,
              },
            }
          }}
        >
          <AnimatePresence>
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={action.action}
                FabProps={{
                  sx: {
                    bgcolor: 'background.paper',
                    '&:hover': {
                      bgcolor: theme.palette.mode === 'light' 
                        ? 'rgba(0, 0, 0, 0.1)' 
                        : 'rgba(255, 255, 255, 0.1)',
                    },
                  }
                }}
              />
            ))}
          </AnimatePresence>
        </SpeedDial>
      </Box>
    </motion.div>
  );
};

export default FloatingMenu;
