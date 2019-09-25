import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class MenuFooterLinks extends Component {
  constructor (props) {
    super(props);

    this.state = {
      linkHovering: false,
      activeState: '',
    };

    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  hoverOn (e) {
    // console.log(e)
    this.setState({
      linkHovering: true,
      activeState: e.target.id,
    });
  }

  hoverOff (e) {
    console.log('hover off');
    this.setState({
      linkHovering: false,
      activeState: e.target.id,
    });
  }

  render () {
    const { linkHovering, activeState } = this.state;
    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <div
              onMouseEnter={(e) => this.hoverOn(e)}
              onMouseLeave={(e) => this.hoverOff(e)}
              className='nav-item soc-media-icon col-sm-4'
              id='facebook-icon'
              key='facebook-icon'>
              <a href='/contact'>
                <FontAwesomeIcon icon={faFacebook} size='2x' />
              </a>
            </div>
            <div
              onMouseEnter={(e) => this.hoverOn(e)}
              onMouseLeave={(e) => this.hoverOff(e)}
              className='nav-item soc-media-icon col-sm-4'
              id='twitter-icon'
              key='twitter-icon'>
              <a href='/contact'>
                <FontAwesomeIcon icon={faTwitter} size='2x' />
              </a>
            </div>
            <div
              onMouseEnter={(e) => this.hoverOn(e)}
              onMouseLeave={(e) => this.hoverOff(e)}
              className='nav-item soc-media-icon col-sm-4'
              id='envelope-icon'
              key='envelope-icon'>
              <a href="mailto:info@latitude-48.com?subject=Latitude 48 Question">
                <FontAwesomeIcon icon={faEnvelope} size='2x' />
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MenuFooterLinks;
