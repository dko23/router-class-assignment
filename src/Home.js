import React from 'react';
import box from './images/download.png'
import ebay from './images/ebay.png'
import twilio from './images/twilio_grey.jpg'
import sales from './images/sales.png'
import success from './images/customer sucesss.jpg.png'
import recruit from './images/recruting.jpg.png'



function Home() {
  return (
    <div className='page'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="font-weight-bold">Easy Scheduling<br /><span className="text-primary">Ahead</span></h3>
            <p>Calendy is an app for scheduling meetings professionally and efficiently, eliminating the hassle of back and forth emails so that you can get back to work</p>

            <form>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
          </div>

          <div className="col-md-6">
            <img src="https://images.ctfassets.net/k0lk9kiuza3o/46W8NE43rD54MveL20rPp5/188c54e94778695132cfaa1fb65743e9/Homepage-Hero.png?w=1366&h=1100&q=50&fm=webp" className="img-fluid" alt="Hero" />
          </div>
        </div>
      </div>

      <footer>
        <div className="container-fluid company-logos bg-light">
          <h3 className="text-center">Simplified scheduling for more than<br /><span className="text-primary">10,000,000</span> users worldwide</h3>
          <div className="row">
            <div className="col-md-12">
              <ul className="tech-logos d-flex justify-content-around">
                <li className="logo"><img src="https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMRMxRXthyXYcDRiR/6f26aaf48346fb5dfa8318bb4a403e02/Compass__2_.svg" className="compass" alt="Compass" /></li>
                <li className="logo"><img src={box} className="dropbox" alt="Dropbox" /></li>
                <li className="logo"><img src={ebay} className="ebay" alt="eBay" /></li>
                <li className="logo"><img src="https://images.ctfassets.net/k0lk9kiuza3o/6NiS4DQmcqEUxKkXJVesAP/d356b290fa1f13a2addae7870312fef2/Vector.svg" className="vector" alt="Vector" /></li>
                <li className="logo"><img src={twilio} className="twilio" alt="Twilio" /></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mb-3 mt-3">
          <div className="row">
            <div className="col-md-4">
              <h4>Create simple rules</h4>
              <p>Let Calendly know your availability preferences, and it'll do the work for you.</p>
            </div>

            <div className="col-md-4">
              <h4>Share your link</h4>
              <p>Send guests your Calendly link or embed it on your website.</p>
            </div>

            <div className="col-md-4">
              <h4>Get Booked</h4>
              <p>They picked a time, and the event is added to your calendar.</p>
            </div>
          </div>
        </div>
      </footer>

      <div className="container">
        <div className="row">
          <div className="col-md text-center">
            <h3>We are more than a Scheduling Link</h3>
            <p>Standardize on the #1 Scheduling platform and deliver the power of Calendly across your entire organization</p>
            <button type="button" className="btn btn-dark">Contact Sales</button>
          </div>
        </div>
      </div>

      <div className="container-fluid sales-card">
        <div className="text-center">
          <h1 className="font-weight-bold">The Right Calendly for the Work You Do</h1>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top sales" src={sales} alt="Sales" />
              <div className="card-body">
                <strong>Sales</strong>
                <p class="card-text">Convert more leads and prospects into meetings and revenue. Easily book demos and customer calls without the back and forth.</p>
              
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top recruiting" src={success} alt="Recruiting" />
              <div className="card-body">
                <strong>Customer Success</strong>
                <p class="card-text">Deliver better support interactions and customer consultations. Stay connected with automated reminders and follow-ups.</p>
               
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top education" src={recruit} alt="Education" />
              <div className="card-body">
                <strong>Education</strong>
                <p class="card-text">Fill your candidate pipeline and book more interviews and recruiter screens with easy, standardized scheduling.</p>
             
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn mt-3 enterprise-button rounded-pill btn-lg">Learn More</button>
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

          <div className=" easy-ahead col-md-8 d-flex justify-content-around">
            <ul>
              <h6>About Us</h6>
              <li>Contact Sales</li>
              <li>News Room</li>
              <li>Value inAction</li>
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
  );
}

export default Home;


