import {IAuthSignUpForm} from "@/libs/auth/types/AuthSignUpTypes";

export const createAuthSignUpFormEntity = (arg: Partial<IAuthSignUpForm> = {}):IAuthSignUpForm => {
    return structuredClone({
        name                : arg.name ?? "",
        username            : arg.username ?? "",
        email               : arg.email ?? "",
        mobile              : arg.mobile ?? "",
        password            : arg.password ?? "",
        confirmPassword     : arg.confirmPassword ?? "",
    })
}