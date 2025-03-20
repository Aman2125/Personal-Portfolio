import React, { useState } from 'react';
import { Box, Container, Typography, Grid, useTheme, Chip, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import ProjectCaseStudy from '../components/ProjectCaseStudy';

const ProjectCard = ({ project, index }) => {
  const theme = useTheme();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 100);
    y.set(yPct * 100);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        perspective: 2000,
      }}
    >
      <motion.div
        style={{
          x,
          y,
          rotateX,
          rotateY,
          z: 100,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.8,
          velocity: 0.5
        }}
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
            overflow: 'hidden',
            boxShadow: theme.palette.mode === 'light'
              ? '0 4px 30px rgba(0, 0, 0, 0.1)'
              : '0 4px 30px rgba(0, 0, 0, 0.3)',
            border: '1px solid',
            borderColor: theme.palette.mode === 'light'
              ? 'rgba(255, 255, 255, 0.3)'
              : 'rgba(255, 255, 255, 0.1)',
            position: 'relative',
            transformStyle: 'preserve-3d',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #2196f3, #f50057)',
            }}
          />
          
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Box>
              <IconButton
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ mr: 1 }}
              >
                <GitHubIcon />
              </IconButton>
              {project.demo && (
                <IconButton
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                >
                  <LaunchIcon />
                </IconButton>
              )}
            </Box>
          </Box>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            {project.title}
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            {project.description}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
            {project.technologies.map((tech, i) => (
              <Chip
                key={i}
                label={tech}
                size="small"
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
            ))}
          </Box>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `radial-gradient(circle at ${x.get()}px ${y.get()}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                  pointerEvents: 'none',
                }}
              />
            )}
          </AnimatePresence>
        </Box>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
     title: "Indian Recipe Finder",
description: "A modern web application built with React and Vite to help users explore and discover authentic Indian recipes. Whether you're a seasoned chef or a cooking enthusiast, this app makes it easy to find and prepare your favorite Indian dishes.",
image: "/recipe_finder.jpg",
github: "https://github.com/Aman2125/Indian_recipe_finder",
demo: "https://aman2125.github.io/Indian_recipe_finder/",
technologies: ["React", "Vite", "CSS", "JavaScript"],
keyFeatures: ["Search Recipes", "Category Filters", "Detailed Instructions", "Modern UI", "Responsive Design", "API Integration"],
problemStatement: "Finding authentic Indian recipes online can be challenging due to scattered resources and inconsistent instructions. This application provides a centralized platform for discovering and preparing Indian dishes easily.",
approach: "Developed a React-based solution using Vite for optimized performance. Implemented a clean and intuitive UI with responsive design principles. Integrated a recipe API to fetch real-time data and ensure fresh content.",
implementation: "Built using component-based development for modularity and maintainability. Used CSS for custom styling and API fetch calls for real-time recipe updates. Optimized search functionality for quick and accurate results.",
challenges: "Ensuring fast performance while handling API calls, designing an intuitive user interface, and maintaining an engaging user experience across different devices.",
results: "Successfully developed a feature-rich recipe finder that allows users to seamlessly search, filter, and explore authentic Indian recipes with a modern and responsive interface.",

},
    {title: "Quiz and Games Website",
      description: "An interactive platform designed for fun and learning! Built with React and TypeScript, this project offers a variety of quizzes and exciting mini-games. Users can enjoy real-time score tracking, themed UI options, and a responsive design for seamless gameplay.",
      image: "/quiz_games.jpg",
      github: "https://github.com/Aman2125/Quiz_and_Games",
      demo: "https://aman2125.github.io/Quiz_and_Games/",
      technologies: ["React", "TypeScript", "CSS", "JavaScript"],
      keyFeatures: ["Mini-Games", "Scoreboard", "Quiz Timer", "Login and Signup", "Dark and Light Mode", "Daily Challenges"],
      problemStatement: "Finding a single platform that offers both engaging quizzes and mini-games with real-time tracking and personalized experiences can be challenging. This project aims to provide an enjoyable and educational space for users.",
      approach: "Developed a React and TypeScript-based solution with a modular component structure. Implemented secure login/signup features and a dynamic scoreboard. Designed a modern UI with theme-switching capabilities.",
      implementation: "Utilized React components for seamless gameplay and quiz interactions. Integrated a real-time scoreboard to track user progress. Applied responsive design principles for smooth performance across devices.",
      challenges: "Ensuring smooth gameplay mechanics, optimizing real-time score tracking, and implementing an intuitive yet engaging UI for both quizzes and games.",
      results: "Successfully created an engaging and feature-rich platform where users can test their knowledge, play mini-games, and track their progress in a fun and interactive way.",
    },
    {
      title: "Todo and Journal",
       description: "A lightweight and intuitive web application designed to help users manage daily tasks and journal their thoughts effortlessly. Built with HTML, CSS, and JavaScript, it features a simple UI with seamless functionality for productivity and reflection.",
       image: "/todo_journal.jpg",
       gitHub: "https://github.com/Aman2125/Todo-and-Journal",
       demo: "https://your-todo-journal.com",
       technologies: ["HTML", "CSS", "JavaScript"],
       keyFeatures: ["Todo List", "Journaling Page", "Calendar View", "Signup and Login", "Contact Page", "Local Storage", "Simple UI"],
       problemStatement: "Managing tasks and journaling thoughts efficiently in a distraction-free environment can be difficult. This project aims to provide a minimal yet effective solution.",
       approach: "Designed a browser-based solution with a clean UI for task management and journaling. Integrated local storage for data persistence and added authentication for secure access.",
       implementation: "Developed an interactive todo list with task editing and completion tracking. Implemented a journaling page, calendar view, and secure authentication system using JavaScript.",
       challenges: "Ensuring seamless user experience, managing local storage efficiently, and providing a responsive layout for various devices.",
       results: "Created a feature-rich yet lightweight application that allows users to organize tasks and document thoughts efficiently, enhancing productivity and mindfulness.",
    },
    {
      title: "Modern Portfolio Website",
      description: "A sleek and interactive portfolio website built with react.js and material-ui, featuring a modern ui, smooth animations, and responsive design for showcasing projects and skills effectively.",
      image: "/portfolio.jpg",
      github: "https://github.com/Aman2125/Personal-Portfolio",
      demo: "https://your-portfolio.com",
      technologies: ["React.js", "Material-UI", "Framer Motion", "JavaScript", "CSS"],
      keyFeatures: ["Interactive ui", "Project showcase", "Skills visualization", "Dark/Light mode", "Smooth animations", "Responsive design"],
      problemStatement: "Creating an engaging and professional online presence to showcase projects, skills, and experience efficiently while maintaining a visually appealing design.",
      approach: "Built a react-based interactive portfolio with material-ui for consistency, framer motion for animations, and a fully responsive layout to enhance user experience.",
      implementation: "Designed modular react components, integrated smooth animations for ui elements, implemented a project showcase with stepper navigation, and ensured accessibility across devices.",
      challenges: "Optimizing animations for performance, designing an intuitive yet stylish ui, and ensuring responsiveness across all screen sizes.",
      results: "Developed a polished, feature-rich portfolio that effectively highlights skills, projects, and achievements while providing a seamless browsing experience."
    },
    {
      title: "Coal Mines Management",
description: "A Comprehensive Coal Mines Management System Built With React.js And Node.js, Designed To Digitalize Log Books, Enhance Safety Management, And Improve Operational Efficiency.",
image: "/coal_mines.jpg",
gitHub: "https://github.com/Aman2125/Coal_Mines_Management",
demo: "https://your-demo-link.com",
technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Material-UI"],
keyFeatures: ["Digital Log Books", "Safety Management", "Real-Time Monitoring", "User Authentication", "Data Visualization", "Responsive Design"],
problemStatement: "Modernizing Coal Mine Operations By Replacing Traditional Paper-Based Logs With A Digital System For Improved Safety, Compliance, And Efficiency.",
approach: "Developed A Full-Stack Solution Using React.js For The Frontend, Node.js With Express.js For The Backend, And MongoDB For Efficient Data Management.",
implementation: "Built An Interactive UI With Material-UI, Integrated Real-Time Monitoring Features, Implemented Secure User Authentication, And Ensured Seamless Data Visualization.",
challenges: "Handling Large-Scale Data Efficiently, Implementing Real-Time Updates For Monitoring, And Ensuring Compliance With Safety Regulations.",
results: "Created A Robust And User-Friendly System That Streamlines Coal Mine Management, Enhances Safety Measures, And Improves Overall Productivity.",
    },
    {
      title: "Todo Dashboard",
      description: "A sleek and efficient todo dashboard built with react, vite, and typescript, offering seamless task management with features like task creation, editing, deletion, tracking and many more features.",
      image: "/todo_dashboard.jpg",
      github: "https://github.com/Aman2125/To_Do_Dashboard",
      demo: "https://your-todo-dashboard.com",
      technologies: ["React", "Vite", "TypeScript", "CSS" , "HTML" , "JavaScript"],
      keyFeatures: ["Task creation", "task editing", "task deletion", "progress tracking", "modern ui", "optimized performance"],
      problemStatement: "Efficiently managing daily tasks while ensuring an intuitive and clutter-free user experience can be challenging. this app simplifies task tracking with a modern interface.",
      approach: "Developed using react for a dynamic ui, vite for fast development, and typescript for robust type safety. designed an intuitive dashboard for easy task management.",
      implementation: "Built reusable react components, integrated smooth ui interactions, implemented local storage for persistent data, and ensured optimal performance for all devices.",
      challenges: "Ensuring real-time updates for task status, optimizing performance for large task lists, and maintaining a clean yet functional ui.",
      results: "Created a high-performance, user-friendly task management app that enhances productivity and simplifies daily planning."
    }
    
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
          Featured Projects
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                onClick={() => setSelectedProject(project)}
                sx={{
                  p: 2,
                  height: '100%',
                  cursor: 'pointer',
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
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.palette.mode === 'light'
                      ? '0 8px 40px rgba(0, 0, 0, 0.15)'
                      : '0 8px 40px rgba(0, 0, 0, 0.5)',
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #2196f3, #f50057)',
                  }}
                />
                
                <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Box>
                    <IconButton
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{ mr: 1 }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    {project.demo && (
                      <IconButton
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        <LaunchIcon />
                      </IconButton>
                    )}
                  </Box>
                </Box>

                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  {project.title}
                </Typography>

                <Typography variant="body1" color="text.secondary" paragraph>
                  {project.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                  {project.technologies.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
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
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <ProjectCaseStudy
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </Container>
  );
};

export default Projects;
