import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './about';
import Home from './home';

const Page: React.FC = () => {
  return (
    <div>
        <Routes>
            <Route path='/'>
                <Home />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
        </Routes>
    </div>
  )
}

export default Page;