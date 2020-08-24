import React from 'react';

import Navbar from '../containers/Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
