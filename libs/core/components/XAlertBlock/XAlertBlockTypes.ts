import React from "react";

export type TAlertBlockType = 'info' | 'success' | 'warning' | 'error';

export interface IXAlertBlockProps {
    status      : boolean
    type        ?: TAlertBlockType
    children    : React.ReactNode
    onClose     ?: () => void
}