import React from "react";

export interface IXButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children        : React.ReactNode;
    size            ?: 'sm' | 'md' | 'lg';
    severity        ?: string | 'primary' | 'secondary' | 'tertiary' | 'destructive';
    isProcessing    ?: boolean;
    className       ?: string;
}