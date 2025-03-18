import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        About Me
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <CodeIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Developer
              </Typography>
              <Typography align="center">
                Passionate about creating clean, efficient, and user-friendly applications
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <SchoolIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Education
              </Typography>
              <Typography align="center">
                Bachelor's in Information Technology with focus on web technologies
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <WorkIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Experience
              </Typography>
              <Typography align="center">
                3+ years of experience in full-stack development
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          My Journey
        </Typography>
        <Typography paragraph>
          I am a passionate full-stack developer with a strong foundation in modern web technologies.
          My journey in software development began during my university years, where I discovered my
          love for creating innovative solutions to real-world problems.
        </Typography>
        <Typography paragraph>
          Throughout my career, I've worked on various projects ranging from small business websites
          to large-scale enterprise applications. I specialize in React.js for frontend development
          and have extensive experience with backend technologies including Node.js and Python.
        </Typography>
        <Typography>
          I'm constantly learning and staying up-to-date with the latest technologies and best practices
          in web development. My goal is to create efficient, scalable, and user-friendly applications
          that make a positive impact.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
