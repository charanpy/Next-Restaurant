import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className='myContainer m-auto'>
      <Header />
      <main className='flex flex-col'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
