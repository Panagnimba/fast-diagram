import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph align="center">
        We are a group of final-year Computer Engineering students dedicated to developing innovative solutions that simplify complex tasks. Our latest project is the FAST Diagram Tool, designed to help users visualize and manage their ideas effectively.
      </Typography>

      <Typography variant="h5" align="center" gutterBottom>
        Meet the Team
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box border={1} borderRadius={2} padding={2} textAlign="center">
            <Typography variant="h6">Joshua Ouedraogo</Typography>
            <Typography variant="body2">Team Leader</Typography>
            <Typography variant="body2">Joshua is passionate about software engineering and project management.</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box border={1} borderRadius={2} padding={2} textAlign="center">
            <Typography variant="h6">Yacine Wahi</Typography>
            <Typography variant="body2">Lead Developer</Typography>
            <Typography variant="body2">Yacine specializes in backend development and database management.</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box border={1} borderRadius={2} padding={2} textAlign="center">
            <Typography variant="h6">El Qaous Abdelmourigh</Typography>
            <Typography variant="body2">Frontend Developer</Typography>
            <Typography variant="body2">El Qaous focuses on creating intuitive user interfaces and enhancing user experience.</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box border={1} borderRadius={2} padding={2} textAlign="center">
            <Typography variant="h6">Gourane Abderahmane</Typography>
            <Typography variant="body2">UI/UX Designer</Typography>
            <Typography variant="body2">Gourane is dedicated to designing engaging and user-friendly interfaces.</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box border={1} borderRadius={2} padding={2} textAlign="center">
            <Typography variant="h6">Saif Eddine</Typography>
            <Typography variant="body2">Quality Assurance Specialist</Typography>
            <Typography variant="body2">Saif ensures that our products meet the highest quality standards through rigorous testing.</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Typography variant="h5" align="center" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Our mission is to empower users with tools that enhance productivity and creativity. We believe that technology should be accessible and user-friendly, enabling everyone to turn their ideas into reality.
        </Typography>

        <Typography variant="h5" align="center" gutterBottom>
          Join Us on Our Journey
        </Typography>
        <Typography variant="body1" paragraph align="center">
          We are excited to share our journey with you. Stay connected with us through our website and social media channels as we continue to innovate and improve our products.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
