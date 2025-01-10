import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar >
        <div style={{width:"100%", display:'flex', justifyContent:"space-between", justifyItems:"center" }}>
          <Typography variant="h6" >
            FAST Diagram Tool
          </Typography>

          <div>
          <Link href="/" underline="none" color="inherit" style={{ margin: '0 10px' }}>
              Home
            </Link>
            <Link href="/pricing" underline="none" color="inherit" style={{ margin: '0 10px' }}>
              Pricing
            </Link>
            <Link href="/about" underline="none" color="inherit" style={{ margin: '0 10px' }}>
              About Us
            </Link>
            <Link href="/contact" underline="none" color="inherit" style={{ margin: '0 10px' }}>
              Contact
            </Link>
            <Link href="/privacy" underline="none" color="inherit" style={{ margin: '0 10px' }}>
              Privacy Policy
            </Link>
          </div>

          <div>
            <Link href="/register" underline="none">
              <Button variant="contained" color="primary">
                Sign Up
              </Button>
            </Link>
            <Link href="/login" underline="none">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
