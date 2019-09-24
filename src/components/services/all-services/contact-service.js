import React, { Component } from 'react';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
  render () {
    return (
      <div className='col-md-10 offset-md-1'>
        <div className='contact-service text-center'>
          <p className='contact-icon'><FontAwesomeIcon icon={faEnvelope} size='3x' /></p>
          <h1>Contact</h1>
          <div className='email-wrapper'>
            <a href="mailto:someone@yoursite.com?subject=Latitude 48 Question">
              <p className='text-center contact-footer-txt'>Send us an email</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
