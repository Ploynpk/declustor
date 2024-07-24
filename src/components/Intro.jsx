import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { keyframes } from '@emotion/react';
import dashboard from '../assets/dashboard.gif';

// Keyframe animation for typing effect
const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 60%;
  }
`;

// Keyframe animation for cursor effect
const cursorBlink = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
`;

const Intro = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Align content to the top
        alignItems: 'center',
        textAlign: 'center',
        px: 3,
        background: 'linear-gradient(to bottom right, #e0c3fc, #8ec5fc)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant='h2'
        component='h1'
        sx={{
          fontSize: '6rem',
          fontWeight: 'bold',
          color: '#fff',
          mb: 3,
          position: 'relative',
          display: 'inline-block',
          overflow: 'hidden',
          '&::before': {
            content: '"Welcome to"',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            fontSize: '6rem',
            fontWeight: 'bold',
            color: 'rgba(0, 0, 0, 0.3)', // Light paint effect color
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', // Paint stroke shadow effect
            transform: 'rotate(-2deg)', // Slight rotation for a more hand-painted feel
          },
        }}
      >
        Welcome to
        <Box
          component='span'
          sx={{
            display: 'inline-block',
            ml: 2,
            fontSize: '6rem',
            fontWeight: 'bold',
            color: '#fff',
            position: 'relative',
            zIndex: 1,
            '&::before': {
              content: '"DeClustor"',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -1,
              fontSize: '6rem',
              fontWeight: 'bold',
              color: '#fff',
              background: 'linear-gradient(45deg, #a2c2e2, #b4a6e5)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0px 0px 5px rgba(0, 0, 0, 0.8)', // Optional: additional shadow for depth
              animation: `${typing} 8s steps(40, end), ${cursorBlink} 1s step-end infinite`,
            },
          }}
        >
          DeClustor
        </Box>
      </Typography>
      <Typography
        variant='h5'
        component='h2'
        sx={{
          fontSize: '2rem',
          color: '#fff',
          mb: 4,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          borderRight: '2px solid white',
          animation: `${typing} 8s steps(40, end), ${cursorBlink} 1s step-end infinite`,
          display: 'inline-block',
          width: 'fit-content',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
            zIndex: -1,
            transform: 'translateY(-50%)', // Centered vertically
            filter: 'blur(5px)', // Blurring effect to create a paint stroke feel
          },
        }}
      >
        Your centralized solution for monitoring and managing AWS ECS Clusters.
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Button
          variant='contained'
          color='secondary'
          size='large'
          href='https://github.com/oslabs-beta/DeClustor'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn More
        </Button>
      </Box>
      <Box
        component='img'
        src={dashboard}
        alt='Dashboard'
        sx={{
          width: '90%', // Increase width of the GIF
          maxWidth: '1000px', // Increase maxWidth of the GIF
          borderRadius: '8px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      />
    </Box>
  );
};

export default Intro;
