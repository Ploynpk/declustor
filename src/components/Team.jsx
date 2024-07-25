import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  useTheme,
  Button,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import grace from '../assets/grace.png';
import aria from '../assets/aria.png';
import will from '../assets/will.png';
import ploy from '../assets/ploy.png';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const teamMembers = [
  {
    name: 'Grace Lo',
    img: grace,
    linkedin: 'https://www.linkedin.com/in/gracelo0717/',
  },
  {
    name: 'Aria Liang',
    img: aria,
    linkedin: 'https://www.linkedin.com/in/arialiang/',
  },
  {
    name: 'Will Di',
    img: will,
    linkedin: 'https://www.linkedin.com/in/will-di/',
  },
  {
    name: 'Ploynapa Yang',
    img: ploy,
    linkedin: 'https://www.linkedin.com/in/ploynapa-py/',
  },
];

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Team = () => {
  const theme = useTheme();
  const avatarRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    avatarRefs.current.forEach((avatar) => {
      if (avatar) {
        observer.observe(avatar);
        avatar.style.animationPlayState = 'paused';
      }
    });

    return () => {
      avatarRefs.current.forEach((avatar) => {
        if (avatar) {
          observer.unobserve(avatar);
        }
      });
    };
  }, []);

  return (
    <Box
      sx={{
        py: 8,
        pt: 15,
        pb: 15,
        backgroundColor: theme.palette.background.default,
        borderRadius: '8px',
        border: `1px solid ${theme.palette.grey[300]}`,
        textAlign: 'center',
      }}
    >
      <Container maxWidth='lg'>
        <Typography
          variant='h1'
          fontWeight='bold'
          gutterBottom
          // color='#fff'
          sx={{ mb: 3 ,
            background: 'linear-gradient(45deg, #72A0C1 ,#827bb4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',}}
        >
          MEET OUR TEAM
        </Typography>
        <Typography
          variant='h3'
          gutterBottom
          color={theme.palette.secondary[100]}
          lineHeight={1.8}
          sx={{ mb: 4 }}
        >
          Need help with installation, find a bug, or just need a clarification
          about our tool?
          <br /> We're here to lend a helping hand.
        </Typography>
        <Button
          variant='contained'
          color='secondary'
          sx={{
            mb: 4,
            backgroundColor: theme.palette.secondary.main,
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: theme.palette.secondary[300],
            },
          }}
          startIcon={<MailOutlineIcon />}
          onClick={() => (window.location.href = 'mailto:declustor@gmail.com')}
        >
          Contact Us
        </Button>
        <Grid container spacing={4} justifyContent='center'>
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <a
                href={member.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  textDecoration: 'none',
                }}
              >
                <Avatar
                  ref={(el) => (avatarRefs.current[index] = el)}
                  src={member.img}
                  alt={member.name}
                  sx={{
                    width: 150, // Increased size
                    height: 150, // Increased size
                    mx: 'auto',
                    mb: 2,
                    animation: `${slideUp} 0.5s ease-in-out forwards`,
                    animationDelay: `${index * 0.2}s`,
                    opacity: 0,
                    boxShadow: `0 4px 8px ${theme.palette.grey[500]}`,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: `0 6px 12px ${theme.palette.grey[700]}`,
                    },
                  }}
                />
              </a>
              <Typography
                variant='h3'
                sx={{
                  // color: theme.palette.secondary[100],
                  background: 'linear-gradient(45deg,#827bb4, #72A0C1 )',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                {member.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
