"use client"

import React from 'react';
import Styles from "./XButton.module.css";
import SpinnerIcon from './icons/SpinnerIcon';
import {IXButtonProps} from "@/libs/core/components/XButton/XButtonTypes";

const XButton = ({children, size='sm', severity='primary', isProcessing=false, className="", ...props}:IXButtonProps) => {

    const sizeClass =  {sm:Styles.xButtonSmall, md:Styles.xButtonMedium, lg:Styles.xButtonLarge}[size] || Styles.xButtonMedium;
    const severityClass =  {primary:Styles.xButtonPrimary, secondary:Styles.xButtonSecondary, tertiary:Styles.xButtonTertiary, destructive:Styles.xButtonDestructive}[severity] || Styles.xButtonMedium;

    return (
        <button
            {...props}
            role={"button"}
            className={`${Styles.xButton} ${sizeClass} ${severityClass} ${(props.disabled || isProcessing) && Styles.xButtonDisabled} ${className}`}
            disabled={props.disabled || isProcessing}
        >
            <div className={Styles.xButtonChildrenWrapper}>
                {isProcessing && <SpinnerIcon />}
                {children}
            </div>
        </button>
    );
};

export default XButton;