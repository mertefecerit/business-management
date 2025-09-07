import {IAuthSignInForm} from "@/libs/auth/types/AuthSignInTypes";

export const createAuthSignInCheckFormEntity = (arg:Partial<IAuthSignInForm> = {}):Omit<IAuthSignInForm, "password"> => {
    return structuredClone({
        email : arg.email ?? ""
    })
}

export const createAuthSignInFormEntity = (arg:Partial<IAuthSignInForm> = {}):IAuthSignInForm => {
    return structuredClone({
        email: arg.email ?? "",
        password : arg.password ?? "",
    })
}