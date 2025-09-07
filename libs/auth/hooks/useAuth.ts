import AuthService from "@/libs/auth/services/AuthService";
import {useAppDispatch} from "@/libs/app/store";
import {setUser, clearUser} from "@/libs/auth/slices/AuthSlice";
import {deleteCookie} from "cookies-next/client";
import {useRouter} from "next/navigation";
import {useState} from "react";

const useAuth = () => {

    const [isOnGetUserHandlerPending, setIsOnGetUserHandlerPending] = useState<boolean>(false);
    const [isOnLogoutHandlerPending, setIsOnLogoutHandlerPending] = useState<boolean>(false);

    const {getUser, logoutService} = AuthService();
    const router = useRouter();
    const dispatch = useAppDispatch()

    const onGetUserHandler = async () => {
        try {
            setIsOnGetUserHandlerPending(true);
            const response = await getUser();
            dispatch(setUser(response));
        }catch (error) {
            return Promise.reject(error);
        }finally {
            setIsOnGetUserHandlerPending(false);
        }
    }

    const onLogoutHandler = async () => {
        try {
            setIsOnLogoutHandlerPending(true);
            await logoutService();
            router.push('/auth/sign-in');
            dispatch(clearUser());
            deleteCookie('token');
        }catch(err) {
            return Promise.reject(err);
        }finally {
            setIsOnLogoutHandlerPending(false);
        }
    }

    return {
        onGetUserHandler,
        onLogoutHandler,
        isOnGetUserHandlerPending,
        isOnLogoutHandlerPending,
    }
}

export default useAuth;