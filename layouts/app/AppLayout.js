import React from "react";
import Head from 'next/head';
import Header from "./Header";
import Footer from "./Footer";


const AppLayout = ({title, desc, children }) => {

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={desc ? desc + " - MedMarket Online Shopping Market" : "MedMarket Online Shopping Market"} />
        <meta name="author" content="medmarket | meka" />
        <title>{title ? title + " - MedMarket Online Shopping Market" : "MedMarket Online Shopping Market"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
