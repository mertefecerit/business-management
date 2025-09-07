import React from "react";

const EnterKeyDown = (event:React.KeyboardEvent<HTMLInputElement>, cb:() => void) => {
    if (event.key === 'Enter') {
        cb();
    }
}

export default EnterKeyDown;