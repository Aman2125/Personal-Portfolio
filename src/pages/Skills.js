import React, { useState } from 'react';
import { Box, Container, Typography, Grid, useTheme, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BrushIcon from '@mui/icons-material/Brush';

const SkillCategory = ({ title, skills, icon, delay }) => {
  const theme = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.01 }}
    >
      <Box
        sx={{
          p: 3,
          height: '100%',
          background: theme.palette.mode === 'light'
            ? 'rgba(255, 255, 255, 0.9)'
            : 'rgba(18, 18, 18, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: 4,
          boxShadow: theme.palette.mode === 'light'
            ? '0 4px 30px rgba(0, 0, 0, 0.1)'
            : '0 4px 30px rgba(0, 0, 0, 0.3)',
          border: '1px solid',
          borderColor: theme.palette.mode === 'light'
            ? 'rgba(255, 255, 255, 0.3)'
            : 'rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: theme.palette.mode === 'light'
              ? '0 8px 40px rgba(0, 0, 0, 0.15)'
              : '0 8px 40px rgba(0, 0, 0, 0.5)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #2196f3, #f50057)',
          }
        }}
      >
        <motion.div
          initial={false}
          animate={{
            scale: [1, 1.05, 1],
            transition: { duration: 0.5 }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
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
                mr: 2,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'rotate(10deg)',
                }
              }}
            >
              {icon}
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              {title}
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ mt: 2 }}>
          {skills.map((skill, index) => (
            <Box 
              key={skill.name} 
              sx={{ mb: 3, position: 'relative' }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <motion.div
                  animate={{
                    scale: hoveredSkill === skill.name ? 1.05 : 1,
                    color: hoveredSkill === skill.name 
                      ? theme.palette.primary.main 
                      : theme.palette.text.primary
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {skill.name}
                  </Typography>
                </motion.div>
                <motion.div
                  animate={{
                    scale: hoveredSkill === skill.name ? 1.05 : 1,
                    color: hoveredSkill === skill.name 
                      ? theme.palette.primary.main 
                      : theme.palette.text.secondary
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Typography variant="body2">
                    {skill.level}%
                  </Typography>
                </motion.div>
              </Box>
              <Box sx={{ position: 'relative', height: '8px' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ 
                    duration: 1.2,
                    delay: 0.2 + index * 0.15,
                    ease: [0.6, 0.05, -0.01, 0.9]
                  }}
                  viewport={{ once: true }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={100}
                    sx={{
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: theme.palette.mode === 'light'
                        ? 'rgba(0,0,0,0.08)'
                        : 'rgba(255,255,255,0.08)',
                      '& .MuiLinearProgress-bar': {
                        background: hoveredSkill === skill.name
                          ? 'linear-gradient(90deg, #2196f3, #f50057)'
                          : theme.palette.mode === 'light'
                            ? 'linear-gradient(90deg, #2196f3, #90caf9)'
                            : 'linear-gradient(90deg, #90caf9, #64b5f6)',
                        borderRadius: '4px',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  />
                </motion.div>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

const Skills = () => {
  const theme = useTheme();

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <CodeIcon sx={{ color: 'white', fontSize: 30 }} />,
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'Material-UI/Tailwind', level: 85 },
      ],
      delay: 0.2
    },
    {
      title: 'Backend Development',
      icon: <StorageIcon sx={{ color: 'white', fontSize: 30 }} />,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'MongoDB/PostgreSQL', level: 85 },
        { name: 'GraphQL', level: 80 },
      ],
      delay: 0.4
    },
    {
      title: 'Cloud & DevOps',
      icon: <CloudIcon sx={{ color: 'white', fontSize: 30 }} />,
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux/Shell', level: 80 },
      ],
      delay: 0.6
    },
    {
      title: 'Design & Tools',
      icon: <BrushIcon sx={{ color: 'white', fontSize: 30 }} />,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Responsive Design', level: 90 },
        { name: 'UI/UX Principles', level: 85 },
      ],
      delay: 0.8
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
      {/* Animated Background Gradient */}
      <Box
        sx={{
          position: 'absolute',
          width: '50%',
          height: '50%',
          background: theme.palette.primary.main,
          filter: 'blur(150px)',
          opacity: theme.palette.mode === 'light' ? 0.1 : 0.15,
          top: '-20%',
          left: '-10%',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(50px, 50px)' },
          }
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
          animation: 'float2 8s ease-in-out infinite',
          '@keyframes float2': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(-30px, -30px)' },
          }
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
            Skills & Expertise
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <SkillCategory {...category} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
