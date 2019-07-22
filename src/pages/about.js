import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layouts';
import AboutUs from '../components/about-us';
import SEO from '../components/layouts/seo';

const AboutUsPage = () => (
  <Layout>
    <SEO title="About Us" keywords={[`about us`, `latitude 48`, `engineer`]} />
    <AboutUs />
  </Layout>
);

export default AboutUsPage;
