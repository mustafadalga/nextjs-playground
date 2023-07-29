import React from 'react';

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }:Props) => {
    return (
        <div className="bg-red-100 h-screen w-screen">
            dashboard layout
            {children}
        </div>
    );
};

export default Layout;