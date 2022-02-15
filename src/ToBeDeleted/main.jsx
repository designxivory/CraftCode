/**
 * Main component for QBO app
 */

 import React from 'react';
 import './project-page.css';
 //import { Link } from "react-router-dom";
 
 export const Main = () => {
 
    const navBar = (
        <div id="navbar">
            <div id="hamburgerMenu">
                    {/* <FiMenu style={{ color: "#7b7b7b", width: "30px", height: "30px" }} /> */}
            </div>
            <div id="sampleText">Sample Company</div>
            <div id="myExperts"></div>
            <div id="help"></div>
            <div id="search"></div>
            <div id="bell"></div>
            <div id="gear"></div>
            <div id="thingy"></div> 
        </div>
    );

    //const

    return (
         //TODO: add in id, add in class
        <div id="mainContainer">
                <div>{navBar}</div>
            <div id="projectSection"></div>

        </div>
     );
 };
 
 