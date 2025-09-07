"use client";

import React, {useRef, useState} from 'react';
import {IXDropdownProps} from "@/libs/core/components/XDropdown/XDropdownTypes";
import styles from "./XDropdown.module.css";
import { XDropdownContext } from "@/libs/core/components/XDropdown/useXDropdown";
import XDropdownMenu from "@/libs/core/components/XDropdown/XDropdownMenu";
import XDropdownTrigger from "@/libs/core/components/XDropdown/XDropdownTrigger";
import { useFloating } from '@floating-ui/react';
import {autoUpdate, flip, offset, shift} from '@floating-ui/dom';
import {useClickAway} from "react-use";
import XDropdownMenuItem from "@/libs/core/components/XDropdown/XDropdownMenuItem";

const XDropdown = ({children, placement="bottom-start", offsetValue=10, ...props} :IXDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    const {refs, floatingStyles} = useFloating({
        placement,
        strategy: 'fixed',
        middleware: [
            offset({
                mainAxis: offsetValue,
                crossAxis:0
            }),
            flip(),
            shift(),
        ],
        transform: false,
        whileElementsMounted: autoUpdate,
    });
    useClickAway(wrapperRef, () => setIsOpen(false))


    return (
        <XDropdownContext.Provider value={{ isOpen, setIsOpen, refs, floatingStyles }}>
            <div {...props} className={styles.xDropdownWrapper} ref={wrapperRef}>
                {children}
            </div>
        </XDropdownContext.Provider>
    );
};

XDropdown.MenuItem = XDropdownMenuItem
XDropdown.Trigger = XDropdownTrigger;
XDropdown.Menu = XDropdownMenu;

export default XDropdown;

