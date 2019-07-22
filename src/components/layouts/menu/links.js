import React, { Component } from 'react';
import { Link } from 'gatsby';
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Links extends Component {
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
    const { links } = this.props;

    return (
      <React.Fragment>
        <li
          onMouseEnter={(e) => this.hoverOn(e)}
          onMouseLeave={(e) => this.hoverOff(e)}
          className='nav-item'
          id={links.link}
          key={links.link}>
          <AniLink
            className={linkHovering && activeState === links.link ? 'over' : ''}
            fade
            to={links.link}>
            {links.name}
          </AniLink>
        </li>
      </React.Fragment>
    );
  }
}

export default Links;
