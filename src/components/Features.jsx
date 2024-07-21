import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  useTheme,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import check from '../assets/check.jpg';
import Picture from './Picture';

const circularMotion = keyframes`
  0% {
    transform: rotate(0deg) translateX(120px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(120px) rotate(-360deg);
  }
`;

const Features = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        py: 10,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Picture />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ marginLeft: '60px' }}>
              <Typography
                variant="h3"
                gutterBottom
                color={theme.palette.secondary[100]}
                sx={{ fontWeight: 'bold', lineHeight: 1.5 }}
              >
                What is DeClustor? <br />
                <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.secondary[400],
                  }}
                >
                  Everything you need.
                </Typography>
              </Typography>
              <Box sx={{ mt: 2, lineHeight: 1.8 }}>
                <List>
                  {[
                    'Monitor multiple AWS accounts',
                    'Real-time metrics monitoring',
                    'Instant update notifications',
                    'Exporting table data',
                    'Enhanced security: runs locally',
                    'Convenient Signup and Login with Google and GitHub Accounts',
                  ].map((text, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Box
                          component="img"
                          src={check}
                          alt="check"
                          sx={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            backgroundColor: 'transparent',
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="h3">{text}</Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
