import React , { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Navbar from '../components/Navbar.jsx';

const Layout = () => {
  // check the screen// if it's a mobile or not
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  // responsive to mobile or computer size 

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%'>
      <Box flexGrow={1}> 
        <Navbar />
      </Box>
    </Box>
  );
  
};

export default Layout;
