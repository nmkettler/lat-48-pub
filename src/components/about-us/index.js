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
                <h1 className='text-center main-welcome-title sec-title'>Who We Are</h1>
              </div>
            </div>
            <div className='container'>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='about-company-txt-wrapper'>
                  <p>Little bit about the company here</p>
                  <p>Turducken chicken pork loin, short loin landjaeger corned beef sirloin. Kielbasa pancetta shank rump turducken swine tail ham. Beef ribs hamburger leberkas swine, shank tri-tip drumstick porchetta. Venison ground round tail pastrami, landjaeger bresaola tongue drumstick.</p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='about-company-txt-wrapper'>
                  <p>Little bit about the company here</p>
                  <p>Turducken chicken pork loin, short loin landjaeger corned beef sirloin. Kielbasa pancetta shank rump turducken swine tail ham. Beef ribs hamburger leberkas swine, shank tri-tip drumstick porchetta. Venison ground round tail pastrami, landjaeger bresaola tongue drumstick.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
