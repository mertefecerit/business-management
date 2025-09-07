"use client";

import React, {createContext, useContext} from "react";
import {ExtendedRefs, ReferenceType} from "@floating-ui/react";

interface XDropdownContextType {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    refs: {
        reference: React.MutableRefObject<ReferenceType | null>
        floating: React.MutableRefObject<HTMLElement | null>
        setReference: (node: (ReferenceType | null)) => void
        setFloating: (node: (HTMLElement | null)) => void
    } & ExtendedRefs<ReferenceType>
    floatingStyles: React.CSSProperties;
}

export const XDropdownContext = createContext<XDropdownContextType | undefined>(undefined);

const useXDropdown = () => {
    const context = useContext(XDropdownContext);
    if (!context) {
        throw new Error('XDropdown components must be used within XDropdown');
    }
    return context;
};

export default useXDropdown;