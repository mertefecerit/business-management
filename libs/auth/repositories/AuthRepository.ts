import useAxios from "@/libs/core/hooks/useAxios";
import {AxiosPromise} from "axios";

const AuthWithPasswordRepository = () => {
    const {request} = useAxios();
    const endpoint = "auth"

    const user = async (): AxiosPromise => {
        return await request({
            type : 'get',
            endpoint : `${endpoint}/user`,
        })
    }

    const logout = async (): AxiosPromise => {
        return await request({
            type : 'post',
            endpoint : `${endpoint}/logout`,
        })
    }

    return {
        user,
        logout
    }
}

export default AuthWithPasswordRepository;