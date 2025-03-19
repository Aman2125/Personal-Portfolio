import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const SkillBar = ({ skill, level, color }) => {
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${level}%`,
        transition: {
          duration: 1,
          ease: "easeOut"
        }
      });
    }
  }, [controls, inView, level]);

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            background: theme.palette.mode === 'light'
              ? 'linear-gradient(45deg, #2196f3, #f50057)'
              : 'linear-gradient(45deg, #90caf9, #f48fb1)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {skill}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary
          }}
        >
          {level}%
        </Typography>
      </Box>
      <Box
        sx={{
          height: '8px',
          backgroundColor: theme.palette.mode === 'light'
            ? 'rgba(0, 0, 0, 0.1)'
            : 'rgba(255, 255, 255, 0.1)',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={controls}
          style={{
            height: '100%',
            background: theme.palette.mode === 'light'
              ? `linear-gradient(45deg, ${color[0]}, ${color[1]})`
              : `linear-gradient(45deg, ${color[2]}, ${color[3]})`,
            borderRadius: '4px',
          }}
        />
      </Box>
    </Box>
  );
};

export default SkillBar;
