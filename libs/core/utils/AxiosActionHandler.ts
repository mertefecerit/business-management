import {AxiosError} from "axios";

interface IAxiosActionHandlerParams<T = unknown> {
    func:() => Promise<void>;
    pendingControl ?: IPendingControl
    errorBagControl ?: IErrorBagControl<T>
    errorMessage ?: {
        func?: () => void;
    } & IMessageControl
}

const AxiosActionHandler = async <T>(params:IAxiosActionHandlerParams<T>) => {
    try {
        if(params.pendingControl) params.pendingControl.setIsPending(true);
        await params.func()
    }catch(error){
        if (error instanceof AxiosError) {

            if(error.response){

                if(error.response?.data?.errors){
                    if(params.errorBagControl) params.errorBagControl.setErrorBag(error.response.data.errors);
                }

                if (error.response?.data?.message) {
                    if(params.errorMessage) params.errorMessage.setMessage(error.response.data.message);
                }


            }else{
                if(params.errorMessage) params.errorMessage.setMessage("Request Failed");
            }
        }else{
            if(params.errorMessage) params.errorMessage.setMessage("Something went wrong");
        }
        if (params.errorMessage?.func) params.errorMessage.func();
    }finally {
        if(params.pendingControl) params.pendingControl.setIsPending(false);
    }
}

export default AxiosActionHandler;