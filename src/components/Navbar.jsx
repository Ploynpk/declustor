import React from 'react'
import { useTheme } from '@emotion/react'
import { Box, IconButton, Tooltip } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setMode } from '../redux/globalSlice.js'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X'
import FlexBetween from './FlexBetween.jsx'
import nobglogo from '../assets/nobglogo.png'

const Navbar = () => {
  const dispatch = useDispatch()
  const theme = useTheme()

  return (
    // flex setting
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
    >
      {/* logo on the left side */}
      <Box
        component="img"
        alt="logo"
        src={nobglogo}
        height="100px"
        width="100px"
        borderRadius="28%"
        sx={{
          objectFit: 'cover',
          borderColor: theme.palette.primary[400],
          borderStyle: 'solid',
          borderWidth: 1,
          marginLeft: '47px',
          padding: '5px',
          cursor: 'pointer',
        }}
      />

      <Box flexGrow={1}></Box>
      <FlexBetween gap="1.5rem">
        {/* github icon button */}
        <Tooltip title="GitHub">
          <IconButton
            component="a"
            href="https://github.com/oslabs-beta/DeClustor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>

        {/* linkedin icon button */}
        <Tooltip title="LinkedIn">
          <IconButton
            component="a"
            href="https://www.linkedin.com/company/declustor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>

        {/* twitter icon button */}
        <Tooltip title="X">
          <IconButton
            component="a"
            href="https://x.com/declustor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon />
          </IconButton>
        </Tooltip>

        {/* mode setting button icon*/}
        <IconButton
          onClick={() => dispatch(setMode())}
          sx={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ml: 'auto',
          }}
        >
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon sx={{ fontSize: '25px' }} />
          ) : (
            <LightModeOutlinedIcon sx={{ fontSize: '25px' }} />
          )}
        </IconButton>
      </FlexBetween>
    </Box>
  )
}

export default Navbar
