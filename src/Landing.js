import './Landing.css';
import './App.css';

import Layout from "./Layout";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <Layout
          header={
            <div className="headerContents">
            <div id="HeaderText">Subscribe now and save 50%</div>
            <a id="HeaderLink">Subscribe Now</a>
            </div>
        }
        sidebar={

            <div>
                <div>
                    <img src="" id="miniIcon"></img>
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


                        </div>
                    ))}
                </div>
            
            </div>
              
          }
          main={
            <div className="stuff">
              There will be cool stuff in here. Yes Indeed.
            </div>
          }
          
        />
      );
  
}
const itemData = ["Dashboard", "Banking", "Expenses", "Sales", "Projects", "Payroll", "Reports", "Taxes", "Mileage", "Accounting", "My Accountant"];
export default LandingPage;