import React, { Component } from 'react';
import MainImage from './menu/main-image';
import Links from './menu/links';

class MobileMenu extends Component {
  render() {
    return (
      <header class="header mobile-header">
        <MainImage />
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          {this.props.menuLinks.map(item =>
            <Links links={item} />
          )}
        </ul>

      </header>
    );
  }
}

export default MobileMenu;