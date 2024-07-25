import React from 'react';
import { useTheme } from '@emotion/react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setMode } from '../redux/globalSlice.js';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FlexBetween from './FlexBetween.jsx';
import nobglogo from '../assets/nobglogo.png';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        height: '120px',
        backgroundColor: theme.palette.background.default,
        padding: '0 16px',
      }}
    >
      {/* logo on the left side */}
      <Box
        component='img'
        alt='logo'
        src={nobglogo}
        height='100px'
        width='100px'
        sx={{
          objectFit: 'contain',
          borderColor: theme.palette.primary[400],
          // borderStyle: 'solid',
          // borderWidth: 1,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
      />

      <Box flexGrow={1}></Box>
      <FlexBetween gap='1.5rem'>
        {' '}
        {/* Adjust gap between icons */}
        {/* GitHub icon button */}
        <Tooltip title='GitHub'>
          <IconButton
            component='a'
            href='https://github.com/oslabs-beta/DeClustor'
            target='_blank'
            rel='noopener noreferrer'
            sx={{
              fontSize: '20px',
            }}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        {/* LinkedIn icon button */}
        <Tooltip title='LinkedIn'>
          <IconButton
            component='a'
            href='https://www.linkedin.com/company/declustor/'
            target='_blank'
            rel='noopener noreferrer'
            sx={{
              fontSize: '20px',
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        {/* X icon button */}
        <Tooltip title='X'>
          <IconButton
            component='a'
            href='https://x.com/declustor'
            target='_blank'
            rel='noopener noreferrer'
            sx={{
              fontSize: '20px',
            }}
          >
            <XIcon />
          </IconButton>
        </Tooltip>
        {/* Mode setting button icon */}
        <IconButton
          onClick={() => dispatch(setMode())}
          sx={{
            borderRadius: '50%',
            width: '50px', // Increase button size
            height: '50px', // Increase button size
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ml: 'auto',
          }}
        >
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon sx={{ fontSize: '24px' }} />
          ) : (
            <LightModeOutlinedIcon sx={{ fontSize: '24px' }} />
          )}
        </IconButton>
      </FlexBetween>
    </Box>
  );
};

export default Navbar;
