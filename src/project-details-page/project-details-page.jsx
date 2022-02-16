/**
 * Project Details Page component for QBO app
 */

import React,{ useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FiFileText, FiStar, FiChevronDown } from "react-icons/fi";
import OverviewView from './overview_view';
import '../App.css';
import './project-details-page.css';
 
export const ProjectDetailsPage = (projectName) => {
const location = useLocation();
const { projectNamee, customerName } = location.state;
console.log('location.state:', location.state);

const overviewView = useRef(null);
const transactionsView = useRef(null);
const timeactivityView = useRef(null);
const projectreportsView = useRef(null);

const infoView = React.createRef();



const overview_view =(

  <>
  <div id= "project_details_page_overview_column_1">Column 1</div>
  <div id= "project_details_page_overview_column_2">Column 2</div>
  <div id= "project_details_page_overview_column_3">Column 3</div>
  </>
);
const transactions_view =(
  <div>transactions_view</div>
);
const time_activity_view =(
  <div>time_activity_view</div>
);
const project_reports_view =(
  <div>project_reports_view</div>
);

//Return appropriate active view
function active_view(active) {

  if(active === "overview"){
    return <OverviewView/>;
  }
  else if(active === "transactions"){
    return transactions_view;
  }else if(active==="time activity"){
    return time_activity_view;
  }else if(active ==="project reports"){
    return project_reports_view;
  }else{
    return (alert("Something has gone very wrong during button handling..."));
  }

}



console.log('check project name param:', projectNamee);
const detail_view = (
  <>
    <div id="project_details_status_section">
      <a href="noop" id="project_details_all_projects_button">	&lt; All projects</a>
      <div id="project_details_page_title">{projectNamee}</div>
      <div id="project_details_page_status_buttons">
        <a href="noop" id="project_details_customer_name">{customerName}</a>
        <a href="noop" id="project_details_customer_name">In progress <FiChevronDown style={{ color: "dodgerblue", width: "12px", height: "12px" }}/></a>
        <a href="noop" id="project_details_file_icon"><FiFileText style={{ color: "dodgerblue", width: "15px", height: "15px" }} id="progect_details_page_file_icon" /></a>
        <a href="noop" id="project_details_star_icon"><FiStar style={{ color: "dodgerblue", width: "15px", height: "15px" }} /></a>
      </div>

      <div id="project_details_page_action_buttons_container">
        <div id ="project_details_page_edit_button_container">
          <button id="project_details_page_edit_button">Edit</button>
        </div>
        <div id="project_details_page_add_to_project_container">
          <button id="project_details_page_add_to_project_button">Add to project <FiChevronDown style={{ color: "white", width: "15px", height: "15px" }}/></button>
        </div>
      </div>

      <div id="project_details_page_status_bar">

        <div id="project_details_page_profit_margin_container">
          <h4>--</h4>
          <p>PROFIT MARGIN</p>
        </div>

        <div id="project_details_page_income_costs_section">

          <div id ="project_details_page_income_section">
            <p>Income</p>
            <div id="project_details_page_income_bar"></div>
          </div>

          <div id ="project_details_page_costs_section">
            <p>Costs</p>
            <div id="project_details_page_costs_bar"></div>
          </div>
          <div id="project_details_page_dollar_amounts">
            <div><p>$0.00</p></div>
            <div><p>$0.00</p></div>
          </div>
        </div>
      </div>
      <a href="noop" id="project_details_page_take_tour_button">Take project tour</a>
    </div>
    <div id="project_details_info_section">

      <button id="project_details_page_overview_button" onClick={() => {handleOnClick("overview")}}>Overview</button>
      <button id="project_details_page_transactions_button"  onClick={() => {handleOnClick("transactions")}}>Transactions</button>
      <button id="project_details_page_time_activity_button"  onClick={() => {handleOnClick("time activity")}}>Time Activity</button>
      <button id="project_details_page_project_reports_button"  onClick={() => {handleOnClick("project reports")}}>Project Reports</button>

      <div id="project_details_page_info" ref={infoView}>{active_view("overview")}</div>

    </div>
  </>

);

function handleOnClick(active){
  console.log(active);
  console.log(<OverviewView/>);
  //infoView.current.innerHTML = active_view(active);
  // const section = document.getElementById("project_details_page_info");
  // console.log(document.getElementById("project_details_page_info"));
  // section.innerHTML = active_view(active);
}

return (  

    <div className= "project_details_container">{detail_view}</div>
   );
    
 }
 export default ProjectDetailsPage;