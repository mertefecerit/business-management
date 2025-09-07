"use client";

import React from 'react';
import {useMemo} from "react"
import Styles from "./XAlertBlock.module.css";
import {IXAlertBlockProps} from "@/libs/core/components/XAlertBlock/XAlertBlockTypes";
import XCloseIcon from "@/libs/core/components/XIcons/XCloseIcon";
import XDangerIcon from "@/libs/core/components/XIcons/XDangerIcon";
import XInfoIcon from "@/libs/core/components/XIcons/XInfoIcon";
import XSuccessIcon from "@/libs/core/components/XIcons/XSuccessIcon";
import XWarningIcon from "@/libs/core/components/XIcons/XWarningIcon";
import {AnimatePresence, motion} from "motion/react"

const XAlertBlock = ({type = "info", ...props}: IXAlertBlockProps) => {

    const {severity, IconComponent} = useMemo(() => {
        const severityMap = {
            info: Styles.xAlertBlockInfo,
            warning: Styles.xAlertBlockWarning,
            error: Styles.xAlertBlockError,
            success: Styles.xAlertBlockSuccess,
        };

        const iconMap = {
            info: XInfoIcon,
            warning: XWarningIcon,
            error: XDangerIcon,
            success: XSuccessIcon,
        };

        return {
            severity: severityMap[type] || Styles.xAlertBlockInfo,
            IconComponent: iconMap[type] || XInfoIcon
        };
    }, [type]);

    const onCloseHandler = () => {
        if (props.onClose) props.onClose();
    }

    return (
        <AnimatePresence>
            {
                props.status &&
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.9}}
                    transition={{duration: 0.2, ease: "easeInOut"}}
                    className={`${Styles.xAlertBlock} ${severity}`}>
                    <div className={Styles.xAlertBlockMessage}>
                        <div className={Styles.xAlertSeverityIcons}>
                            <IconComponent/>
                        </div>
                        <div>
                            {props.children}
                        </div>
                    </div>
                    {props.onClose &&
                        <div className={Styles.xAlertCloseIcon} onClick={onCloseHandler}>
                            <XCloseIcon/>
                        </div>
                    }
                </motion.div>
            }
        </AnimatePresence>
    );
};

export default XAlertBlock;