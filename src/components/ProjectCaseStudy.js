import React from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  useTheme,
  Chip,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Link,
  Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCaseStudy = ({ open, onClose, project }) => {
  const theme = useTheme();

  if (!project) return null;

  const steps = [
    {
      label: 'Problem Statement',
      description: project.problemStatement || 'No problem statement available.',
    },
    {
      label: 'Solution Approach',
      description: project.approach || 'No approach description available.',
    },
    {
      label: 'Technical Implementation',
      description: project.implementation || 'No implementation details available.',
    },
    {
      label: 'Challenges & Solutions',
      description: project.challenges || 'No challenges description available.',
    },
    {
      label: 'Results & Impact',
      description: project.results || 'No results available.',
    },
  ];

  return (
    <AnimatePresence>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        fullWidth
        scroll="paper"
        PaperProps={{
          sx: {
            borderRadius: 2,
            background: theme.palette.mode === 'light'
              ? 'rgba(255, 255, 255, 0.9)'
              : 'rgba(18, 18, 18, 0.9)',
            backdropFilter: 'blur(10px)',
            maxHeight: '90vh',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: theme.palette.mode === 'light'
                ? 'rgba(0, 0, 0, 0.2)'
                : 'rgba(255, 255, 255, 0.2)',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: theme.palette.mode === 'light'
                ? 'rgba(0, 0, 0, 0.3)'
                : 'rgba(255, 255, 255, 0.3)',
            },
          }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #2196f3, #f50057)',
              zIndex: 1,
            }
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: 'sticky',
              top: 8,
              right: 8,
              float: 'right',
              zIndex: 2,
              color: theme.palette.grey[500],
              background: theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.9)'
                : 'rgba(18, 18, 18, 0.9)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                background: theme.palette.mode === 'light'
                  ? 'rgba(0, 0, 0, 0.08)'
                  : 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <DialogContent sx={{ p: 4, pt: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mt: 1 }}>
                {project.title}
              </Typography>

              <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                >
                  <Chip
                    icon={<GitHubIcon />}
                    label="View Code"
                    clickable
                    sx={{
                      background: theme.palette.mode === 'light'
                        ? 'rgba(0, 0, 0, 0.08)'
                        : 'rgba(255, 255, 255, 0.08)',
                      '&:hover': {
                        background: theme.palette.mode === 'light'
                          ? 'rgba(0, 0, 0, 0.12)'
                          : 'rgba(255, 255, 255, 0.12)',
                      },
                    }}
                  />
                </Link>
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    <Chip
                      icon={<LaunchIcon />}
                      label="Live Demo"
                      clickable
                      sx={{
                        background: theme.palette.mode === 'light'
                          ? 'rgba(0, 0, 0, 0.08)'
                          : 'rgba(255, 255, 255, 0.08)',
                        '&:hover': {
                          background: theme.palette.mode === 'light'
                            ? 'rgba(0, 0, 0, 0.12)'
                            : 'rgba(255, 255, 255, 0.12)',
                        },
                      }}
                    />
                  </Link>
                )}
              </Box>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      background: theme.palette.mode === 'light'
                        ? 'rgba(0, 0, 0, 0.04)'
                        : 'rgba(255, 255, 255, 0.04)',
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Tech Stack
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          size="small"
                          sx={{
                            background: theme.palette.mode === 'light'
                              ? 'rgba(0, 0, 0, 0.08)'
                              : 'rgba(255, 255, 255, 0.08)',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      background: theme.palette.mode === 'light'
                        ? 'rgba(0, 0, 0, 0.04)'
                        : 'rgba(255, 255, 255, 0.04)',
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Key Features
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.keyFeatures?.map((feature, index) => (
                        <Chip
                          key={index}
                          label={feature}
                          size="small"
                          sx={{
                            background: theme.palette.mode === 'light'
                              ? 'rgba(0, 0, 0, 0.08)'
                              : 'rgba(255, 255, 255, 0.08)',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <Stepper orientation="vertical" sx={{ mt: 4 }}>
                {steps.map((step, index) => (
                  <Step key={step.label} active={true} expanded>
                    <StepLabel>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {step.label}
                      </Typography>
                    </StepLabel>
                    <StepContent>
                      <Typography 
                        variant="body1" 
                        color="text.secondary" 
                        sx={{ 
                          mt: 1, 
                          mb: 2,
                          whiteSpace: 'pre-wrap',
                          lineHeight: 1.6
                        }}
                      >
                        {step.description}
                      </Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </motion.div>
          </DialogContent>
        </Box>
      </Dialog>
    </AnimatePresence>
  );
};

export default ProjectCaseStudy;
