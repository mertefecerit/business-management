import {createAuthForgotPasswordEntity} from "@/libs/auth/entities/AuthForgotPasswordEntity";
import {IAuthForgotPasswordForm} from "@/libs/auth/types/AuthForgotPasswordTypes";
import AuthForgotPasswordRepository from "@/libs/auth/repositories/AuthForgotPasswordRepository";

const AuthForgotPasswordService = () => {
    const {forgotPassword} = AuthForgotPasswordRepository();

    const forgotPasswordService = async (arg:IAuthForgotPasswordForm):Promise<IDataMessageResponse<IAuthForgotPasswordForm>> => {
        const {data} = await forgotPassword<IAuthForgotPasswordForm>(createAuthForgotPasswordEntity(arg));
        return {
            data : data.data,
            message : data.message,
        }
    }

    return {
        forgotPasswordService,
    }
}

export default AuthForgotPasswordService