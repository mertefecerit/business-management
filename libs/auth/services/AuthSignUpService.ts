import AuthSignUpRepository from "@/libs/auth/repositories/AuthSignUpRepository";
import {IAuthSignUpForm} from "@/libs/auth/types/AuthSignUpTypes";
import {createAuthSignUpFormEntity} from "@/libs/auth/entities/AuthSignUpEntity";

const AuthSignUpService = () => {
    const {signUp} = AuthSignUpRepository();

    const signUpService = async (arg:IAuthSignUpForm):Promise<IDataMessageResponse<IAuthSignUpForm>> => {
        const {data} = await signUp<IAuthSignUpForm>(createAuthSignUpFormEntity(arg));
        return {
            data : data.data,
            message : data.message,
        }
    }

    return {
        signUpService,
    }
}

export default AuthSignUpService