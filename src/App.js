import React, { useMemo } from 'react'
import { themeSettings } from '../theme'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import { CssBaseline, ThemeProvider, Box } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import Layout from './pages/Layout'
import Footer from './components/Footer.jsx'
import Feedback from './components/Feedback.jsx'
import Team from './components/Team.jsx'
import Intro from './components/Intro.jsx'
import Navbar from './components/Navbar.jsx'
import Cards from './components/Cards.jsx'
import Features from './components/Features.jsx'
import Docker from './components/Docker.jsx'

const App = () => {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Navbar />
            <Intro />
            <Cards />
            <Features />
            <Docker />
            <Routes>
              <Route element={<Layout />}>
                {/* <Route path="/" element={<Home />} /> */}
              </Route>
            </Routes>
            <Team />
          </Box>
          <Feedback />
          <Footer sx={{ mt: 'auto' }} />
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
