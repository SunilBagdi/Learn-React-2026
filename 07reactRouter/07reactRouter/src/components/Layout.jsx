import React from 'react'
import Header from './Header';
import Footer from './Footer';

import { Outlet } from 'react-router';
// Outlet ki help se chije same rhti hai jes 
// Header or Footer same rhege but unke bich me chije change hoti rhygi

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout