import React from 'react';
import ProtectedLayoutHeaderUserMenu from "@/libs/app/components/layouts/protected/ProtectedLayoutHeader/ProtectedLayoutHeaderUserMenu";

const ProtectedLayoutHeader = () => {
    return (
        <header className={"flex items-center justify-between gap-2 bg-white px-4 h-16 border-b border-zinc-200"}>
            <div />
            <ProtectedLayoutHeaderUserMenu />
        </header>
    );
};

export default ProtectedLayoutHeader;