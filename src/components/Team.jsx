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
import FeedbackIcon from '@mui/icons-material/Feedback';
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
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    avatarRefs.current.forEach(avatar => {
      if (avatar) {
        observer.observe(avatar);
        avatar.style.animationPlayState = 'paused';
      }
    });

    return () => {
      avatarRefs.current.forEach(avatar => {
        if (avatar) {
          observer.unobserve(avatar);
        }
      });
    };
  }, []);

  return (
    <Box
      sx={{
        py: 5,
        backgroundColor: 'background.secondary',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight='bold' gutterBottom color={theme.palette.secondary.main}>
          MEET OUR TEAM
        </Typography>
        <Typography variant="h4" gutterBottom color={theme.palette.secondary[100]} lineHeight={1.8} >
          Need help with installation, find a bug, or just need a clarification about our tool?<br/> We're here to lend a helping hand.
        </Typography>
        <Button
          variant='contained'
          color='primary'
          sx={{ mb: 4 }}
          startIcon={<MailOutlineIcon />}
          onClick={() => window.location.href = 'mailto:declustor@gmail.com'}
        >
          Contact Us
        </Button>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <Avatar
                  ref={el => avatarRefs.current[index] = el}
                  src={member.img}
                  alt={member.name}
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 2,
                    animation: `${slideUp} 0.5s ease-in-out forwards`,
                    animationDelay: `${index * 0.2}s`, 
                    opacity: 0, 
                  }}
                />
              </a>
              <Typography variant="h5" sx={{ color: theme.palette.secondary[100] }}>
                {member.name}
              </Typography>
              <Typography variant="body2">{member.role}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
