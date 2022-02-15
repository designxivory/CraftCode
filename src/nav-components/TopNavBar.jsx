/**
 * TopNavBar component for QBO app
 */

 import React from 'react';
 import './TopNavBar.css';
 import '../App.css';
 import { FiMenu } from "react-icons/fi";
 
 export const TopNavBar = () => {

   const navBar = (
      <div>
          <div id="top_nav_bar_menu">
             <FiMenu style={{ color: "#7b7b7b", width: "25px", height: "25px" }} />
          </div>
          <div id="top_nav_bar_sampleText">Sample Company</div>
          <div id="myExperts"></div>
          <div id="help"></div>
          <div id="search"></div>
          <div id="bell"></div>
          <div id="gear"></div>
          <div id="thingy"></div> 
      </div>
  );

  return (  
   <div className= "TopNavBar_container">{navBar}</div>
   );
    
 }