import React, { Component, ReactDOM } from 'react';
import './about-us.css';
import { Link } from 'gatsby';
import QualityService from './all-services/quality';
import CollaborationService from './all-services/collaboration';
import InnovationService from './all-services/innovation';
import IntegrityService from './all-services/integrity';
import ServiceSection from './all-services/service';
import ContactService from './all-services/contact-service';
import { faRadiation, faEnvelope, faCheckDouble, faPeopleCarry, faUsers, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Services extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='services-wrapper'>
          <div className='row our-vision-header-wrapper section-wrapper'>
            <div className='col-md-7 offset-md-1'>
              <div className='services-header'>
                <h1 className='vision-title'>Our Vision</h1>
                <p className='vision-text'>We are recognized experts in our field and strive to produce work that is reflective of that. Our team believes that success doesn’t occur alone. Through collaboration, communication and innovation, we can transform any client’s vision into reality.</p>
              </div>
            </div>
          </div>
          <div className='row services-overview-wrapper section-wrapper'>
            <div className='driven-value-header'>
              <h1 className='text-center'>Driven by values</h1>
            </div>
            <div className='col-md-2 offset-md-1'>
              <a href='#quality'>
                <p className='text-center'><FontAwesomeIcon className='text-center' icon={faCheckDouble} size='3x' /></p>
                <p className='text-center service-title'>Quality</p>
              </a>
            </div>
            <div className='col-md-2'>
              <a href='#service'>
                <p className='text-center'><FontAwesomeIcon icon={faPeopleCarry} size='3x' /></p>
                <p className='text-center service-title'>Service</p>
              </a>
            </div>
            <div className='col-md-2'>
              <a href='#integrity'>
                <p className='text-center'><FontAwesomeIcon icon={faUsers} size='3x' /></p>
                <p className='text-center service-title'>Integrity</p>
              </a>
            </div>
            <div className='col-md-2'>
              <a href='#collaboration'>
                <p className='text-center'><FontAwesomeIcon icon={faHandsHelping} size='3x' /></p>
                <p className='text-center service-title'>Collaboration</p>
              </a>
            </div>
            <div className='col-md-2'>
              <a href='#innovation'>
                <p className='text-center'><FontAwesomeIcon icon={faLightbulb} size='3x' /></p>
                <p className='text-center service-title'>Innovation</p>
              </a>
            </div>
          </div>
          <div className='row quality-service-wrapper section-wrapper'>
            <QualityService />
          </div>
          <div className='row service-sec-service-wrapper section-wrapper'>
            <ServiceSection />
          </div>
          <div className='row integrity-service-wrapper section-wrapper'>
            <IntegrityService />
          </div>
          <div className='row collaboration-service-wrapper section-wrapper'>
            <CollaborationService />
          </div>
          <div className='row innovation-service-wrapper section-wrapper'>
            <InnovationService />
          </div>
          <div className='row contact-service-wrapper section-wrapper'>
            <ContactService />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Services;
