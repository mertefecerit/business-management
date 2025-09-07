import useAxios from "@/libs/core/hooks/useAxios";
import {AxiosPromise} from "axios";

const AuthResetPasswordRepository = () => {
    const {request} = useAxios();
    const endpoint = "auth"

    const resetPassword = async <T>(payload:T):AxiosPromise => {
        return await request({
            type : 'post',
            endpoint : `${endpoint}/reset-password`,
            payload
        })
    }

    return {
        resetPassword,
    }
}

export default AuthResetPasswordRepository;