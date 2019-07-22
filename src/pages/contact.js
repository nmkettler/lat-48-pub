import React from 'react';
import Layout from '../components/layouts';
import Contact from '../components/contact';
import SEO from '../components/layouts/seo';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" keywords={[`contact`, `latitude 48`, `engineer`]} />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
