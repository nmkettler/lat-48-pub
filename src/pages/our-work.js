import React from 'react';
import Layout from '../components/layouts';
import OurWork from '../components/our-work';
import SEO from '../components/layouts/seo';

const OurWorkPage = () => {
  return (
    <Layout>
      <SEO title="Our Work" keywords={[`our work`, `latitude 48`, `engineer`]} />
      <OurWork />
    </Layout>
  );
};

export default OurWorkPage;
