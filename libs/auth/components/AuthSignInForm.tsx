"use client";

import React, {useEffect} from 'react';
import AuthSignInCheckLoginForm from "@/libs/auth/components/AuthSignInCheckLoginForm";
import AuthSignInPasswordForm from "@/libs/auth/components/AuthSignInPasswordForm";
import XLogo from "@/libs/app/components/XLogo/XLogo";
import XCard from "@/libs/app/components/XCard/XCard";
import {useAppDispatch, useAppSelector} from "@/libs/app/store";
import {clearForm, clearIsPending, clearShowPasswordForm, clearErrorBag} from "@/libs/auth/slices/AuthSignInSlice";
import XAlertBlock from "@/libs/core/components/XAlertBlock/XAlertBlock";
import {useSearchParams} from "next/navigation";

const AuthSignInForm = () => {

    const searchParams = useSearchParams();
    const message = searchParams.get('message');

    const dispatch = useAppDispatch();
    const state = useAppSelector((reducer) => reducer.AuthWithPasswordCheckLogin);

    useEffect(() => {
        return () => {
            dispatch(clearForm());
            dispatch(clearIsPending());
            dispatch(clearShowPasswordForm());
            dispatch(clearErrorBag());
        }
    }, [])

    return (
        <XCard className={"space-y-6"} size={"sm"}>
            <XLogo />
            <XAlertBlock type={"success"} status={!!message}>
                <p className={"text-sm"}>{message}</p>
            </XAlertBlock>
            {state.showPasswordForm ? <AuthSignInPasswordForm/> : <AuthSignInCheckLoginForm />}
        </XCard>
    );
};

export default AuthSignInForm;