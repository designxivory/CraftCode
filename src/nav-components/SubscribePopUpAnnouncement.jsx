/**
 * Header component for QBO app
 */

import React from 'react';
import './SubscribePopUpAnnouncement.css';
import '../App.css';
//each component should have it's own css file
//import { Link } from "react-router-dom";

export const SubscribePopUpAnnouncement = () => {

    return (
        //TODO: add in id, add in class
        <div className="Subscribe_Popop_Banner">
            <div>Subscribe now and save 50%</div>
            <a href="">Subscribe Now</a>
        </div>
    );
};

export default SubscribePopUpAnnouncement;

//Common component for each button called "button"... Should be able to pass in parameter for the text. Would also need on click handler.