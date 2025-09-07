"use client";

import React, {useId} from 'react';
import {IXRadioGroupProps} from "@/libs/core/components/XRadioGroup/XRadioGroupTypes";
import styles from "./XRadioGroup.module.css";

const XRadioGroup = <T extends string | number>({options=[], errors, ...props}:IXRadioGroupProps<T>) => {
    const generatedId = useId();
    const inputId = props.id || generatedId;

    const isInvalidClass = errors && errors.length ? styles.xRadioGroupIsInvalid : '';

    return (
        <div className={`${styles.xRadioGroupWrapper} ${isInvalidClass}`}>
            {options.map((option, i) => (
                <label key={option.value || i}>
                    <input
                        {...props}
                        type={"radio"}
                        value={option.value}
                        checked={props.value === option.value}
                        disabled={props.disabled || option.disabled}
                        className={"peer"}
                    />
                    <div className={styles.xRadioGroupRadioCircle} />
                    <div className={styles.xRadioGroupRadioLabel}>
                        <span>{option.label}</span>
                        <span>{option.description}</span>
                    </div>
                </label>
            ))}
            {
                errors && <ul>
                    {errors.map((error, index) => (<li key={`${inputId}_error_${index}`}>{error}</li>))}
                </ul>
            }
        </div>
    );
};

export default XRadioGroup;