import {IAuthUser} from "@/libs/auth/types/AuthTypes";

export const createAuthUserEntity = (arg:Partial<IAuthUser> = {}):IAuthUser => {
    return structuredClone({
        name: arg.name ?? "",
        email: arg.email ?? "",
        avatar: arg.avatar ?? "",
        token: arg.token ?? "",
    })
}