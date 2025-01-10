import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <AppBar position="static" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar style={{ justifyContent: 'center' }}>
        <Typography variant="body2" style={{ textAlign: 'center' }}>
          © {new Date().getFullYear()} FAST Diagram Tool. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
