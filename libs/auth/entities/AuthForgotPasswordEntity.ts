import {IAuthForgotPasswordForm} from "@/libs/auth/types/AuthForgotPasswordTypes";

export const createAuthForgotPasswordEntity = (arg:Partial<IAuthForgotPasswordForm> = {}):IAuthForgotPasswordForm => {
    return structuredClone({
        email: arg.email ?? "",
    })
}