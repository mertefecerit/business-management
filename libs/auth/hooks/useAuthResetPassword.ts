import {useRouter} from "next/navigation";
import AuthResetPasswordValidation from "@/libs/auth/validations/AuthResetPasswordValidation";
import AuthResetPasswordService from "@/libs/auth/services/AuthResetPasswordService";
import useForm from "@/libs/core/hooks/useForm";
import {IAuthResetPasswordForm} from "@/libs/auth/types/AuthResetPasswordTypes";

import {useState} from "react";
import * as z from "zod";
import {AxiosError} from "axios";
import {createAuthResetPasswordFormEntity} from "@/libs/auth/entities/AuthResetPasswordEntity";

const useAuthResetPassword = () => {

    const router = useRouter();
    const {resetPasswordFormValidationCheck} = AuthResetPasswordValidation();
    const {resetPasswordService} = AuthResetPasswordService();
    const {values:form, handleChange:setForm, reset} = useForm<IAuthResetPasswordForm>(createAuthResetPasswordFormEntity());
    const [isPending, setIsPending] = useState<boolean>(false);
    const [errorBag, setErrorBag] = useState<TErrorBag<IAuthResetPasswordForm>>({});
    const signInRoute = process.env.NEXT_PUBLIC_AUTH_SIGN_IN_ROUTE ?? '/auth/sign-in';

    const onResetPasswordHandler = async () => {
        setIsPending(false);
        setErrorBag({});
        const validated = resetPasswordFormValidationCheck(form);
        if (!validated.success) {
            setErrorBag(z.flattenError(validated.error).fieldErrors)
        }else {
            try {
                setIsPending(true);
                const res = await resetPasswordService(form);
                router.push(`${signInRoute}?message=${encodeURIComponent(res.message)}`)
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
        onResetPasswordHandler,
        resetAll,
        form,
        setForm,
        isPending,
        errorBag,
    }
}

export default useAuthResetPassword