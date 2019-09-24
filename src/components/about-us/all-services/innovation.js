import React, { Component } from 'react';
// import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Innovation extends Component {
  render () {
    return (
      <div className='col-md-10 offset-md-1' id='innovation'>
        <div className='innovation-service service-description text-center'>
          <p className='service-icon'><FontAwesomeIcon icon={faLightbulb} size='2x' /></p>
          <h1>Innovation</h1>
          <p>We value innovation efforts, ideas and methods to continually drive success for our clients.  We take a visionary approach to problem solving and are never afraid to challenge the status quo. </p>
        </div>
      </div>
    );
  }
}

export default Innovation;
