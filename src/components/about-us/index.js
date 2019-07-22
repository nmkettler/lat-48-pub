import React from 'react';
import './about-us.css';

const AboutUs = () => {
  return (
    <React.Fragment>
      <div className='about-us-wrapper'>
        <div className='inner-about-us-div'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h1 className='text-center main-welcome-title'>Who We Are</h1>
              </div>
            </div>
            <div className='container'>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <p>Little bit about the company here</p>
              </div>
              <div className='col-md-6'>
                <p>Little bit about the company here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
