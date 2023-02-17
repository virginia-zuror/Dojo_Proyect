import React from 'react';
import { Navigate } from 'react-router-dom';

const Layout = ({ children }) => {
  if (!localStorage.getItem('user')) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Layout;
