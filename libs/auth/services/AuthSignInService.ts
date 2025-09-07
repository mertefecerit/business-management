import AuthSignInRepository from "@/libs/auth/repositories/AuthSignInRepository";
import {AxiosPromise} from "axios";
import {IAuthUser} from "@/libs/auth/types/AuthTypes";
import {createAuthUserEntity} from "@/libs/auth/entities/AuthEntity";
import {IAuthSignInCheckForm, IAuthSignInForm} from "@/libs/auth/types/AuthSignInTypes";
import {createAuthSignInCheckFormEntity, createAuthSignInFormEntity} from "@/libs/auth/entities/AuthSignInEntity";

const authSignInService = () => {
    const {check, signIn} = AuthSignInRepository();

    const signInCheckService = async (payload:IAuthSignInCheckForm):AxiosPromise => {
        return await check<IAuthSignInCheckForm>(createAuthSignInCheckFormEntity(payload));
    }

    const signInService = async (payload:IAuthSignInForm):Promise<IAuthUser> => {
        const {data} =  await signIn<IAuthSignInForm>(createAuthSignInFormEntity(payload));
        return createAuthUserEntity(data.data);
    }

    return {
        signInCheckService,
        signInService
    }
}

export default authSignInService