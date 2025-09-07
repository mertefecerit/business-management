"use client";

import {IXDropdownTriggerProps} from "@/libs/core/components/XDropdown/XDropdownTypes";
import useXDropdown from "@/libs/core/components/XDropdown/useXDropdown";
import React from "react";

const XDropdownTrigger = ({ children }: IXDropdownTriggerProps) => {
    const { setIsOpen, isOpen, refs } = useXDropdown();

    return (
        <div ref={refs.setReference} onClick={() => setIsOpen(!isOpen)}>
            {children}
        </div>
    );
};

export default XDropdownTrigger;