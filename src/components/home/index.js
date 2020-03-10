import React, { Component } from 'react';
import './home-style.css';
import { Link } from 'gatsby';

class HomePage extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='home-mod-1-wrapper'>
          <div className='inner-home-page-div'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <h1 className='text-center main-welcome-title sec-title'>Welcome.</h1>
                  <h1 className='main-comp-title'>Latitude 48 Engineering</h1>
                  <h3 className='main-comp-sub-title'>Civil Engineering Consultants</h3>
                </div>
              </div>
              <div className='row'>
                <div className='learn-more-home'>
                  <div className='learn-more-wrapper'>
                    <Link to='/about' href='/about'>
                      <p className='text-center home-page-learn-more-txt'>Learn More</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
