import React from 'react';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ books }) => {
  return (
    <>
      <Header books={books} />
      <Body />
      <Footer />
    </>
  );
};

export default Layout;
