import React, { useCallback, useState } from 'react';
import Header from '../header';

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

            <main>{children}</main>
        </>
    );
};

export default Layout;