import React from "react";

export interface IXRadioGroupProps<T> extends React.InputHTMLAttributes<HTMLInputElement> {
    options : {
        label       : string;
        description : string;
        value       : T;
        disabled    ?: boolean;
    }[],
    errors      ?: (string | undefined)[];
}