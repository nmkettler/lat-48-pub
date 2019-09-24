import React, { Component } from 'react';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Quality extends Component {
  render () {
    return (
      <div className='col-md-10 offset-md-1' id='quality'>
        <div className='quality-service service-description text-center'>
          <p className='service-icon'><FontAwesomeIcon icon={faCheckDouble} size='2x' /></p>
          <h1>Quality</h1>
          <p>At Latitude 48 we care about the legacy of our work. We use cutting edge analysis and design capabilities to offer three-dimensional visualization services that will reduce risk and increase accuracy. By giving attention to every detail, you can expect premier consulting services in any environment.</p>
        </div>
      </div>
    );
  }
}

export default Quality;
