import {IAuthResetPasswordForm} from "@/libs/auth/types/AuthResetPasswordTypes";

export const createAuthResetPasswordFormEntity = (arg:Partial<IAuthResetPasswordForm> = {}):IAuthResetPasswordForm => {
    return structuredClone({
        token           : arg.token             ?? "",
        password        : arg.password          ?? "",
        confirmPassword : arg.confirmPassword   ?? "",
    })
}