import axios, {type AxiosRequestConfig, type Method} from "axios";
import {getCookie} from 'cookies-next/client';
interface RequestCredentials<TPayload = unknown> {
    type: Method;
    endpoint: string;
    payload?: TPayload;
    options?: AxiosRequestConfig;
}

const useAxios = () => {


    const token = getCookie('token') ?? "";
    const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const fakeApiUrl = process.env.NEXT_PUBLIC_FAKE_API_URL;
    const fakeApiStatus = process.env.NEXT_PUBLIC_FAKE_API_STATUS;

    const axiosInstance = axios.create({
        baseURL: fakeApiStatus === 'true' ? fakeApiUrl : apiBaseURL ,
        withCredentials : true,
        withXSRFToken: true,
        headers: {
            "Content-Type" : "application/json",
            Accept : "application/json",
        },
    });

    axiosInstance.interceptors.request.use((config) => {
        if (token)
            config.headers.Authorization = `Bearer ${token}`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use(response => {
        return response;
    }, async (error) => {
        return Promise.reject(error);
    })

    const request = (credentials:RequestCredentials) => {
        const {type, endpoint, payload, options = {}} = credentials;

        return axiosInstance({
            method: type,
            url: `/${endpoint}`,
            data: payload,
            ...options
        })
    }

    const setBaseURL = (baseURL:string) => {
        axiosInstance.defaults.baseURL = baseURL;
    }

    return {
        request,
        setBaseURL
    }
}

export default useAxios;