import React, { useState } from 'react'
import {
  Container,
  Box,
  Typography,
  Grid,
  useTheme,
  Link,
  Button,
} from '@mui/material'
import { keyframes } from '@emotion/react'
import piepic from '../assets/pie.png'
import logs from '../assets/2721273.png'
import docs from '../assets/831842.png'
import bell from '../assets/notification.png'
import linepic from '../assets/line.png'
import dc from '../assets/dc.jpg'

const circularMotion = keyframes`
  0% {
    transform: rotate(0deg) translateX(120px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(120px) rotate(-360deg);
  }
`

const Docker = () => {
  const theme = useTheme()
  const [copyText, setCopyText] = useState('Copy')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard
      .writeText('docker pull declustorteam/declustor')
      .then(() => {
        setCopyText('Copied!')
        setCopied(true)
        setTimeout(() => {
          setCopyText('Copy')
          setCopied(false)
        }, 2000)
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err)
      })
  }

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        py: 15,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center">
              <Link
                href="https://hub.docker.com/r/declustorteam/declustor"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: 'inline-block', mr: 1 }}
              >
                <Box
                  component="img"
                  src={dc}
                  alt="DockerHub"
                  sx={{
                    width: '80px',
                    height: '65px',
                    borderRadius: '50%',
                    backgroundColor: 'transparent',
                    boxShadow: 1,
                  }}
                />
              </Link>
              <Typography
                variant="h3"
                gutterBottom
                color={theme.palette.secondary[100]}
                sx={{ fontWeight: 'bold', lineHeight: 1.5 }}
              >
                Ready to Begin? <br />
                <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    fontWeight: 'bold',
                    color: '#0db7ed',
                  }}
                >
                  dockerhub
                </Typography>
              </Typography>
            </Box>
            <Typography variant="h3" paragraph sx={{ mt: 3 }}>
              Docker Pull command
            </Typography>
            <Box
              sx={{
                mt: 2,
                p: 2,
                backgroundColor: '#ffffff',
                borderRadius: 1,
                boxShadow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'monospace',
                  fontSize: '1.25rem',
                  color: '#000000',
                }}
              >
                docker pull declustorteam/declustor
              </Typography>
              <Button
                variant="contained"
                onClick={handleCopy}
                sx={{
                  ml: 2,
                  backgroundColor: copied ? 'green' : 'rgb(29, 99, 237)',
                  '&:hover': {
                    backgroundColor: copied ? 'darkgreen' : 'rgb(29, 99, 237)',
                  },
                }}
              >
                {copyText}
              </Button>
            </Box>
            <Typography variant="body1" paragraph sx={{ mt: 3 }}>
              Follow our step-by-step installation on{' '}
              <Link
                href="https://github.com/oslabs-beta/DeClustor"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#000000',
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                }}
              >
                GitHub
              </Link>
              .
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: '300px',
                height: '300px',
                margin: '0 auto',
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {[piepic, logs, docs, bell, linepic].map((src, index) => (
                <Box
                  key={index}
                  component="img"
                  src={src}
                  alt={`image-${index}`}
                  sx={{
                    position: 'absolute',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    animation: `${circularMotion} 10s linear infinite`,
                    animationDelay: `${index * 2}s`,
                    transformOrigin: 'center',
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Docker
