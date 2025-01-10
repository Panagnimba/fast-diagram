import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Privacy Policy
      </Typography>

      <Typography variant="body1" paragraph>
        At FAST Diagram Tool, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our application.
      </Typography>

      <Box mt={2}>
        <Typography variant="h6">Information We Collect</Typography>
        <Typography variant="body1" paragraph>
          We may collect personal information from you when you register on our site or use our services. This information may include:
        </Typography>
        <ul>
          <li>Your name</li>
          <li>Email address</li>
          <li>Contact information</li>
          <li>Any other details you provide us with</li>
        </ul>
      </Box>

      <Box mt={2}>
        <Typography variant="h6">How We Use Your Information</Typography>
        <Typography variant="body1" paragraph>
          The information we collect may be used in the following ways:
        </Typography>
        <ul>
          <li>To improve customer service and respond to your requests.</li>
          <li>To personalize user experience and improve our application.</li>
          <li>To send periodic emails regarding your order or other products and services.</li>
          <li>To process transactions efficiently.</li>
        </ul>
      </Box>

      <Box mt={2}>
        <Typography variant="h6">Data Protection</Typography>
        <Typography variant="body1" paragraph>
          We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6">Third-Party Services</Typography>
        <Typography variant="body1" paragraph>
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website or conducting our business.
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6">Your Consent</Typography>
        <Typography variant="body1" paragraph>
          By using our application, you consent to our Privacy Policy.
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6">Changes to Our Privacy Policy</Typography>
        <Typography variant="body1" paragraph>
          We may update this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="body1" align="center">
          If you have any questions about this Privacy Policy, please contact us at: 
          <a href="mailto:contact@fastdiagramtool.com"> contact@fastdiagramtool.com</a>.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
