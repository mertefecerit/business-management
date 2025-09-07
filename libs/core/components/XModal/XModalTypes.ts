import React from "react";

export interface IXModalProps {
    status : boolean
    children: React.ReactNode
    onClose: () => void
    size ?: 'sm' | 'md' | 'lg'
}