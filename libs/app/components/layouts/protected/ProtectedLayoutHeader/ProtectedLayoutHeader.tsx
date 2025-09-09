import React from 'react';
import ProtectedLayoutHeaderUserMenu from "@/libs/app/components/layouts/protected/ProtectedLayoutHeader/ProtectedLayoutHeaderUserMenu";
import ProtectedLayoutHeaderMenu
    from "@/libs/app/components/layouts/protected/ProtectedLayoutHeader/ProtectedLayoutHeaderMenu";

const ProtectedLayoutHeader = () => {
    return (
        <header className={"flex items-center justify-between gap-2 bg-white px-4 h-16 border-b border-zinc-200"}>
            <div />
            <div className={"flex items-center gap-2"}>
                <ProtectedLayoutHeaderMenu />
                <ProtectedLayoutHeaderUserMenu />
            </div>
        </header>
    );
};

export default ProtectedLayoutHeader;