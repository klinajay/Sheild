// pages/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>Women's Safety App</h1>
      {/* Here you can add a navbar or other components that you want to share across routes */}
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
};

export default Layout;
