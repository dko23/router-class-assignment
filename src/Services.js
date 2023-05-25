import React from 'react';
import team from './images/team.jpeg'
import sales from './images/Calendly-Sales-Small-new.jpg'
import customer from './images/customer sales.jpg'
import recruiting from './images/capture.jpg'
import woman from './images/woman.jpg'
import education from './images/education.jpg'

function Services() {
  return (
    <div className="page">
      <div className="container power-teams">
        <div className="row">
          <div className="col-md-6">
            <h1 className="font-weight-bold">Power Up your Teams</h1>
            <p>
              Calendly gives you control over team scheduling with a standardized, scalable process. It's secure, easy to manage, and integrates with your team's favorite tools, so you can get everyone working as efficiently and effectively as possible.
            </p>
            <div className="button-group d-flex">
              <button type="button" className="btn bg-primary text-white mt-3 teams-button rounded-pill btn-lg">
                Start for Free
              </button>
              <button
                type="button"
                className="team-button btn mt-3 teams-button rounded-pill btn-lg btn-outline-dark ml-3"
              >
                Contact Sales
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <img src={team} className="img-fluid" alt="Team" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <img src={sales} className="img-fluid" alt="Sales" />
          </div>

          <div className="col-md-6">
            <p className="text-primary font-weight-bold">Automated Assignment</p>
            <h1 className="font-weight-bold">Control How Your Team Gets Booked</h1>
            <p>
              With Calendly, you can offer sessions that are a few minutes or a few hours, for one invitee or a group. Automated round-robin, first-available, or geography-based assignments let you easily divvy up meetings in any way that works for your team members.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid sales-card">
        <div className="text-center">
          <p className="text-primary font-weight-bold">Solutions</p>
          <h1 className="font-weight-bold">The Right Calendly for the Work You Do</h1>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top sales" src={customer} alt="Sales" />
              <div className="card-body">
                <strong>Sales</strong>
                <p className="card-text">Get to your best leads faster</p>
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top recruiting" src={recruiting} alt="Recruiting" />
              <div className="card-body">
                <strong>Recruiting</strong>
                <p className="card-text">Less emailing, more closing</p>
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top customer-success" src={woman} alt="Customer Success" />
              <div className="card-body customer-success">
                <strong>Customer Success</strong>
                <p className="card-text">XXXXXXS</p>
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top education" src={education} alt="Education" />
              <div className="card-body">
                <strong>Education</strong>
                <p className="card-text">Boost student success</p>
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container easy-ahead">
        <div className="row">
          <div className="col-md-3">
            <h3 className="font-weight-bold">
              Easy
              <br />
              <span className="text-primary">Ahead</span>
            </h3>
            <p>We take the world out of connecting with others so that you can accomplish more</p>
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle btn-lg btn-block"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Language
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">
                  English
                </a>
                <a className="dropdown-item" href="#">
                  Francais
                </a>
                <a className="dropdown-item" href="#">
                  Arabic
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-9 d-flex justify-content-around">
            <ul>
              <h6>About Us</h6>
              <li>Contact Sales</li>
              <li>News Room</li>
              <li>Value in Action</li>
              <li>Careers</li>
              <li>Security</li>
            </ul>

            <ul>
              <h6>Solutions</h6>
              <li>Customer Success</li>
              <li>Sales</li>
              <li>Recruiting</li>
              <li>Education</li>
              <li>Marketing</li>
            </ul>

            <ul>
              <h6>Popular Features</h6>
              <li>Embed Calendly</li>
              <li>Availability</li>
              <li>Sending Notification</li>
              <li>Using Calendly Mobile</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
