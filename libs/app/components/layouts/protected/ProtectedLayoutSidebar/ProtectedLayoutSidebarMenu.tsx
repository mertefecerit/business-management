"use client";

import React from 'react';
import ProtectedLayoutSidebarMenuItem from "@/libs/app/components/layouts/protected/ProtectedLayoutSidebar/ProtectedLayoutSidebarMenuItem";
import MenuItems from "@/libs/app/components/layouts/protected/ProtectedLayoutSidebar/MenuItems";

const ProtectedLayoutSidebarMenu = () => {

    const menuItems = MenuItems();

    return (
        <div className={"flex flex-col gap-[1px] overflow-y-auto h-full"}>
            {
                menuItems.map((menuItem, i) => (
                    <ProtectedLayoutSidebarMenuItem item={menuItem} key={menuItem.href} />
                ))
            }
        </div>
    );
};

export default ProtectedLayoutSidebarMenu;