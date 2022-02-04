import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Landing';
import Project from './ProjectDetails';

const Main = () => {
  return ( 
    <Routes>
      <Route exact path='/' element={<LandingPage />}></Route>
      <Route exact path='/projectdetails' element={<Project />}></Route>
    </Routes>
  );
}

export default Main;