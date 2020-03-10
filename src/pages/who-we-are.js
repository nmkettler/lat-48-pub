import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layouts';
import WhoWeAre from '../components/who-we-are';

const WhoWeArePage = ({ data }) => (
  <Layout>
    <WhoWeAre />
  </Layout>
);

export default WhoWeArePage;
