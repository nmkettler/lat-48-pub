import React, { Component } from 'react';
import './our-work.css';
import pic from '../../images/tunnel.jpg';

class OurWork extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='our-work-wrapper'>
          <div className='inner-our-work-div'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-12'>
                  <h1 className='text-center our-work-welcome-title'>Our Work</h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='work-tile'>
                    <img className="img-fluid" src={pic} />
                    <div className='tile-inner-text'>
                      <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='work-tile'>
                    <img className="img-fluid" src={pic} />
                    <div className='tile-inner-text'>
                      <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='work-tile'>
                    <img className="img-fluid" src={pic} />
                    <div className='tile-inner-text'>
                      <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='work-tile'>
                    <img className="img-fluid" src={pic} />
                    <div className='tile-inner-text'>
                      <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='work-tile'>
                    <img className="img-fluid" src={pic} />
                    <div className='tile-inner-text'>
                      <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='work-tile'>
                    <img className="img-fluid" src={pic} />
                    <div className='tile-inner-text'>
                      <p>Bacon ipsum dolor amet swine prosciutto pastrami turducken doner.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OurWork;
