import React from "react";

export interface IXTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label       ?: string;
    hint        ?: string;
    errors      ?: (string | undefined)[];
    startIcon   ?: React.ReactNode;
    endIcon     ?: React.ReactNode;
    sizing      ?: 'sm' | 'md' | 'lg';
    labelEnd    ?: React.ReactNode;
}