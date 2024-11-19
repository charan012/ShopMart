import React from 'react';
import PageNav from './src/Components/Header/PageNav';
import PageFoot from './src/Components/Footer/PageFoot';


const Layouts = ({ children }) => {
  return (
    <>
    <PageNav/>
      <main>{children}</main>
    <PageFoot/>
    </>
  );
};

export default Layouts;