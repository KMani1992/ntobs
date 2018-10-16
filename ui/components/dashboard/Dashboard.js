import React, { Component } from "react";
import Breadcrump from "../util/Breadcrump";
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    console.log("inside dashboard component");
    return (
      <main>
        <Breadcrump pageName="" />
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row">              
              <h5>Welcome</h5>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;
