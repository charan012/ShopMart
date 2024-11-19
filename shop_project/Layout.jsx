import React from 'react';
import Topheader from './src/Components/Header/Topheader';
import Navbar from './src/Components/Header/Navbar';
import Footer from './src/Components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Topheader/>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;