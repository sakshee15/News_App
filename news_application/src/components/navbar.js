import React from 'react';
import './navbar.css';
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg  sticky-top navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><b>MyNews</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link  ${location.pathname === "/" && "active"} `} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  ${location.pathname === "/India" && "active"} `} aria-current="page" to="/India">India</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  ${location.pathname === "/World" && "active"} `} aria-current="page" to="/World">World</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  ${location.pathname === "/Sports" && "active"} `} aria-current="page" to="/Sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  ${location.pathname === "/Tech" && "active"} `} aria-current="page" to="/Tech">Tech</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  ${location.pathname === "/Business" && "active"} `} aria-current="page" to="/Business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  ${location.pathname === "/Education" && "active"} `} aria-current="page" to="/Education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  ${location.pathname === "/Entertainment" && "active"} `} aria-current="page" to="/Entertainment">Entertainment</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;