import React from 'react';
import './services.css';
import ServiceGrid from './service-grid';

const AboutUs = () => {
  return (
    <React.Fragment>
      <div className='about-us-wrapper'>
        <div className='row about-us-header-wrapper section-wrapper'>
          <div className='col-md-7 offset-md-1'>
            <div className='services-header'>
              <h1 className='vision-title'>Our Services</h1>
              <p className='vision-text'>At Latitude 48, our commitment to excellence is reflected in our approach for solving problems with well-designed and coordinated efforts. We offer three-dimensional visualization services that reduce the possibility of spatial conflicts, increases accuracy and ultimately improves collaboration with architectural and other engineering disciplines.</p>
            </div>
          </div>
        </div>
        <ServiceGrid />
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
