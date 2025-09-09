import React from 'react';
import ProtectedLayoutHeader from "@/libs/app/components/layouts/protected/ProtectedLayoutHeader/ProtectedLayoutHeader";
import ProtectedLayoutMain from "@/libs/app/components/layouts/protected/ProtectedLayoutMain";

const ProtectedLayoutWrapper = ({children}:{children:React.ReactNode}) => {
    return (
        <div className={"grid grid-rows-[auto_1fr] overflow-hidden"}>
            <ProtectedLayoutHeader />
            <ProtectedLayoutMain>
                {children}
            </ProtectedLayoutMain>
        </div>
    );
};

export default ProtectedLayoutWrapper;