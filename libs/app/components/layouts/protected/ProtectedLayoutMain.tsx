import React from 'react';

const ProtectedLayoutMain = ({children}:{children:React.ReactNode}) => {
    return (
        <main className={"overflow-y-auto"}>
            {children}
        </main>
    );
};

export default ProtectedLayoutMain;