"use client";

import React from 'react';
import {IXToggleProps} from "@/libs/core/components/XToggle/XToggleTypes";
import styles from "./XToggle.module.css";

const XToggle = (props:IXToggleProps) => {
    return (
        <label className={styles.wrapper}>
            <input type="checkbox" {...props}/>
            <div>
                <span></span>
            </div>
        </label>
    );
};

export default XToggle;