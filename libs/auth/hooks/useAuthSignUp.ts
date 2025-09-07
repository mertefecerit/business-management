import AuthSignUpService from "@/libs/auth/services/AuthSignUpService";
import {useState} from "react";
import useForm from "@/libs/core/hooks/useForm";
import {createAuthSignUpFormEntity} from "@/libs/auth/entities/AuthSignUpEntity";
import {IAuthSignUpForm} from "@/libs/auth/types/AuthSignUpTypes";
import {AxiosError} from "axios";
import AuthSignUpValidation from "@/libs/auth/validations/AuthSignUpValidation";
import * as z from "zod";
import {useRouter} from "next/navigation";


const useAuthSignUp = () => {
    // INITIALIZE
    const {signUpService} = AuthSignUpService();
    const [isPending, setIsPending] = useState<boolean>(false);
    const [errorBag, setErrorBag] = useState<TErrorBag<IAuthSignUpForm>>({})
    const {values:form, reset, handleChange:setForm} = useForm<IAuthSignUpForm>(createAuthSignUpFormEntity());
    const {authSignUpValidationCheck} = AuthSignUpValidation();
    const router = useRouter();
    // HANDLERS
    const onAuthSignUpHandler = async () => {
        setErrorBag({});
        setIsPending(false);
        const validated = authSignUpValidationCheck(form);
        if (!validated.success) {
            setErrorBag(z.flattenError(validated.error).fieldErrors)
        }else {
            try {
                setIsPending(true);
                const res = await signUpService(form);
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

    // CLEANERS
    const AuthSignUpClearAll = () => {
        reset();
        setIsPending(false);
        setErrorBag({});
    }

    return {
        form,
        setForm,
        errorBag,
        AuthSignUpClearAll,
        onAuthSignUpHandler,
        isPending,
    }
}

export default useAuthSignUp;