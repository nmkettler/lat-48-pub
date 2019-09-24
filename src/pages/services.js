import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layouts';
import Services from '../components/services';
import SEO from '../components/layouts/seo';

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" keywords={[`our work`, `latitude 48`, `engineer`]} />
    <Services />
  </Layout>
);

export default ServicesPage;
