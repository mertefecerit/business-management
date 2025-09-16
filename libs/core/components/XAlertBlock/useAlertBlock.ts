import {useState} from "react";
import {IXAlertBlockHook} from "@/libs/core/components/XAlertBlock/XAlertBlockTypes";

const useAlertBlock = () => {

    const [alertBlock, setAlertBlock] = useState<IXAlertBlockHook>({
        type: 'info',
        message: '',
        status: false
    })

    const showAlertBlock = (message:IXAlertBlockHook['message'], type:IXAlertBlockHook['type']) => {
        setAlertBlock({
            message,
            type,
            status: true
        })
    }

    const hideAlertBlock = () => {
        setAlertBlock(prev => ({
            ...prev,
            status: false,
        }));
    }

    const updateAlertBlock = (updates: Partial<IXAlertBlockHook>) => {
        setAlertBlock(prev => ({
            ...prev,
            ...updates,
        }));
    };

    return {
        alertBlock,
        setAlertBlock,
        showAlertBlock,
        hideAlertBlock,
        updateAlertBlock
    }
}

export default useAlertBlock