import React from "react";
import {ChartPieSliceIcon, GearIcon, UsersIcon} from "@phosphor-icons/react";

export interface IMenuItem {
    href: string
    label: string
    icon ?:React.FC
    children? : IMenuItem[]
}


const MenuItems = () => {
    const menuItems:IMenuItem[] = [
        {
            href:'/dashboard',
            label:'Dashboard',
            icon: ChartPieSliceIcon
        },
        {
            href:'/contacts',
            label:'Contacts',
            icon: UsersIcon
        },
        {
            href:'/settings',
            label:'Settings',
            icon: GearIcon,
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
    return menuItems;
}

export default MenuItems;