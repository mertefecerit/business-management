import React from "react";

export interface IXDrawerProps extends React.HTMLAttributes<HTMLDivElement> {
    children : React.ReactNode;
    status : boolean;
    position ?: 'right' | 'left' | 'top' | 'bottom'
    onClose : () => void;
    contentClassNames?: string;
}