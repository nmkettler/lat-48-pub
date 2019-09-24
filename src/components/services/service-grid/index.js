import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faBuilding, faHandHoldingUsd, faSchool, faUniversity, faPencilRuler, faMap, faHome, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import '../services.css';

const ServiceGrid = () => {
  return (
    <React.Fragment>
      <div className='row services-section-wrapper'>
        <div className='col-md-12 driven-value-header'>
          <p className='text-center'>If you have the vision, no matter how big or small, we have the experience to make it a reality. </p>
        </div>
        <div className='col-md-4'>
          <a href='#quality'>
            <p className='text-center'><FontAwesomeIcon className='text-center' icon={faCity} size='3x' /></p>
            <p className='text-center service-title'>Multi Development</p>
          </a>
        </div>
        <div className='col-md-4'>
          <a href='#quality'>
            <p className='text-center'><FontAwesomeIcon className='text-center' icon={faBuilding} size='3x' /></p>
            <p className='text-center service-title'>Commercial Office and Retail</p>
          </a>
        </div>
        <div className='col-md-4'>
          <a href='#quality'>
            <p className='text-center'><FontAwesomeIcon className='text-center' icon={faHandHoldingUsd} size='3x' /></p>
            <p className='text-center service-title'>Affordable Housing</p>
          </a>
        </div>
      </div>
      <div className='row services-section-wrapper'>
        <div className='col-md-4'>
          <a href='#quality'>
            <p className='text-center'><FontAwesomeIcon className='text-center' icon={faSchool} size='3x' /></p>
            <p className='text-center service-title'>K-12 Education</p>
          </a>
        </div>
        <div className='col-md-4'>
          <a href='#quality'>
            <p className='text-center'><FontAwesomeIcon className='text-center' icon={faUniversity} size='3x' /></p>
            <p className='text-center service-title'>Higher Education</p>
          </a>
        </div>
        <div className='col-md-4'>
          <a href='#quality'>
            <p className='text-center'><FontAwesomeIcon className='text-center' icon={faPencilRuler} size='3x' /></p>
            <p className='text-center service-title'>Low-Impact and Sustainable Design</p>
          </a>
        </div>
      </div>
      <div className='row services-section-wrapper'>
        <div className='col-md-4'>
          <a href='#quality'>
            <p className='text-center'><FontAwesomeIcon className='text-center' icon={faMap} size='3x' /></p>
            <p className='text-center service-title'>Entitlement Services</p>
          </a>
        </div>
        <div className='col-md-4'>
          <a href='#quality'>
            <p className='text-center'><FontAwesomeIcon className='text-center' icon={faHome} size='3x' /></p>
            <p className='text-center service-title'>Single Family Residences</p>
          </a>
        </div>
        <div className='col-md-4'>
          <a href='#quality'>
            <p className='text-center'><FontAwesomeIcon className='text-center' icon={faSearchLocation} size='3x' /></p>
            <p className='text-center service-title'>Feasibility Studies </p>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServiceGrid;
