import React, { useCallback, useState } from 'react';
import HeaderWeb from './header-web/header';

const Layout = ({ children, setQuery, search, query }) => {
    const [isNavIn, setIsNavIn] = useState(false);
    const handleClick = useCallback(() => {
        setIsNavIn(!isNavIn);
    }, [isNavIn]);
    return (
        <>
            <HeaderWeb
                handleClick={handleClick}
                isNavIn={isNavIn}
                setQuery={setQuery}
                search={search}
            />

            <main>{children}</main>
        </>
    );
};

export default Layout;