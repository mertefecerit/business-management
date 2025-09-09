import React from 'react';
import ProtectedLayoutSidebarMenu
    from "@/libs/app/components/layouts/protected/ProtectedLayoutSidebar/ProtectedLayoutSidebarMenu";

const ProtectedLayoutSidebar = () => {
    return (
        <aside className={"w-[18.75rem] bg-zinc-800 border-r border-zinc-700"}>
            <ProtectedLayoutSidebarMenu />
        </aside>
    );
};

export default ProtectedLayoutSidebar;