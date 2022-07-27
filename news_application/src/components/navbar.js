import React from 'react';
import './navbar.css';

function Navbar(){
return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><b>MyNews</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">India</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">World</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Tech</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Entertainment</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);
}
export default Navbar;