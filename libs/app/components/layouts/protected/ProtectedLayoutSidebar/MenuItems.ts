import React from "react";
import {
    CashRegisterIcon,
    ChartDonutIcon,
    ChartPieSliceIcon,
    CoinsIcon,
    FactoryIcon,
    GearIcon,
    PackageIcon,
    SlidersIcon,
    UsersFourIcon,
    UsersIcon
} from "@phosphor-icons/react";

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
            href:'/customer-management',
            label:'Customer Management',
            icon: UsersIcon,
            children: [
                {href:'/customer-management/leads', label:'Leads'},
                {href:'/customer-management/customers', label:'Customers'},
                {href:'/customer-management/contacts', label:'Contacts'},
                {href:'/customer-management/opportunities', label:'Opportunities'},
                {href:'/customer-management/activities', label:'Activities'},
                {href:'/customer-management/pipeline', label:'Pipeline'},
            ]
        },
        {
            href:'/sales-marketing',
            label:'Sales Marketing',
            icon: CoinsIcon,
            children: [
                {href:'/sales-marketing/quotes', label:'Quotes'},
                {href:'/sales-marketing/sales-order', label:'Sales Orders'},
                {href:'/sales-marketing/invoices', label:'Invoices'},
                {href:'/sales-marketing/campaigns', label:'Campaigns'},
                {href:'/sales-marketing/email-marketing', label:'Email Marketing'},
                {href:'/sales-marketing/price-lists', label:'Price Lists'},
            ]
        },
        {
            href:'/procurement',
            label:'Procurement',
            icon: GearIcon,
            children: [
                {href:'/procurement/purchase-requests', label:'Purchase Requests'},
                {href:'/procurement/purchase-order', label:'Purchase Order'},
                {href:'/procurement/supplier', label:'Supplier'},
                {href:'/procurement/vendor-management', label:'Vendor Management'},
                {href:'/procurement/receiving', label:'Receiving'},
            ]
        },
        {
            href:'/inventory-warehouse',
            label:'Inventory & Warehouse',
            icon: PackageIcon,
            children: [
                {href:'/inventory-warehouse/stock-overview', label:'Stock Overview'},
                {href:'/inventory-warehouse/stock-movements', label:'Stock Movements'},
                {href:'/inventory-warehouse/warehouses', label:'Warehouses'},
                {href:'/inventory-warehouse/inventory-adjustments', label:'Inventory Adjustments'},
                {href:'/inventory-warehouse/product-catalog', label:'Product Catalog'},
            ]
        },
        {
            href:'/manufacturing',
            label:'Manufacturing',
            icon: FactoryIcon,
            children: [
                {href:'/manufacturing/product-planning', label:'Product Planning'},
                {href:'/manufacturing/work-orders', label:'Work Orders'},
                {href:'/manufacturing/bill-of-materials', label:'Bill of Materials'},
                {href:'/manufacturing/quality-control', label:'Quality Control'},
                {href:'/manufacturing/equipment-management', label:'Equipment Management'},
            ]
        },
        {
            href:'/finance-accounting',
            label:'Finance & Accounting',
            icon: CashRegisterIcon,
            children: [
                {href:'/finance-accounting/chart-of-accounts', label:'Chart of Accounts'},
                {href:'/finance-accounting/journal-entries', label:'Journal Entries'},
                {href:'/finance-accounting/financial-reports', label:'Financial Reports'},
                {href:'/finance-accounting/tax-management', label:'Tax Management'},
                {href:'/finance-accounting/bank-reconciliation', label:'Bank Reconciliation'},
            ]
        },
        {
            href:'/human-resources',
            label:'Human Resources',
            icon: UsersFourIcon,
            children: [
                {href:'/human-resources/employees', label:'Employees'},
                {href:'/human-resources/payroll', label:'Payroll'},
                {href:'/human-resources/attendance', label:'Attendance'},
                {href:'/human-resources/leave-management', label:'Leave Management'},
                {href:'/human-resources/performance', label:'Performance'},
            ]
        },
        {
            href:'/reports-analytics',
            label:'Reports & Analytics',
            icon: ChartDonutIcon,
            children: [
                {href:'/reports-analytics/sales-reports', label:'Sales Reports'},
                {href:'/reports-analytics/financial-reports', label:'Financial Reports'},
                {href:'/reports-analytics/inventory-reports', label:'Inventory Reports'},
                {href:'/reports-analytics/custom-reports', label:'Custom Reports'},
                {href:'/reports-analytics/data-analytics', label:'Data Analytics'},
            ]
        },
        {
            href:'/administration',
            label:'Administration',
            icon: SlidersIcon,
            children:[
                {href:'/administration/system-settings', label: 'System Settings'},
                {href:'/administration/user-management', label: 'User Management'},
                {href:'/administration/permissions', label: 'Permissions'},
                {href:'/administration/data-import-export', label: 'Data Import/Export'},
                {href:'/administration/audit-logs', label: 'Audit Logs'}
            ]
        },
    ]
    return menuItems;
}

export const FlattenMenuItems = (items: IMenuItem[]): IMenuItem[] => {
    const result: IMenuItem[] = [];

    items.forEach(item => {
        // Ana item'i ekle
        result.push(item);

        // Children varsa onları da ekle
        if (item.children && item.children.length > 0) {
            result.push(...item.children);
        }
    });

    return result;
};

export default MenuItems;