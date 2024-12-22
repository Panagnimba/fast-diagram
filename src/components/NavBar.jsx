import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          FAST Diagram Tool
        </Typography>
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
