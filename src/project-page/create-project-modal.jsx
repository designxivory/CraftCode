/**
 * Create Project Modal component for QBO app
 */
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './create-project-modal.css';
import '../App.css';

export const CreateProjectModal = (projectTitle) => {
    const [enteredProjectName, setEnteredProjectName] = useState('');
    const [enteredCustomerName, setEnteredCustomertName] = useState('');
 
    const createProjectForm = (  
        <>
            <label htmlFor="project_name" id="project_name_label">Project Name *</label>
            <input type="text" name="project_name" id="project_name_input" placeholder="What is the project?" onChange={(event) => setEnteredProjectName(event.target.value)}></input>
              
            <label htmlFor="customer_name" id="customer_name_label">Customer *</label>
            <select id="customer_name_input" name ="customer_name" placeholder="Who's the project for?" onChange={(event) => setEnteredCustomertName(event.target.options[event.target.selectedIndex].text)}>
                <option value="David C.">David C.</option>
                <option value="Ivory B.">Ivory B.</option>
                <option value="Tash L.">Tasha L.</option>
                <option value="Amanda N.">Amanda N.</option>
            </select>
            
            <label htmlFor="project_notes" id="project_notes_label">Notes</label>
            <textarea type = "text" name="project_notes" id="project_notes_input" placeholder="Add details you want to remember"></textarea>

            <Link to={"/projectdetails"} state={ {projectNamee: enteredProjectName, customerName: enteredCustomerName} }>
                <button type="button" id="project_save_button">Save</button>
            </Link>
        </>
    );
  
  return ( 
        <div>{createProjectForm}</div>
    );
    
 }
 export default CreateProjectModal;