"use client";

import React, {useRef, useState} from 'react';
import Styles from "./XDialog.module.scss";
import XButton from "@/libs/core/components/XButton/XButton";
import {useClickAway} from "react-use";
import {IXDialogProps} from "@/libs/core/components/XDialog/XDialogTypes";
import { AnimatePresence, motion } from 'motion/react';
import XDangerIcon from "@/libs/core/components/XIcons/XDangerIcon";
import XInfoIcon from "@/libs/core/components/XIcons/XInfoIcon";


const XDialog:React.FC<IXDialogProps> = (
    {...props}:IXDialogProps
) => {
    const [show, setShow] = useState<boolean>(true);
    const ref = useRef(null);

    useClickAway(ref, () => {
        setShow(false);
        setTimeout(() => {
            if(props.onClose) props.onClose();
        },250)
    });

    const onButtonsWithAnimationHandler = (type:'cancel' | 'confirm') => {
        setShow(false);
        setTimeout(() => {
            if(props.onCancel && type=== 'cancel') props.onCancel();
            else if(props.onConfirm && type=== 'confirm') props.onConfirm();
        },250)
    }

    const confirmButtonSeverity = {default:'primary', destructive:'destructive'}[props.type] || "primary";
    const DialogIcon:React.FC = {default:XInfoIcon, destructive:XDangerIcon}[props.type] || XInfoIcon;
    const dialogTypeClass = {default:Styles.xDialogInfo, destructive:Styles.xDialogDestructive}[props.type] || Styles.xDialogInfo;

    return (
        <AnimatePresence mode={"wait"}>
            {
                show &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className={Styles.xDialogOverlay}
                >
                    <motion.div
                        ref={ref}
                        className={`${Styles.xDialog} ${dialogTypeClass}`}
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                            y: -20
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.8,
                            y: -20
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut"
                        }}
                    >
                        <div className={Styles.xDialogHeader}>
                            <DialogIcon/>
                            {props.title}
                        </div>
                        <div className={Styles.xDialogBody}>{props.message}</div>
                        <div className={Styles.xDialogFooter}>
                            <XButton
                                severity={"tertiary"}
                                onClick={() => onButtonsWithAnimationHandler('cancel')}
                            >
                                {props.options.cancelButtonText}
                            </XButton>
                            <XButton
                                severity={confirmButtonSeverity}
                                onClick={() => onButtonsWithAnimationHandler('confirm')}
                            >
                                {props.options.confirmButtonText}
                            </XButton>
                        </div>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
};

export default XDialog;