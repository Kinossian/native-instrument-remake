import React, { useCallback, useState } from 'react';
import HeaderWeb from './header-web/header';

const Layout = ({ children }) => {
    const [isNavIn, setIsNavIn] = useState(false);

    const handleClick = useCallback(() => {
        setIsNavIn(!isNavIn);
    }, [isNavIn]);
    return (
        <>
            <HeaderWeb
                handleClick={handleClick}
                isNavIn={isNavIn}
            />

            <main>{children}</main>
        </>
    );
};

export default Layout;