import React from 'react';
import ProtectedLayoutSidebarMenuItem
    from "@/libs/app/components/layouts/protected/ProtectedLayoutSidebar/ProtectedLayoutSidebarMenuItem";


export interface IMenuItem {
    href: string
    label: string
    children? : IMenuItem[]
}

const ProtectedLayoutSidebarMenu = () => {

    const menuItems:IMenuItem[] = [
        {
            href:'/dashboard',
            label:'Dashboard'
        },
        {
            href:'/contacts',
            label:'Contacts'
        },
        {
            href:'/settings',
            label:'Settings',
            children:[
                {
                    href:'/settings/account',
                    label: 'Account'
                },
                {
                    href:'/settings/stock',
                    label: 'Stock'
                }
            ]
        },
    ]

    return (
        <div className={"flex flex-col gap-[1px]"}>
            {
                menuItems.map((menuItem, i) => (
                    <ProtectedLayoutSidebarMenuItem item={menuItem} key={menuItem.href} />
                ))
            }
        </div>
    );
};

export default ProtectedLayoutSidebarMenu;