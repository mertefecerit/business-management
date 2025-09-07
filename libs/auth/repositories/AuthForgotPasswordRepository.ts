import useAxios from "@/libs/core/hooks/useAxios";
import {AxiosPromise} from "axios";

const AuthForgotPasswordRepository = () => {
    const {request} = useAxios();
    const endpoint = "auth"

    const forgotPassword = async <T>(payload:T):AxiosPromise => {
        return await request({
            type :'post',
            endpoint: `${endpoint}/forgot-password`,
            payload
        })
    }

    return {
        forgotPassword,
    }
}

export default AuthForgotPasswordRepository