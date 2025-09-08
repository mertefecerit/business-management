import React from 'react';
import ProtectedLayout from "@/libs/app/components/layouts/protected/ProtectedLayout";

const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <ProtectedLayout>
            {children}
        </ProtectedLayout>
    );
};

export default Layout;