import React from 'react';
import { Container, Typography, Box, Paper, Grid, LinearProgress } from '@mui/material';

const skills = {
  technical: [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 85 },
  ],
  soft: [
    { name: 'Problem Solving', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Project Management', level: 80 },
  ]
};

const SkillBar = ({ name, level }) => (
  <Box sx={{ mb: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
      <Typography variant="body1">{name}</Typography>
      <Typography variant="body2">{level}%</Typography>
    </Box>
    <LinearProgress 
      variant="determinate" 
      value={level} 
      sx={{ 
        height: 8, 
        borderRadius: 5,
        backgroundColor: 'rgba(0,0,0,0.1)',
        '& .MuiLinearProgress-bar': {
          borderRadius: 5,
        }
      }} 
    />
  </Box>
);

const Skills = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Skills
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Technical Skills
            </Typography>
            {skills.technical.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Soft Skills
            </Typography>
            {skills.soft.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </Paper>

          <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Additional Skills
            </Typography>
            <Grid container spacing={2}>
              {['Git', 'Docker', 'AWS', 'Agile', 'RESTful APIs', 'MongoDB'].map((skill) => (
                <Grid item key={skill}>
                  <Paper 
                    sx={{ 
                      px: 2, 
                      py: 1, 
                      backgroundColor: 'primary.main', 
                      color: 'white' 
                    }}
                  >
                    <Typography>{skill}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
