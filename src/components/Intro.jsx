import React from 'react'
import {
  Container,
  Box,
  Typography,
  Grid,
  useTheme,
  Button
} from '@mui/material'
import { keyframes } from '@emotion/react'
import dashboard from '../assets/dashboard.gif'

const spin = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  50.1% {
    transform: rotateY(180deg) rotateY(0deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`

const Intro = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        py: 2,
        px: 2,
      }}
    >
      
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              gutterBottom
              color={theme.palette.secondary[100]}
              sx={{ fontWeight: 'bold', lineHeight: 1.5 }}
            >
              Welcome to DeClustor
              <br />
              your centralized solution for
              <br />
              Monitoring and Managing
              <br />
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  color: theme.palette.secondary[400],
                }}
              >
                AWS ECS Clusters
              </Typography>
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              color={theme.palette.secondary[100]}
              sx={{ mt: 2, lineHeight: 1.8 }}
            >
              Experience a user-friendly dashboard, Track metrics and
              <br />
              Real-time performance across various services and clusters seamlessly
              <br />
            </Typography>
            <Box sx={{ mt: 4 }}>
              <a
                href="https://github.com/oslabs-beta/DeClustor"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  Learn More
                </Button>
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center', perspective: 1000 }}>
              <Box
                component="img"
                src={dashboard}
                alt="Dashboard"
                sx={{
                  width: '150%', 
                  maxWidth: '600px', 
                  // boxShadow: '0px 2px 0px 20px rgba(1, 27, 0, 0.5)',
                  boxShadow: '0px 40px 50px rgba(2, 27, 0, 0.5)', 
                  borderRadius: 2,
                  animation: `${spin} 3s forwards`,
                  transformStyle: 'preserve-3d',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Intro

