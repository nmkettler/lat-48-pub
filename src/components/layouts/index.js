/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import '../../utils/files/bootstrap.min.css';
import Header from './header';
import MobileMenu from './mobile-menu';
import MediaQuery from 'react-responsive';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div className='lat-main-wrapper'>
          <div className='container-fluid'>
            <div className='row'>
              <MediaQuery query="(min-device-width: 1224px)">
                <nav className='col-md-2 d-none d-md-block sidebar'>
                  <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
                </nav>
              </MediaQuery>
              <MediaQuery query="(max-width: 765px)">
                <MobileMenu siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
              </MediaQuery>
              <main className='col-md-10 ml-sm-auto col-lg-10 px-0 lat-main'>{children}</main>
            </div>
          </div>
          <footer>
           This is the footer
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

// <nav className='col-md-2 d-none d-md-block sidebar'>
//   <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
// </nav>
