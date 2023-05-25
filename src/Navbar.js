import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/calendly.png'


function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <Link to="/">
              <a className="navbar-brand">
                <img src={logo} alt="Calendly Logo" className="calendly-logo" />
              </a>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto font-weight-bold">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Individual
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    Team
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link">
                    Enterprises
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;




