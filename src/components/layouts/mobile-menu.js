import React, { Component } from 'react';
import MainImage from './menu/main-image';
import Links from './menu/links';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MobileMenu extends Component {
  render() {
    return (
      <header class="header mobile-header">
        <MainImage />
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><FontAwesomeIcon icon={faBars} size="1px" /></label>
        {/*<FontAwesomeIcon icon={faBars} size="6x" /> <span class="navicon"></span>*/}
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