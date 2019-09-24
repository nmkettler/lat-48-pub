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
              <div className='row row-eq-height'>
                <div className='col about-company-txt-wrapper'>
                  <h1>What we do</h1>
                  <ul>
                    <li>- Multifamily Development</li>
                    <li>- Commercial Office and Retail</li>
                    <li>- Affordable Housing</li>
                    <li>- K-12 Education</li>
                    <li>- Higher Education</li>
                    <li>- Hospitality</li>
                    <li>- Low-Impact and Sustainable Design</li>
                    <li>- Entitilement Services</li>
                    <li>- Single Family Residences</li>
                    <li>- Feasibility Studies</li>
                  </ul>
                </div>
                <div className='col about-company-txt-wrapper how-we-do-it'>
                  <h1>How we do it</h1>
                  <p>Latitude 48 offers client superior service accompanied with cutting edge analysis and design capabilities. Offering three-dimensional visualization services reduces the possibilty of spatial conflicts, increases accuracy, and ultimately improves collaboration with architectural and other engineering disciplines.</p>
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
