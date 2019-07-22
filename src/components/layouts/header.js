import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import MainImage from './menu/main-image';
import Links from './menu/links';
import './layout.css';

class Header extends Component {
  render () {
    return (
      <header>
        <div class="sidebar-sticky lat-sidebar-wrapper">
          <ul className='nav flex-column text-center'>
            <li className='nav-item'><MainImage /></li>
            <div id='nav-links'>
              {this.props.menuLinks.map(item =>
                <Links links={item} />
              )}
            </div>
          </ul>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
