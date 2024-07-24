import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';

import Layout from './pages/Layout';
import Footer from './components/Footer.jsx';
import Feedback from './components/Feedback.jsx';
import Team from './components/Team.jsx';
import Intro from './components/Intro.jsx';
import Navbar from './components/Navbar.jsx';
import Cards from './components/Cards.jsx';
import Features from './components/Features.jsx';
import Docker from './components/Docker.jsx';
import { themeSettings } from '../theme';

const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = createTheme(themeSettings(mode));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: theme.palette.background.gradient,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            overflow: 'hidden',
            p: 0,
            m: 0,
          }}
        >
          <Navbar />
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Intro />
            <Cards />
            <Features />
            <Docker />
            <Routes>
              <Route element={<Layout />}>{/* Your routes here */}</Route>
            </Routes>
          </Box>
          <Team />
          <Feedback />
          <Footer sx={{ mt: 'auto' }} />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
