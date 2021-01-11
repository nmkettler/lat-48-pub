import React, { Component } from 'react';
import chasePic from '../../images/employees/chase.png';
import bradyPic from '../../images/employees/brady.png';
import './who-we-are.css';

class WhoWeAre extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showPicOne: false,
      showPicTwo: false,
    };

    this.togglePic1 = this.togglePic1.bind(this);
    this.togglePic2 = this.togglePic2.bind(this);
  }

  togglePic1 () {
    this.setState({
      showPicOne: !this.state.showPicOne,
    });
  }

  togglePic2 () {
    this.setState({
      showPicTwo: !this.state.showPicTwo,
    });
  }

  renderBio1 () {
    return (
      <p className='bio-description'>
        Chasen brings to the team over 8 years of experience in site development throughout Washington State. He has worked with many talented clients and teams over his career. Chasen is driven by the unrelenting pursuit of providing unparalleled customer service. Perhaps most importantly, his widespread experience in the region allows him to navigate challenges before they occur. Chasen’s extensive knowledge of downtown Seattle and surrounding areas allows project teams to deliver even with the most aggressive schedules.
      </p>
    );
  }

  renderBio2 () {
    return (
      <p className='bio-description'>
        Brady is a passionate, hardworking, and enthusiastic engineer with over 8 years of experience working with some of the brightest industry leaders. His charismatic, can-do attitude has allowed him the privilege to work on some of the region’s most prestigious projects and is no stranger to complex design challenges. He always approaches projects with a team mentality and specializes in project management, stormwater, site design, and Civil 3D modeling.
      </p>
    );
  }

  render () {
    return (
      <React.Fragment>
        <div className="row meet-us-section-wrapper display-flex meet-us-first-section">
          <div className={!this.state.showPicTwo ? 'col ml-5 order-md-6 ' : 'col-md-6 order-md-6 employee-text'}>
            {this.state.showPicTwo
              ? <React.Fragment>
                <img src={bradyPic} alt="" className="w-75" />
                {this.renderBio2()}
              </React.Fragment>
              : <img src={bradyPic} alt="" className="w-75" />
            }
          </div>
          <div className="col-md-6 order-md-1">
            <div className="row align-items-center h-100">
              <div className="col ml-5">
                <h1 className="display-3">Brady Berriman</h1>
                <p className="lead ">Principal / Owner</p>
                <p>
                  <a type="email" href="mailto: brady@latitude-48.com" className="employee-email ">brady@latitude-48.com</a>
                </p>
                <a onClick={() => this.togglePic2()} className="employee-learn">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row meet-us-section-wrapper display-flex">
          <div className={!this.state.showPicOne ? 'col ml-5' : 'col-md-6 employee-text'}>
            {this.state.showPicOne
              ? <React.Fragment>
                <img src={chasePic} alt="" className="w-75" />
                {this.renderBio1()}
              </React.Fragment>
              : <img src={chasePic} alt="" className="w-75" />
            }
          </div>
          <div className="col-md-6">
            <div className="row align-items-center h-100">
              <div className="col ml-5">
                <h1 className="display-3">Chasen Simpson</h1>
                <p className="lead ">Principal / Owner</p>
                <p>
                  <a type="email" href="mailto: chasen@latitude-48.com" className="employee-email">chasen@latitude-48.com</a>
                </p>
                <a onClick={() => this.togglePic1()} className="employee-learn">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WhoWeAre;
