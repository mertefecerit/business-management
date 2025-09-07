import React from 'react';
import Styles from "./XDivider.module.scss";

interface IXDividerProps extends React.HTMLAttributes<HTMLDivElement> {
    text ?: string
}

const XDivider = (props:IXDividerProps) => {
    return (
        <div {...props} className={Styles.xDivider}>
            <div className={Styles.xDividerLine}/>
            {props.text && <span v-if="text" className={Styles.xDividerText}>{props.text}</span>}
            {props.text && <div v-if="text" className={Styles.xDividerLine}/>}
        </div>
    );
};

export default XDivider;


