import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Navbar } from './components/components/navbar';
import Home from './components/pages/home';
import About from './components/pages/about';
import DefaultTheme from './theme/DefaultTheme';
import AppRouter from './components/pages';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Navbar />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
