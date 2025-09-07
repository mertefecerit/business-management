import React from "react";
import {Placement} from "@floating-ui/react";

export interface IXDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    offsetValue ?: number
    placement ?: Placement
}

export interface IXDropdownTriggerProps {
    children: React.ReactNode;
}

export interface IXDropdownMenuProps {
    children: React.ReactNode;
}

export interface IXDropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}