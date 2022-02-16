/**
 * Main component that handles routing and rendering SubscribePopUpAnnouncement, TopNavBar,
 * and LeftSideBar components
 */

import React from 'react';
import  { SubscribePopUpAnnouncement } from './nav-components/SubscribePopUpAnnouncement';
import { TopNavBar } from './nav-components/TopNavBar'
import { LeftSideBar } from './nav-components/LeftSideBar'
import { Redirect, Routes, Route } from 'react-router-dom';
import ProjectPage  from './project-page/project-page';
import ProjectDetailsPage from './project-details-page/project-details-page';
import './App.css';

//SubscribePopUpAnnouncement = subscribe pop-up announcement
//TopNavBar = Sample Company bar
//LeftSideBar = left sidebar

//rename to Layout
const Layout = () => {

  return ( 
    <>
    {/* subscribePopUpAnnouncement */}
    <SubscribePopUpAnnouncement />

    {/* left sidebar */ }
    <LeftSideBar />

    {/* sampleCompanyBar */ }
    <TopNavBar />
      
    <Routes>
      <Route exact path='/' element={<ProjectPage />}></Route>
      <Route exact path='/projectdetails' element={<ProjectDetailsPage />}></Route>
      {/* <Redirect to="/" /> */}
    </Routes>
    </>
  );
}

export default Layout;