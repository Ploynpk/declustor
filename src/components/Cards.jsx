import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import ecs from '../assets/ecss.png';
import docker from '../assets/docker2.png';
import ws from '../assets/ws.png';
import sqlite from '../assets/sqlite.png';
import redis from '../assets/redis.png';

const scrollHorizontally = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Cards = () => {
  const theme = useTheme();

  const cards = [
    {
      title: 'AWS ECS',
      image: ecs,
      description:
        'Fully managed container orchestration service that helps you easily deploy, manage, and scale containerized applications.',
    },
    {
      title: 'Docker',
      image: docker,
      description:
        'DeClustor is deployed with images to Docker Hub, ensuring seamless deployment and hassle-free environment management, allowing for smooth application execution.',
    },
    {
      title: 'WebSocket',
      image: ws,
      description:
        'Enables real-time updates of dashboards, and real-time notifications.',
    },
    {
      title: 'SQLite3',
      image: sqlite,
      description:
        'A lightweight, disk-based database that doesn’t require a separate server process, ideal for embedded applications and small-scale projects.',
    },
    {
      title: 'Redis',
      image: redis,
      description:
        'An in-memory data structure store, used as a database, cache, and message broker, known for its high performance and versatility.',
    },
  ];

  return (
    <Box
      sx={{ backgroundColor: theme.palette.background.default,
         pt: 13, 
         pb: 23 }}
    >
      <Typography
        variant='h3'
        component='h2'
        sx={{
          textAlign: 'center',
          mb: 4,
          color: '#fff',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'bold',
          fontSize: '3rem',
        }}
      >
        Technologies Used in Our Project
      </Typography>
      <Box
        sx={{
          overflow: 'hidden',
          position: 'center',
          width: '100%',
          height: 400,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: 'calc(200% + 40px)',
            animation: `${scrollHorizontally} 30s linear infinite`,
            '&:hover': {
              animationPlayState: 'paused',
            },
          }}
        >
          {[...cards, ...cards].map((card, index) => (
            <Box key={index} sx={{ display: 'flex', margin: '0 20px' }}>
              <Card
                sx={{
                  width: 300,
                  backgroundColor: '#f5f5f5',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  borderRadius: '12px',
                  transition:
                    'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  animation: `${fadeInUp} 0.8s ease-out ${
                    index * 0.2
                  }s forwards`,
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)',
                    backgroundColor: theme.palette.primary[100],
                  },
                }}
              >
                <CardActionArea
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <CardMedia
                    component='img'
                    height='140'
                    image={card.image}
                    alt={card.title}
                    sx={{
                      width: '100%',
                      height: '140px',
                      objectFit: 'cover',
                      borderTopLeftRadius: '12px',
                      borderTopRightRadius: '12px',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant='h5'
                      component='div'
                      sx={{
                        color: '#333',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant='body1'
                      color='text.secondary'
                      sx={{ color: '#666', fontSize: '1rem' }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
