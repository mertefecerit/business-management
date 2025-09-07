import AuthRepository from "@/libs/auth/repositories/AuthRepository";
import {IAuthUser} from "@/libs/auth/types/AuthTypes";
import {createAuthUserEntity} from "@/libs/auth/entities/AuthEntity";
import {AxiosPromise} from "axios";

const AuthService = () => {
    const {user, logout} = AuthRepository();

    const getUser = async ():Promise<IAuthUser> => {
        const {data} = await user();
        return createAuthUserEntity(data.data);
    }

    const logoutService = async ():AxiosPromise => {
        return await logout();
    }


    return {
        getUser,
        logoutService,
    }
}

export default AuthService