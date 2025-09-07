"use client";

import React from 'react';
import styles from './XModal.module.css';
import {IXModalProps} from "@/libs/core/components/XModal/XModalTypes";
import {XIcon} from "@phosphor-icons/react";
import {AnimatePresence, motion} from "motion/react";
import {useKey} from "react-use";

const XModal = ({size='md', ...props}:IXModalProps) => {
    const sizeClass =  {sm:styles.xModalSmall, md:styles.xModalMedium, lg:styles.xModalLarge}[size] || styles.xModalMedium;

    const onCloseHandler = (event?:any) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        props.onClose();
    }

    const handleContentClick = (event: React.MouseEvent) => {
        event.stopPropagation(); // Event bubbling'i engelle
    }

    useKey('Escape', (event) => {
        if (props.status) onCloseHandler();
    },{},[props.status])


    return (
        <AnimatePresence>
            {
                props.status &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    onClick={onCloseHandler}
                    className={`${styles.xModalOverlay}`}
                >
                    <motion.div
                        className={`${styles.xModal} ${sizeClass}`}
                        onClick={handleContentClick}
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut"
                        }}
                    >
                        <div className={styles.xModalCloseIcon} onClick={onCloseHandler}>
                            <XIcon />
                        </div>
                        <div>
                            {props.children}
                        </div>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
};

export default XModal;