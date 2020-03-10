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
                  <h1 className='text-center contact-welcome-title sec-title'>Hello</h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <p className='text-center contact-description'>What can we help you with?</p>
                </div>
              </div>
              <div className='row contact-btn-wrapper'>
                <div className='col-md-4 offset-md-2'>
                  <div className='email-page-wrapper'>
                    <a href="mailto:info@latitude-48.com?subject=Latitude 48 Question">
                      <p className='text-center contact-page-footer-txt'>Hire Us</p>
                      {/* <FontAwesomeIcon icon={faEnvelope} size="6x" /> */}
                    </a>
                  </div>
                </div>
                <p id='contact-or'>or</p>
                <div className='col-md-4'>
                  <div className='email-page-wrapper'>
                    <a href="mailto:info@latitude-48.com?subject=Latitude 48 Question">
                      <p className='text-center contact-page-footer-txt'>Join Us</p>
                      {/* <FontAwesomeIcon icon={faEnvelope} size="6x" /> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='contact-address text-center'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <p>600 1st Avenue, Seattle, WA 98104</p>
                  <p><a href="tel:206-556-1615">206.556.1615</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
