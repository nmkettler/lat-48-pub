import React, { Component } from 'react';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Service extends Component {
  render () {
    return (
      <div className='col-md-10 offset-md-1' id='service'>
        <div className='service-sec-header service-description text-center'>
          <p className='service-icon'><FontAwesomeIcon icon={faPeopleCarry} size='2x' /></p>
          <h1>Service</h1>
          <p>Customer service is a core philosophy for our team. We put your interests first, regardless of the project size or budget. We recognize communication is critical for success and strive to anticipate and fully understand our clients’ needs. </p>
        </div>
      </div>
    );
  }
}

export default Service;
