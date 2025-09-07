import AuthResetPasswordRepository from "@/libs/auth/repositories/AuthResetPasswordRepository";
import {createAuthResetPasswordFormEntity} from "@/libs/auth/entities/AuthResetPasswordEntity";
import {IAuthResetPasswordForm} from "@/libs/auth/types/AuthResetPasswordTypes";

const authResetPasswordService = () => {
    const {resetPassword} = AuthResetPasswordRepository();

    const resetPasswordService = async (payload:IAuthResetPasswordForm):Promise<IDataMessageResponse<IAuthResetPasswordForm>> => {
        const {data} = await resetPassword<IAuthResetPasswordForm>(createAuthResetPasswordFormEntity(payload));
        return {
            data : data.data,
            message : data.message,
        }
    }
    return {
        resetPasswordService,
    }
}

export default authResetPasswordService