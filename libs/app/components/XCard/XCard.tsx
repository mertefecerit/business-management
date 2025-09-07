import React from 'react';
import Styles from "./XCard.module.css";

interface IXCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode
    size?: 'sm' | 'md' | 'lg' | "full"
    className?: string;
}

const XCard = ({children, size="md", ...props}:IXCardProps) => {
    const sizeClass =  {sm:Styles.xCardSmall, md:Styles.xCardMedium, lg:Styles.xCardLarge, full:Styles.xCardFull}[size] || Styles.xCardMedium;
    return (
        <div {...props} className={`${Styles.xCard} ${sizeClass} ${props.className}`} >
            {children}
        </div>
    );
};

export default XCard;