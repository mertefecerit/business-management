"use client";

import React, {useId} from 'react';
import styles from './XTabs.module.css';
import {IXTabsProps} from "@/libs/core/components/XTabs/XTabsTypes";

const XTabs = (props:IXTabsProps) => {
    const generatedId = useId();

    const activeTabClass = (i:number):string => {
        return props.activeTabIndex === i ? styles.xTabActive : ''
    }

    const disabledTabClass = (i:number):string => {
        return props.tabs[i].disabled ? styles.xTabDisabled : ''
    }


    const onTabChangeHandler = (i:number) => {
        if(props.tabs[i].disabled) return;
        props.onClick(i);
    }



    return (
        <div className={styles.xTabs}>
            {
                props.tabs.map((tab, i) => (
                    <div
                        key={`tab_${generatedId}_${i}`}
                        className={`${styles.xTab} ${activeTabClass(i)} ${disabledTabClass(i)}`}
                        onClick={() => onTabChangeHandler(i)}
                    >
                        {tab.startIcon} <span>{tab.title}</span> {tab.endIcon}
                    </div>
                ))
            }
        </div>
    );
};


export default XTabs;