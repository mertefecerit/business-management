"use client"

import React, {useId} from 'react';
import Styles from "./XTextArea.module.css";
import {IXTextAreaProps} from "@/libs/core/components/XTextArea/XTextAreaTypes";



const XTextArea = ({
                        label,
                        hint,
                        errors,
                        labelEnd,
                        ...props
                    }: IXTextAreaProps) => {
    const generatedId = useId();
    const inputId = props.id || generatedId;

    const isInvalidClass = errors && errors.length ? Styles.xTextAreaIsInvalid : '';
    const disabledClass = props.disabled ? Styles.xTextAreaIsDisabled : '';

    const inputClasses = `${Styles.xTextArea} ${isInvalidClass} ${disabledClass}`;

    return (
        <div className={Styles.xTextAreaWrapper}>
            {
                label &&
                <div>
                    <label htmlFor={inputId}>
                        {label}
                        {
                            props.required && <span> *</span>
                        }
                    </label>
                    {labelEnd}
                </div>
            }
            <div className={inputClasses}>
                <textarea {...props} id={inputId} />
            </div>
            {hint && <small>{hint}</small>}
            {
                errors && <ul>
                    {errors.map((error, index) => (<li key={`${inputId}_error_${index}`}>{error}</li>))}
                </ul>
            }
        </div>
    );
};

export default XTextArea;