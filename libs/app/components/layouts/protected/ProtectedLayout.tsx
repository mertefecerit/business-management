import React from 'react';
import ProtectedLayoutSidebar from "@/libs/app/components/layouts/protected/ProtectedLayoutSidebar/ProtectedLayoutSidebar";
import ProtectedLayoutWrapper from "@/libs/app/components/layouts/protected/ProtectedLayoutWrapper";

const ProtectedLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className={"h-dvh overflow-hidden grid grid-cols-[auto_1fr]"}>
            <ProtectedLayoutSidebar />
            <ProtectedLayoutWrapper>
                {children}
            </ProtectedLayoutWrapper>
        </div>
    );
};

export default ProtectedLayout;