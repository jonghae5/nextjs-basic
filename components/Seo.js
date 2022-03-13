import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
const Seo = ({ title }) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};

export default Seo;
