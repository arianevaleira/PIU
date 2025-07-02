import React from 'react';
import './Layout.css';

const Layout = ({ children, temaEscuro }) => {
  return (
    <div className={`container ${temaEscuro ? 'escuro' : ''}`}>
        {children}
    </div>
  );
};

export default Layout;