/**
 * LeftSideBar component for QBO app
 */

 import React from 'react';
 import './LeftSideBar.css';
 import '../App.css';
 //each component should have it's own css file
 //import './TopNavBar.css';
 //import { Link } from "react-router-dom";
 
 export const LeftSideBar= () => {

    return(

        <div className= "sidebar">
                    <div>
                        <img src={require("./intuitIcon.png")} alt="Intuit Icon" id="intuit_mini_icon"></img>
                        <div id="titleBox">
                            <p>Intuit</p>
                            <h3>quickbooks</h3>
                        </div>
                    </div>
                    <div className="Buttons" id="newButton">
                        <span id = "plusSign">+</span> <span id="wordNew">New</span>
                    </div>
                    <div id="sideMenu">
                        {itemData.map((item, idx) => (
                            <div key={idx} id={idx} className="menuItems">
                                <div>{item}</div>
                                <div className= "arrowElems"></div>
                            </div>
                        ))}
                    </div>
                
                </div>    
    )
    
    
 }
 const itemData = ["Dashboard", "Banking", "Expenses", "Sales", "Projects", "Payroll", "Reports", "Taxes", "Mileage", "Accounting", "My Accountant"];
 export default LeftSideBar;