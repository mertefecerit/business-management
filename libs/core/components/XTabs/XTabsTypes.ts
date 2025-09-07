import React from "react";

export interface IXTabsProps {
    activeTabIndex?: number;
    tabs : {
        title: string;
        startIcon?: React.ReactNode;
        endIcon?: React.ReactNode;
        disabled?: boolean;
    }[],
    onClick:(index:number) => void,
}