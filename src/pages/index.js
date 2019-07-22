import React from 'react';
import { Link } from 'gatsby';
import Home from '../components/home';
import Layout from '../components/layouts';
import SEO from '../components/layouts/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`home`, `latitude 48`, `engineer`]} />
    <Home />
  </Layout>
);

export default IndexPage;
