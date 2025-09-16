import {AxiosError} from "axios";

interface IAxiosActionHandlerParams<T = unknown> {
    func            :() => Promise<void>;
    pendingControl  ?: IPendingControl
    onError         ?: (errors?:Record<keyof T, string[]>, message?:string) => void
}

const AxiosActionHandler = async <T>(params:IAxiosActionHandlerParams<T>) => {
    try {
        if(params.pendingControl) params.pendingControl.setIsPending(true);
        await params.func()
    }catch(error){
        if (error instanceof AxiosError) {
            if(error.response && params.onError){
                params.onError(error.response?.data?.errors, error.response?.data?.message)
            }
        }else{
            if (params.onError) params.onError(undefined, "Something went wrong");
        }
    }finally {
        if(params.pendingControl) params.pendingControl.setIsPending(false);
    }
}

export default AxiosActionHandler;