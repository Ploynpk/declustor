import React from 'react';
import { Box, Typography, Container ,useTheme } from '@mui/material';

const Footer = (props) => {
  const theme = useTheme();

  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        textAlign: 'center',
        backgroundColor: theme.palette.primary[700],
      }}
    >
      <Container maxWidth='sm'>
        <Typography variant='body2' sx={{
           background: 'linear-gradient(45deg, #002244 ,#827bb4)',
           WebkitBackgroundClip: 'text',
           WebkitTextFillColor: 'transparent',
        }}>
          DeClustor © {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
