import AuthSignInService from "@/libs/auth/services/AuthSignInService";
import AuthSignInValidation from "@/libs/auth/validations/AuthSignInValidation";
import * as z from "zod";
import {AxiosError} from "axios";
import {useAppDispatch, useAppSelector} from "@/libs/app/store";
import {
    setIsPending,
    setErrorBag,
    clearErrorBag,
    clearIsPending,
} from "@/libs/auth/slices/AuthSignInSlice";
import {setUser} from "@/libs/auth/slices/AuthSlice";
import {setCookie} from 'cookies-next/client';
import dayjs from "dayjs";
import { useRouter } from 'next/navigation'
import {createAuthSignInFormEntity} from "@/libs/auth/entities/AuthSignInEntity";

const useAuthSignIn = () => {

    // INITIALIZE
    const dispatch = useAppDispatch()
    const router = useRouter()
    const state = useAppSelector((reducer) => reducer.AuthWithPasswordCheckLogin);

    // VALIDATIONS
    const {signInService} = AuthSignInService();
    const {signInFormValidation} = AuthSignInValidation();

    const signInRedirectRoute = process.env.NEXT_PUBLIC_AUTH_SIGN_IN_REDIRECT_ROUTE ?? '/dashboard';

    // HANDLERS
    const loginHandler = async () => {
        dispatch(clearErrorBag());
        dispatch(clearIsPending());
        const validated = signInFormValidation(state.form);
        if (!validated.success) {
            dispatch(setErrorBag(z.flattenError(validated.error).fieldErrors))
        } else {
            try {
                dispatch(setIsPending(true));
                const response = await signInService(createAuthSignInFormEntity(validated.data));
                dispatch(setUser(response));
                setCookie('token', response.token, {
                    expires: dayjs().add(30, 'day').toDate(),
                });
                router.push(signInRedirectRoute);
            } catch (error) {
                if (error instanceof AxiosError) {
                    if (error.response && error.response?.data?.errors && error.response?.data?.message) {
                        dispatch(setErrorBag(error.response?.data?.errors));
                    }
                }
            } finally {
                dispatch(clearIsPending());
            }
        }
    }


    return {
        loginHandler,
    }
}

export default useAuthSignIn;