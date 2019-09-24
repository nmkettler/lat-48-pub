import React from 'react';
import { Link } from 'gatsby';
import logo from '../../../images/main-lat-img.png';
import TransitionLink from 'gatsby-plugin-transition-link';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const MainImage = () => {
  return (
    <React.Fragment>
      <AniLink fade to='/'>
        <img className='lat-logo' src={logo} />
      </AniLink>
    </React.Fragment>
  );
};

export default MainImage;
