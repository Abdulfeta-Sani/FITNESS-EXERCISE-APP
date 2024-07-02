
import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <h1>Fitness Exercise App!</h1>
      <Button variant="contained" color="primary">
        Button
      </Button>

      <Header />
      <HomePage />
    </div>

  );
}

export default App;
