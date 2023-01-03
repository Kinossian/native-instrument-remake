import React, { useCallback, useState } from 'react';
import Header from '../header';
import Navigation from '../navigation';

const Layout = ({ children }) => {
    const [isNavIn, setIsNavIn] = useState(false);

    const handleClick = useCallback(() => {
        setIsNavIn(!isNavIn);
    }, [isNavIn]);
    return (
        <>
            <Header
                handleClick={handleClick}
                isNavIn={isNavIn}
            />
            <Navigation
                isNavIn={isNavIn}
                handleClick={handleClick}
            />
            <main>{children}</main>
        </>
    );
};

export default Layout;