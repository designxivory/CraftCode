/**
 * Project Details Page component for QBO app
 */

import React from 'react';
import { useLocation } from 'react-router-dom';

import '../App.css';
import './project-details-page.css';
 
export const ProjectDetailsPage = (projectName) => {
const location = useLocation();
const { projectNamee, customerName } = location.state;
console.log('location.state:', location.state);

const overview_view =(
  <>
  <div id= "project_details_page_overview_column_1">Column 1</div>
  <div id= "project_details_page_overview_column_2">Column 2</div>
  <div id= "project_details_page_overview_column_3">Column 3</div>
  </>
);

function active_view(active) {

  if(active === "overview"){
    return overview_view;
  }
  else if(active === "transactions"){

  }else if(active==="time activity"){

  }else if(active ==="project reports"){

  }else{
    return (alert("Something has gone very wrong during button handling..."));
  }

}

console.log('check project name param:', projectNamee);
const detail_view = (
  <>
    <div id="project_details_status_section">
      <div id="project_details_page_title">{projectNamee}</div>
      <div id="project_details_page_status_buttons">
        <a href="noop" id="project_details_customer_name">{customerName}</a>
    
      </div>
      <div id ="project_details_page_edit_button_container">
        <button id="project_details_page_edit_button">Edit</button>
      </div>
      <div id="project_details_page_add_to_project_container">
      <button id="project_details_page_add_to_project_button">Add to project</button>
      </div>
      <div id="project_details_status_bar"></div>
      <button id="project_details_page_take_tour_button">Take Project Tour</button>
    </div>
    <div id="project_details_info_section">

      <button id="project_details_page_overview_button">Overview</button>
      <button id="project_details_page_transactions_button">Transactions</button>
      <button id="project_details_page_time_activity_button">Time Activity</button>
      <button id="project_details_page_project_reports_button">Project Reports</button>

      <div id="project_details_page_info">{active_view("overview")}</div>

    </div>
  </>

);

return (   
    <div className= "project_details_container">{detail_view}</div>
   );
    
 }
 export default ProjectDetailsPage;