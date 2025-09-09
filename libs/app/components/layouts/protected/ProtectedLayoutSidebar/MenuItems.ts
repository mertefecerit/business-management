export interface IMenuItem {
    href: string
    label: string
    children? : IMenuItem[]
}


const MenuItems = () => {
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
    return menuItems;
}

export default MenuItems;