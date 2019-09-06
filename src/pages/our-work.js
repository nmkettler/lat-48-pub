import React, { useReducer } from 'react';
import {
  Context,
  initialState,
  reducer,
} from '../store.js';
import Layout from '../components/layouts';
import OurWork from '../components/our-work';
import SEO from '../components/layouts/seo';
import { StaticQuery, graphql } from 'gatsby';

// import React from 'react';

const OurWorkPage = () => {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <StaticQuery
      query={graphql`
      query WorkTileQuery {
        site {
          siteMetadata {
            workTile {
              name
              description
              number
            }
          }
        }
      }
    `}
      render={data => (
        <>
          <Context.Provider value={{ store, dispatch }}>
            <Layout>
              <SEO title="Our Work" keywords={[`our work`, `latitude 48`, `engineer`]} />
              <OurWork workTile={data.site.siteMetadata.workTile} />
            </Layout>
          </Context.Provider>
        </>
      )}
    />
  );
};

export default OurWorkPage;
