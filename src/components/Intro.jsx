import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { keyframes } from '@emotion/react';
import dashboard from '../assets/dashboard.gif';
import cloud from '../assets/cloud.png';

// Keyframe animation for typing effect
const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
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

// Keyframe animation for floating clouds
const float = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0);
  }
`;

const Intro = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 3,
        pt: { xs: 8, sm: 10, md: 12 }, // Adjust padding top for Navbar
        background: 'linear-gradient(to bottom right, #e0c3fc, #8ec5fc)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Clouds */}
      <Box
        component='img'
        src={cloud}
        alt='Cloud 1'
        sx={{
          position: 'absolute',
          top: '10%',
          left: '4%',
          width: '15%',
          animation: `${float} 20s linear infinite`,
        }}
      />
      <Box
        component='img'
        src={cloud}
        alt='Cloud 2'
        sx={{
          position: 'absolute',
          top: '11%',
          left: '7%',
          width: '18%',
          animation: `${float} 20s linear infinite`,
        }}
      />
      <Box
        component='img'
        src={cloud}
        alt='Cloud 3'
        sx={{
          position: 'absolute',
          top: '0%',
          right: '5%',
          width: '20%',
          animation: `${float} 25s linear infinite`,
        }}
      />

      <Box sx={{ mb: 2, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', whiteSpace: 'nowrap' }}>
        <Typography
          variant='h2'
          component='h1'
          sx={{
            fontSize: { xs: '3rem', sm: '4rem', md: '6rem' },
            fontWeight: 'bold',
            color: '#F0F8FF',
            display: 'inline-block',
            marginRight: { xs: 1, md: 2 },
          }}
        >
          Welcome to
        </Typography>
        <Typography
          variant='h2'
          component='h1'
          sx={{
            fontSize: { xs: '3rem', sm: '4rem', md: '6rem' },
            fontWeight: 'bold',
            color: '#fff',
            display: 'inline-block',
            background: 'linear-gradient(45deg, #827bb4, #a2c2f9)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: `${typing} 8s steps(40, end), ${cursorBlink} 1s step-end infinite`,
          }}
        >
          DeClustor
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography
          variant='h5'
          component='h2'
          sx={{
            fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
            color: '#F0F8FF',
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
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: -1,
              transform: 'translateY(-50%)',
              filter: 'blur(5px)',
            },
          }}
        >
          Your centralized solution for monitoring and managing AWS ECS Clusters.
        </Typography>
      </Box>

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
          width: '90%',
          maxWidth: '1000px',
          borderRadius: '8px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      />
    </Box>
  );
};

export default Intro;
