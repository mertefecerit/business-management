import useAxios from "@/libs/core/hooks/useAxios";
import {AxiosPromise} from "axios";

const AuthSignUpRepository = () => {
    const {request} = useAxios();
    const endpoint = "auth"

    const signUp = async <T>(payload:T):AxiosPromise => {
        return await request({
            type :'post',
            endpoint: `${endpoint}/signup`,
            payload
        })
    }

    return {
        signUp,
    }
}

export default AuthSignUpRepository