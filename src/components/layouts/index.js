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
            workTile {
              name
              description
              number
            }
            menuFooterLinks {
              socIcon
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
                  <Header
                    siteTitle={data.site.siteMetadata.title}
                    menuLinks={data.site.siteMetadata.menuLinks}
                    menuFooterLinks={data.site.siteMetadata.menuFooterLinks} />
                </nav>
              </MediaQuery>
              <MediaQuery query="(max-width: 765px)">
                <MobileMenu siteTitle={data.site.siteMetadata.title}
                  menuLinks={data.site.siteMetadata.menuLinks}
                  menuFooterLinks={data.site.siteMetadata.menuFooterLinks} />
              </MediaQuery>
              <main className='col-md-10 ml-sm-auto col-lg-10 px-0 lat-main'
                workTile={data.site.siteMetadata.workTile}>{children}</main>
            </div>
          </div>
          <footer>
           Copyright © 2019 Latitude 48 - All Rights Reserved.
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
