import React from 'react';
import ProtectedLayoutSideBar from "@/libs/app/components/layouts/protected/ProtectedLayoutSideBar";
import ProtectedLayoutWrapper from "@/libs/app/components/layouts/protected/ProtectedLayoutWrapper";

const ProtectedLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className={"h-dvh overflow-hidden grid grid-cols-[auto_1fr]"}>
            <ProtectedLayoutSideBar />
            <ProtectedLayoutWrapper>
                {children}
            </ProtectedLayoutWrapper>
        </div>
    );
};

export default ProtectedLayout;