import React from "react";

export interface IXTextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    label       ?: string;
    hint        ?: string;
    errors      ?: (string | undefined)[];
    labelEnd    ?: React.ReactNode;
}