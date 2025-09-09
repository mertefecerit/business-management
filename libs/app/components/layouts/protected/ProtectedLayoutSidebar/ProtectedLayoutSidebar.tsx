import React from 'react';
import ProtectedLayoutSidebarMenu
    from "@/libs/app/components/layouts/protected/ProtectedLayoutSidebar/ProtectedLayoutSidebarMenu";
import XLogo from "@/libs/app/components/XLogo/XLogo";

const ProtectedLayoutSidebar = () => {
    return (
        <aside className={"w-[18.75rem] bg-white border-r border-zinc-200 grid grid-rows-[auto_1fr] overflow-hidden"}>
            <div className={"p-4 text-center"}>
                <XLogo />
                <small className={"text-zinc-400 font-medium"}>Business Management App</small>
            </div>
            <ProtectedLayoutSidebarMenu />
        </aside>
    );
};

export default ProtectedLayoutSidebar;