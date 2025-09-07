import AuthSignInService from "@/libs/auth/services/AuthSignInService";
import AuthSignInValidation from "@/libs/auth/validations/AuthSignInValidation";
import * as z from "zod";
import {AxiosError} from "axios";
import {useAppDispatch, useAppSelector} from "@/libs/app/store";
import {
    setForm,
    setIsPending,
    setErrorBag,
    clearErrorBag,
    clearIsPending,
    setShowPasswordForm,
} from "@/libs/auth/slices/AuthSignInSlice";
import {createAuthSignInCheckFormEntity} from "@/libs/auth/entities/AuthSignInEntity";

const useAuthSignInCheck = () => {

    const dispatch = useAppDispatch()
    const state = useAppSelector((reducer) => reducer.AuthWithPasswordCheckLogin);
    const {signInCheckService} = AuthSignInService();
    const {signInCheckFormValidation} = AuthSignInValidation();


    const loginCheckHandler = async () => {
        dispatch(clearErrorBag());
        dispatch(clearIsPending());
        const validated = signInCheckFormValidation(state.form);
        if (!validated.success) {
            dispatch(setErrorBag(z.flattenError(validated.error).fieldErrors))
        }else {
            try {
                dispatch(setIsPending(true));
                await signInCheckService(createAuthSignInCheckFormEntity(validated.data));
                dispatch(setForm(validated.data))
                dispatch(setShowPasswordForm(true))
            }catch (error){
                if (error instanceof AxiosError) {
                    if(error.response && error.response?.data?.errors && error.response?.data?.message){
                        dispatch(setErrorBag(error.response?.data?.errors));
                    }
                }
            }finally {
                dispatch(clearIsPending());
            }
        }
    }


    return {
        loginCheckHandler,
    }
}

export default useAuthSignInCheck;