import React from 'react';
import { Container, Typography, Grid, Paper, Box, Chip, useTheme } from '@mui/material';
import SkillBar from '../components/SkillBar';
import AnimatedSection from '../components/AnimatedSection';

const technicalSkills = [
  { name: 'React.js', level: 90, colors: ['#61DAFB', '#00B4D8', '#90E0EF', '#48CAE4'] },
  { name: 'JavaScript', level: 85, colors: ['#F7DF1E', '#FFD700', '#FFF176', '#FFE57F'] },
  { name: 'Node.js', level: 80, colors: ['#339933', '#2E7D32', '#81C784', '#66BB6A'] },
  { name: 'Python', level: 75, colors: ['#3776AB', '#2196F3', '#90CAF9', '#64B5F6'] },
  { name: 'SQL', level: 85, colors: ['#336791', '#1976D2', '#64B5F6', '#42A5F5'] },
  { name: 'HTML/CSS', level: 95, colors: ['#E34F26', '#F4511E', '#FF7043', '#FF8A65'] }
];

const softSkills = [
  { name: 'Problem Solving', level: 90, colors: ['#9C27B0', '#7B1FA2', '#BA68C8', '#AB47BC'] },
  { name: 'Team Collaboration', level: 85, colors: ['#2196F3', '#1976D2', '#64B5F6', '#42A5F5'] },
  { name: 'Communication', level: 88, colors: ['#4CAF50', '#388E3C', '#81C784', '#66BB6A'] },
  { name: 'Project Management', level: 82, colors: ['#F44336', '#D32F2F', '#E57373', '#EF5350'] }
];

const otherSkills = [
  'Git',
  'Docker',
  'AWS',
  'RESTful APIs',
  'GraphQL',
  'MongoDB',
  'Redux',
  'TypeScript',
  'Jest',
  'CI/CD',
  'Agile',
  'Microservices'
];

const Skills = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <AnimatedSection>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 700,
            mb: 6,
            background: theme.palette.mode === 'light'
              ? 'linear-gradient(45deg, #2196f3, #f50057)'
              : 'linear-gradient(45deg, #90caf9, #f48fb1)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Skills & Expertise
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
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
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Technical Skills
              </Typography>
              {technicalSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  level={skill.level}
                  color={skill.colors}
                />
              ))}
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
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
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Soft Skills
              </Typography>
              {softSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  level={skill.level}
                  color={skill.colors}
                />
              ))}
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                background: theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.9)'
                  : 'rgba(18, 18, 18, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
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
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Additional Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {otherSkills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      background: theme.palette.mode === 'light'
                        ? 'rgba(33, 150, 243, 0.1)'
                        : 'rgba(144, 202, 249, 0.1)',
                      borderRadius: '16px',
                      '&:hover': {
                        background: theme.palette.mode === 'light'
                          ? 'rgba(33, 150, 243, 0.2)'
                          : 'rgba(144, 202, 249, 0.2)',
                      }
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </AnimatedSection>
    </Container>
  );
};

export default Skills;
