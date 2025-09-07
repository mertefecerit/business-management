"use client"

import React, {useId, useState} from 'react';
import Styles from "./XTextInput.module.css";
import {IXTextInputProps} from "@/libs/core/components/XTextInput/XTextInputTypes";
import {EyeIcon, EyeSlashIcon} from "@phosphor-icons/react";


const XTextInput = ({
                        sizing = 'md',
                        label,
                        hint,
                        errors,
                        startIcon,
                        labelEnd,
                        type = "text",
                        ...props
                    }: IXTextInputProps) => {
    const generatedId = useId();
    const inputId = props.id || generatedId;

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const sizeClass = {
        sm: Styles.xTextInputSmall,
        md: Styles.xTextInputMedium,
        lg: Styles.xTextInputLarge
    }[sizing] || Styles.xTextInputMedium;

    const isInvalidClass = errors && errors.length ? Styles.xTextInputIsInvalid : '';
    const disabledClass = props.disabled ? Styles.xTextInputIsDisabled : '';

    const inputClasses = `${Styles.xTextInput} ${sizeClass} ${isInvalidClass} ${disabledClass}`;

    return (
        <div className={Styles.xTextInputWrapper}>
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
                {startIcon}
                <input id={inputId} type={type === 'password' ? (showPassword ? 'text': 'password') : type} {...props}/>
                {
                    type === 'password' && (
                        !showPassword ? <EyeSlashIcon onClick={() => setShowPassword(true)} className={"hover:brightness-75 cursor-pointer"}/> :
                    <EyeIcon onClick={() => setShowPassword(false)} className={"hover:brightness-75 cursor-pointer"}/>
                    )
                }
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

export default XTextInput;