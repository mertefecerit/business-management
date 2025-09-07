"use client";

import React from 'react';
import {AnimatePresence, motion} from "motion/react";
import styles from "@/libs/core/components/XDropdown/XDropdown.module.scss";
import useXDropdown from "@/libs/core/components/XDropdown/useXDropdown";
import {IXDropdownMenuProps} from "@/libs/core/components/XDropdown/XDropdownTypes";


const XDropdownMenu = ({ children }: IXDropdownMenuProps) => {
    const { isOpen, refs, floatingStyles } = useXDropdown();

    return (
        <AnimatePresence>
            {
                isOpen && <motion.div
                    className={styles.xDropdown}
                    ref={refs.setFloating}
                    style={floatingStyles}
                    initial={{
                        opacity: 0,
                        y: -20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    exit={{
                        opacity: 0,
                        y: -20
                    }}
                    transition={{
                        duration: 0.1,
                        ease: "easeOut"
                    }}
                >
                    {children}
                </motion.div>
            }
        </AnimatePresence>
    );
};

export default XDropdownMenu;