import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Navbar } from './components/components/navbar';
import Home from './components/pages/home';
import DefaultTheme from './theme/DefaultTheme';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
