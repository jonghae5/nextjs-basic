import React from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

const _app = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default _app;
