"use client";

import React, {useEffect} from 'react';
import XLogo from "@/libs/app/components/XLogo/XLogo";
import XCard from "@/libs/app/components/XCard/XCard";
import XTextInput from "@/libs/core/components/XTextInput/XTextInput";
import XButton from "@/libs/core/components/XButton/XButton";

import AuthSignInLink from "@/libs/auth/components/AuthSignInLink";
import useAuthResetPassword from "@/libs/auth/hooks/useAuthResetPassword";
import {useSearchParams} from "next/navigation";
import {KeyIcon} from "@phosphor-icons/react";

const AuthForgotPasswordForm = () => {

    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const {form, setForm, onResetPasswordHandler, isPending, errorBag, resetAll} = useAuthResetPassword();

    useEffect(() => {
        if (token) setForm('token', token);
        return resetAll;
    }, []);

    return (
        <XCard className={"space-y-6"} size={"sm"}>
            <XLogo/>
            <XTextInput
                label={"Password"}
                required={true}
                type={"password"}
                startIcon={<KeyIcon weight={"bold"}/>}
                placeholder={"********"}
                value={form.password}
                onChange={(e) => setForm('password', e.target.value)}
                errors={errorBag.password}
            />
            <XTextInput
                label={"Confirm Password"}
                required={true}
                type={"password"}
                startIcon={<KeyIcon weight={"bold"}/>}
                placeholder={"********"}
                value={form.confirmPassword}
                onChange={(e) => setForm('confirmPassword', e.target.value)}
                errors={errorBag.confirmPassword}
            />
            <div className={"space-y-3"}>
                <XButton
                    onClick={onResetPasswordHandler}
                    className={"w-full"}
                    isProcessing={isPending}
                >
                    <span>Reset Password</span>
                </XButton>
                <AuthSignInLink/>
            </div>
        </XCard>
    );
};

export default AuthForgotPasswordForm;