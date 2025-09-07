import React from 'react';

const AuthLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className={"h-dvh p-4 flex flex-col items-center justify-center"}>
            {children}
        </div>
    );
};

export default AuthLayout;