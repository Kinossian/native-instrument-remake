import React from 'react';
import NavBar from '../nav';

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <main>{children}</main>
        </>
    );
};

export default Layout;