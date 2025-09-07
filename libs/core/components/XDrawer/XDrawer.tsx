"use client";

import React, {useRef} from 'react';
import Styles from "./XDrawer.module.css";
import {IXDrawerProps} from "@/libs/core/components/XDrawer/XDrawerTypes";
import {AnimatePresence, motion} from "motion/react";
import {useClickAway} from "react-use";

const XDrawer = ({position="right", ...props}: IXDrawerProps) => {
    const ref = useRef(null);

    useClickAway(ref, () => {
        props.onClose();
    });

    const getDrawerVariants = (position: 'left' | 'right' | 'top' | 'bottom') => {
        const drawerTransition = {
            type: 'spring' as const,
            stiffness: 300,
            damping: 30
        };

        const variants = {
            left: {
                closed: { x: '-100%', transition: drawerTransition },
                open: { x: 0, transition: drawerTransition }
            },
            right: {
                closed: { x: '100%', transition: drawerTransition },
                open: { x: 0, transition: drawerTransition }
            },
            top: {
                closed: { y: '-100%', transition: drawerTransition },
                open: { y: 0, transition: drawerTransition }
            },
            bottom: {
                closed: { y: '100%', transition: drawerTransition },
                open: { y: 0, transition: drawerTransition }
            }
        };

        return variants[position];
    };

    const overlayVariants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.2
            }
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.2
            }
        }
    };

    const drawerPosition = {
        right: Styles.xDrawerRight,
        left : Styles.xDrawerLeft,
        top : Styles.xDrawerTop,
        bottom : Styles.xDrawerBottom,
    }[position] || Styles.xDrawerRight

    return (
        <AnimatePresence>
            {props.status &&
                <motion.div
                    className={`${Styles.xDrawer} ${props.className}`}
                    variants={overlayVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                >
                    <motion.div
                        ref={ref} className={`${Styles.xDrawerContent} ${drawerPosition} ${props.contentClassNames}`}
                        variants={getDrawerVariants(position)}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        {props.children}
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
};

export default XDrawer;