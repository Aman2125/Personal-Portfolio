import React from 'react';
import { Box } from '@mui/material';
import InteractiveHero from '../components/InteractiveHero';
import InteractiveAbout from '../components/InteractiveAbout';

const Home = () => {
  return (
    <Box>
      <InteractiveHero />
      <InteractiveAbout />
    </Box>
  );
};

export default Home;
