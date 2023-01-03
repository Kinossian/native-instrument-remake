import React from 'react';
import Link from 'next/link';

function CustomLink({ href, children, handleClick }) {
    return (
        <Link
            href={href}
            onClick={handleClick}
        >
            {children}
        </Link>
    );
}

export default CustomLink;