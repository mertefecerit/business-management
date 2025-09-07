import useForm from "@/libs/core/hooks/useForm";
import {createAuthForgotPasswordEntity} from "@/libs/auth/entities/AuthForgotPasswordEntity";
import {useState} from "react";
import {IAuthForgotPasswordForm} from "@/libs/auth/types/AuthForgotPasswordTypes";
import {AxiosError} from "axios";
import AuthForgotPasswordService from "@/libs/auth/services/AuthForgotPasswordService";
import {useRouter} from "next/navigation";
import AuthForgotPasswordValidation from "@/libs/auth/validations/AuthForgotPasswordValidation";
import * as z from "zod";
const useAuthForgotPassword = () => {

    const router = useRouter();
    const {forgotPasswordValidation} = AuthForgotPasswordValidation();
    const {forgotPasswordService} = AuthForgotPasswordService();
    const {values:form, handleChange:setForm, reset} = useForm<IAuthForgotPasswordForm>(createAuthForgotPasswordEntity());
    const [isPending, setIsPending] = useState<boolean>(false);
    const [errorBag, setErrorBag] = useState<TErrorBag<IAuthForgotPasswordForm>>({});

    const onForgotPasswordHandler = async () => {
        setIsPending(false);
        setErrorBag({});
        const validated = forgotPasswordValidation(form);
        if (!validated.success) {
            setErrorBag(z.flattenError(validated.error).fieldErrors)
        }else {
            try {
                setIsPending(true);
                const res = await forgotPasswordService(form);
                router.push(`/auth/sign-in?message=${encodeURIComponent(res.message)}`)
            }catch (error) {
                if (error instanceof AxiosError) {
                    if(error.response && error.response?.data?.errors && error.response?.data?.message){
                        setErrorBag(error.response?.data?.errors);
                    }
                }
            }finally {
                setIsPending(false);
            }
        }
    }

    const resetAll = () => {
        reset()
        setIsPending(false);
        setErrorBag({});
    }

    return {
        onForgotPasswordHandler,
        form,
        setForm,
        resetAll,
        isPending,
        errorBag
    }
}

export default useAuthForgotPassword;