import { Link } from "react-router-dom";
import React from "react";

class Breadcrump extends React.Component {
  
  render() {
    const { pageName, pageUrl } = this.props;
    return (
      <div>        
        <nav className="no-pad-top orange">
          <div className="nav-wrapper container">
            <div className="col s12">
              <Link to="/dashboard">
                <i className="material-icons">dashboard</i>
              </Link>
              {pageName !== "" ? <Link to={pageUrl}>{pageName}></Link> : null}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Breadcrump;
