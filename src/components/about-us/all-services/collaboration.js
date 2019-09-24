import React, { Component } from 'react';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Collaboration extends Component {
  render () {
    return (
      <div className='col-md-10 offset-md-1' id='collaboration'>
        <div className='collaboration-service service-description text-center'>
          <p className='service-icon'><FontAwesomeIcon icon={faHandsHelping} size='2x' /></p>
          <h1>Collaboration</h1>
          <p>Through cohesive discussions and responsive communication, we value collaboration as a means to achieve a common goal. This hands-on approach provides our clients with a seamless experience from first contact through project completion.</p>
        </div>
      </div>
    );
  }
}

export default Collaboration;
