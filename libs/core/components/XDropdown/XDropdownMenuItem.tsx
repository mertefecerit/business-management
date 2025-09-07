import React from 'react';
import {IXDropdownMenuItemProps} from "@/libs/core/components/XDropdown/XDropdownTypes";
import styles from "./XDropdown.module.scss";
import useXDropdown from "@/libs/core/components/XDropdown/useXDropdown";

const XDropdownMenuItem = ({children, ...props}:IXDropdownMenuItemProps) => {

    const { setIsOpen } = useXDropdown();

    const onClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if (props.onClick) props.onClick(e);
        setIsOpen(false);
    }

    return (
        <div {...props} onClick={onClose} className={styles.xDropdownMenuItem}>
            {children}
        </div>
    );
};

export default XDropdownMenuItem;