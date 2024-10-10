
import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          padding: 3,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Hockey Stat Tracker
        </Typography>
        <Typography variant="body1" align="center">
          This is a simple home page created using React and Material-UI.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
}

export default App;

