import React, { Component } from 'react';
import './home-style.css';
import { Link } from 'gatsby';


class HomePage extends Component {
  render () {
    
    return (
      <React.Fragment>
        <div className='home-mod-1-wrapper'>
          <div className='inner-home-page-div'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <h1 className='text-center main-welcome-title sec-title'>Welcome.</h1>
                  <h1 className='text-center main-comp-title'>Latitude 48</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
