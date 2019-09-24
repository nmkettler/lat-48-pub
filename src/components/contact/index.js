import React, { Component } from 'react';
import './contact.css';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='contact-us-wrapper'>
          <div className='inner-contact-div'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <h1 className='text-center contact-welcome-title sec-title'>Contact Latitude 48</h1>
                  <hr></hr>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <p className='text-center contact-description'>While we're good with smoke signals, there are simpler ways for us to get in touch and answer your questions.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='contact-page-footer'>
            <div className='email-page-wrapper'>
              <a href="mailto:someone@yoursite.com?subject=Latitude 48 Question">
                <p className='text-center contact-page-footer-txt'>Send us an email</p>
                {/* <FontAwesomeIcon icon={faEnvelope} size="6x" /> */}
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
