import React from 'react';
import picture from './images/picture1.jpg'
import test from './images/Calendly-testimonial-Vonage__1_.jpg'
import hero from './images/Homepage-Hero-new.jpg'

function About() {
  return (
    <>
      <div className='page'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="font-weight-bold">The Genius Way to work <span className="text-primary">better</span></h1>
              <p>Calendly makes it easier to work smarter when you're working solo. Meetings, sessions, appointments become more efficient ways to achieve success and accomplish goals.</p>
              <button type="button" className="btn mt-3 enterprise-button rounded-pill btn-lg">Sign up for free</button>
            </div>

            <div className="col-md-6">
              <img src={picture} className="img-fluid" alt="Picture 1" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <img src={test} className="img-fluid" alt="Testimonial" />
            </div>

            <div className="col-md-6">
              <p className="text-secondary">A CURATED CALENDAR</p>
              <h1 className="font-weight-bold">Book Up Efficiently</h1>
              <p>When invitees select a meeting slot from your schedule, they only see times you're available, and only the length and type of meeting you want to have. Your schedule fills up efficiently and everyone avoids excess email exchanges.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <p className="text-secondary">AUTOMATED NOTIFICATIONS & FOLLOW-UPS</p>
              <h1 className="font-weight-bold">Work Like You Have a Personal Assistant</h1>
              <p>Because Calendly automates administrative tasks like sending reminder emails and follow-ups, you can focus on the work that builds your business and brings customers back for more.</p>
            </div>

            <div className="col-md-6">
              <img src={hero} className="img-fluid" alt="Homepage Hero" />
            </div>
          </div>
        </div>

        <div className="container-fluid individual-banner">
          <div className="row">
            <div className="col-md">
              <h3>Find Just-Right Plans for Individuals and Small Teams</h3>
              <button type="button" className="individual-button team-button btn mt-3 teams-button rounded-pill btn-lg">See our plans</button>
            </div>
          </div>
        </div>

        <div className="container easy-ahead">
          <div className="row">
            <div className="col-md-4">
              <h3 className="font-weight-bold">Easy<br /><span className="text-primary">Ahead</span></h3>
              <p>We take the world out of connecting with others so that you can accomplish more</p>
              <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle btn-lg btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Language
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">English</a>
                  <a className="dropdown-item" href="#">Français</a>
                  <a className="dropdown-item" href="#">Arabic</a>
                </div>
              </div>
            </div>

            <div className="col-md-8 d-flex justify-content-around">
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
                <li>Sending Notifications</li>
                <li>Using Calendly Mobile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

