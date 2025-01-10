import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const ContactUs = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph align="center">
        We would love to hear from you! If you have any questions or feedback about our FAST Diagram Tool, please fill out the form below or reach out to us directly.
      </Typography>

      <Box component="form" noValidate autoComplete="off" style={{ marginTop: '20px' }}>
        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Your Email"
          variant="outlined"
          margin="normal"
          type="email"
        />
        <TextField
          fullWidth
          label="Subject"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
        />
        
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Send Message
        </Button>
      </Box>

      <Typography variant="h5" align="center" gutterBottom style={{ marginTop: '40px' }}>
        Alternatively, you can reach us at:
      </Typography>
      
      <Typography variant="body1" align="center">
        Email: <a href="mailto:contact@fastdiagramtool.com">contact@fastdiagramtool.com</a>
      </Typography>
      <Typography variant="body1" align="center">
        Phone: +123 456 7890
      </Typography>
    </Container>
  );
};

export default ContactUs;