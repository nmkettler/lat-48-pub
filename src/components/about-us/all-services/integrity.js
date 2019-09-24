import React, { Component } from 'react';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Integrity extends Component {
  render () {
    return (
      <div className='col-md-10 offset-md-1' id='integrity'>
        <div className='integrity-service service-description text-center'>
          <p className='service-icon'><FontAwesomeIcon icon={faUsers} size='2x' /></p>
          <h1>Integrity</h1>
          <p>We never compromise on matters of ethics. We fulfill our commitments, strive to be transparent and see ourselves as personally accountable for the highest standards of conduct.</p>
        </div>
      </div>
    );
  }
}

export default Integrity;
