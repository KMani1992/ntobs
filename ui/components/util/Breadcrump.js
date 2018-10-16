import { Link } from "react-router-dom";
import React from "react";

const Breadcrump = props => {
  const { pageName, pageUrl } = props;
  return (
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
  );
};
export default Breadcrump;