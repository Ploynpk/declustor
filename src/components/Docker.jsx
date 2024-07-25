import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  useTheme,
  Link,
  Button,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import piepic from '../assets/pie.png';
import logs from '../assets/2721273.png';
import docs from '../assets/831842.png';
import bell from '../assets/notification.png';
import linepic from '../assets/line.png';
import dc from '../assets/dc.jpg';

// Circular motion for the ferris wheel
const circularMotion = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Docker = () => {
  const theme = useTheme();
  const [copyText, setCopyText] = useState('Copy');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText('docker pull declustorteam/declustor')
      .then(() => {
        setCopyText('Copied!');
        setCopied(true);
        setTimeout(() => {
          setCopyText('Copy');
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  const images = [piepic, logs, docs, bell, linepic];
  const numberOfImages = images.length;
  const angle = 360 / numberOfImages;
  const imageSize = 100;
  const radius = 150;

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        py: 20,
        // px: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        pb: 20,
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={4} alignItems='center' justifyContent='center'>
          <Grid item xs={12} md={6} container justifyContent='center'>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
              }}
            >
              <Link
                href='https://hub.docker.com/r/declustorteam/declustor'
                target='_blank'
                rel='noopener noreferrer'
                sx={{ display: 'inline-block', mb: 2 }}
              >
                <Box
                  component='img'
                  src={dc}
                  alt='DockerHub'
                  sx={{
                    width: '120px',
                    height: '90px',
                    borderRadius: '50%',
                    backgroundColor: 'transparent',
                    boxShadow: `0 4px 8px ${theme.palette.grey[600]}`,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
              </Link>
              <Typography
                variant='h3'
                gutterBottom
                color='white'
                sx={{
                  fontWeight: 'bold',
                  lineHeight: 1.5,
                  mb: 1,
                  fontSize: '2rem',
                }}
              >
                Ready to Begin? <br />
                <Typography
                  component='span'
                  variant='h2'
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '3rem',
                    color: '#8ec5fc',
                    textShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 20px ${theme.palette.primary.main}`,
                    transition: 'transform 0.3s ease, text-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      textShadow: `0 0 15px ${theme.palette.primary.main}, 0 0 30px ${theme.palette.primary.main}`,
                    },
                  }}
                >
                  dockerhub
                </Typography>
              </Typography>
              <Typography
                variant='h5'
                paragraph
                sx={{
                  mt: 2,
                  color: 'white',
                  maxWidth: '500px',
                  fontSize: '1.25rem',
                }}
              >
                Use the following command to pull the DeClustor image from
                DockerHub and get started quickly.
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 1,
                  boxShadow: `0 4px 8px ${theme.palette.grey[600]}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mx: 'auto',
                  maxWidth: '500px',
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    fontFamily: 'monospace',
                    fontSize: '1rem',
                    color: 'white',
                    whiteSpace: 'nowrap',
                    flexGrow: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  docker pull declustorteam/declustor
                </Typography>
                <Button
                  variant='contained'
                  onClick={handleCopy}
                  sx={{
                    ml: 2,
                    background: copied
                      ? 'linear-gradient(to right, #0db7ed, #8ec5fc)'
                      : 'linear-gradient(to right, #8ec5fc, #0db7ed)',
                    '&:hover': {
                      background: copied
                        ? 'linear-gradient(to right, #0db7ed, #8ec5fc)'
                        : 'linear-gradient(to right, #8ec5fc, #0db7ed)',
                    },
                    transition: 'background 0.3s ease',
                  }}
                >
                  {copyText}
                </Button>
              </Box>
              <Typography
                variant='body1'
                paragraph
                sx={{ mt: 3, color: 'white', fontSize: '1.25rem' }}
              >
                Follow our step-by-step installation on{' '}
                <Link
                  href='https://github.com/oslabs-beta/DeClustor'
                  target='_blank'
                  rel='noopener noreferrer'
                  sx={{
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    fontSize: '1.25rem',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  GitHub
                </Link>
                .
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} container justifyContent='center'>
            <Box
              sx={{
                position: 'relative',
                width: '320px',
                height: '320px',
                margin: '0 auto',
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: `${circularMotion} 10s linear infinite`,
              }}
            >
              {images.map((src, index) => (
                <Box
                  key={index}
                  component='img'
                  src={src}
                  alt={`image-${index}`}
                  sx={{
                    position: 'absolute',
                    width: `${imageSize}px`,
                    height: `${imageSize}px`,
                    borderRadius: '50%',
                    transform: `rotate(${
                      index * angle
                    }deg) translateX(${radius}px) rotate(-${index * angle}deg)`,
                    transformOrigin: 'center',
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Docker;
