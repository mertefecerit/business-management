import useAxios from "@/libs/core/hooks/useAxios";
import {AxiosPromise} from "axios";

const AuthSignInRepository = () => {
    const {request} = useAxios();
    const endpoint = "auth"

    const check = async <T>(payload:T):AxiosPromise => {
        return await request({
            type : 'post',
            endpoint : `${endpoint}/sign-in-check`,
            payload
        })
    }

    const signIn = async <T>(payload:T): AxiosPromise => {
        return await request({
            type : 'post',
            endpoint : `${endpoint}/sign-in`,
            payload
        })
    }

    return {
        check,
        signIn
    }
}

export default AuthSignInRepository;