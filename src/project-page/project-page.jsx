import './project-page.css';
import '../App.css';
import MicroModal from 'micromodal';
import CreateProjectModal from './create-project-modal.jsx';
import React from 'react';
import './create-project-modal.css';

const ProjectPage = () => {
    const body = (
    <>
        <h1 className="project_page_title">Run your projects with confidence</h1>
        <h2 className="project_page_subtitle">Make better decisions by knowing how your jobs are doing</h2>
        <div id="project_page_link_container">

            <div id="project_page_link_play"></div> 
            <a href="noop" target="_blank" rel="noopener noreferrer" className="project_page_link">See how it works</a>
            
        </div>
        <ul id="project_page_bullet_points">
            <li><p>Profitability in one place</p></li>
            <p>Organize your project finances with a clear view of profits</p>
            <li><p>Keep track of your labor costs</p></li>
            <p>See where your team is spending time and how it affects your profit margins</p>
            <li><p>Eliminate the guesswork</p></li>
            <p>Understand which projects make money and where you should focus your efforts</p>
        </ul>
        
        <button className="project_page_start_button" data-micromodal-trigger="modal-1">Start a project</button>

        <div className='project_page_footer'>
            <hr/>
            <h3>Tips &amp; Resources</h3>
            <a href="noop" target="_blank" rel="noopener noreferrer" className="project_page_footer_link">Track income, costs, and pro...</a><br></br>
            <a href="noop" target="_blank" rel="noopener noreferrer" className="project_page_footer_link">Get your project labor...</a><br></br>
            <a href="noop" target="_blank" rel="noopener noreferrer" className="project_page_footer_link">Track income, costs, and pro...</a><br></br>
            <a href="noop" target="_blank" rel="noopener noreferrer" className="project_page_footer_link">Track income, costs, and pro...</a><br></br>
        </div>
    </>);

    //createProjectForm
    const create_project_form = (
       
        <div id="modal-1" aria-hidden="true">
        {/* <!-- [2] --> */}
            <div tabIndex="-1" data-micromodal-close>

                {/* <!-- [3] --> */}
                <div role="dialog" aria-modal="true" aria-labelledby="modal-1-title" >


                    <header>
                        <h2 id="modal-1-title">
                        New project
                        </h2>

                        {/* <!-- [4] --> */}
                        <button id="close_modal_button" aria-label="Close modal" data-micromodal-close></button>
                    </header>

                    <div id="modal-1-content">   
                        <CreateProjectModal projectTitle="test"/>
                    </div>

                </div>
            </div>
        </div>
    )


   
    document.addEventListener("DOMContentLoaded", function() {
  
        try {
            
          console.log("in Here");
          MicroModal.init({
            disableFocus: false,
            closeTrigger: 'data-micromodal-close',
            openTrigger: 'data-micromodal-trigger',
            awaitCloseAnimation: true,// set to false, to remove close animation
            onShow: function(modal) {
              document.getElementById("create_project_modal").className = "show";
              document.getElementById("create_project_modal").style.display = "block";
              document.getElementById("create_project_modal_container").style.display = "block";
              console.log("micromodal open");
            },
            onClose: function(modal) {
              document.getElementById("create_project_modal_container").style.display = "none"
              document.getElementById("create_project_modal").style.display = "none";
              console.log("micromodal close");
            }
          });
          
        } catch (e) {
          console.log("micromodal error: ", e);
        }
        
    });
    

    return (
        <>
            <div className="project_page_body">{body}</div>
            <img src={require("./projectStats.png")} alt="Project Stats" id="project_page_stats_image"></img>
            <div id= "create_project_modal_container"><div id= "create_project_modal" style={{display: "none"}} >{create_project_form}</div></div> 
        </>
    );
  
}
export default ProjectPage;