import React from 'react';
import ProtectedLayoutSidebarMenu
    from "@/libs/app/components/layouts/protected/ProtectedLayoutSidebar/ProtectedLayoutSidebarMenu";
import XLogo from "@/libs/app/components/XLogo/XLogo";

const ProtectedLayoutSidebar = () => {
    return (
        <aside className={"w-[18.75rem] bg-white border-r border-zinc-200"}>
            <div className={"p-4 pb-0"}>
                <XLogo />
            </div>
            <ProtectedLayoutSidebarMenu />
        </aside>
    );
};

export default ProtectedLayoutSidebar;