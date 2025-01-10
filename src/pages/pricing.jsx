import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Button, Card, CardContent } from '@mui/material';

const PricingPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      title: 'Basic',
      price: '$9/month',
      features: [
        'Access to basic features',
        'Email support',
        'Community access',
      ],
    },
    {
      title: 'Pro',
      price: '$19/month',
      features: [
        'All Basic features',
        'Priority email support',
        'Advanced analytics',
        'Custom templates',
      ],
    },
    {
      title: 'Business',
      price: '$39/month',
      features: [
        'All Pro features',
        'Dedicated account manager',
        'Team collaboration tools',
        'Monthly performance reports',
      ],
    },
    {
      title: 'Enterprise',
      price: '$99/month',
      features: [
        'All Business features',
        'Custom integrations',
        '24/7 support',
        'Personalized onboarding',
      ],
    },
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: '80px', marginBottom: '20px', height:"1000px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Pricing Plans
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Choose the plan that’s right for you. Our pricing is flexible and designed to meet your needs.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {packages.map((pack, index) => (
          <Grid item xs={12} sm={6} md={3} key={pack.title}>
            <Card 
              variant="outlined" 
              style={{ 
                height: '100%', 
                cursor: 'pointer', 
                borderColor: selectedPackage === index ? '#3f51b5' : '#e0e0e0', 
                boxShadow: selectedPackage === index ? '0 4px 20px rgba(63, 81, 181, 0.2)' : '' 
              }}
              onClick={() => setSelectedPackage(index)}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {pack.title}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  {pack.price}
                </Typography>
                <Typography variant="body1" paragraph>
                  {pack.features.map((feature, featureIndex) => (
                    <Box key={featureIndex} component="li">
                      {feature}
                    </Box>
                  ))}
                </Typography>
                <Button variant="contained" color="primary">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PricingPage;
