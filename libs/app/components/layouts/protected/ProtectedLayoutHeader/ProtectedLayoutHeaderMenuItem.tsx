"use client";

import React from 'react';

const ProtectedLayoutHeaderMenuItem = ({children}:{children:React.ReactNode}) => {
    return (
        <div className={"cursor-pointer hover:bg-zinc-100 size-8 flex items-center justify-center shadow-sm rounded-full"}>
            {children}
        </div>
    );
};

export default ProtectedLayoutHeaderMenuItem;