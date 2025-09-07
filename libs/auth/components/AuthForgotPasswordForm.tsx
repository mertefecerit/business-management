"use client";

import React, {useEffect} from 'react';
import XLogo from "@/libs/app/components/XLogo/XLogo";
import XCard from "@/libs/app/components/XCard/XCard";
import XTextInput from "@/libs/core/components/XTextInput/XTextInput";
import EnterKeyDown from "@/libs/core/utils/EnterKeyDown";
import XButton from "@/libs/core/components/XButton/XButton";
import {useAppSelector} from "@/libs/app/store";
import useAuthForgotPassword from "@/libs/auth/hooks/useAuthForgotPassword";
import AuthSignInLink from "@/libs/auth/components/AuthSignInLink";
import {EnvelopeSimpleIcon} from "@phosphor-icons/react";

const AuthForgotPasswordForm = () => {
    const state = useAppSelector((reducer) => reducer.AuthWithPasswordCheckLogin);
    const {form, setForm, onForgotPasswordHandler, isPending, errorBag, resetAll} = useAuthForgotPassword();

    useEffect(() => {
        setForm('email', state.form.email);
        return resetAll;
    }, []);

    return (
        <XCard className={"space-y-6"} size={"sm"}>
            <XLogo/>
            <XTextInput
                label={"Email"}
                required={true}
                autoFocus={true}
                placeholder={"john.doe@butbecause.com"}
                value={form.email}
                onChange={(e) => setForm('email', e.target.value)}
                errors={errorBag.email}
                startIcon={<EnvelopeSimpleIcon weight={"bold"}/>}
                onKeyUp={(e) => EnterKeyDown(e, () => onForgotPasswordHandler().then())}
            />
            <div className={"space-y-3"}>
                <XButton
                    onClick={onForgotPasswordHandler}
                    className={"w-full"}
                    isProcessing={isPending}
                >
                    <span>Send Reset Instruction</span>
                </XButton>
                <AuthSignInLink/>
            </div>
        </XCard>
    );
};

export default AuthForgotPasswordForm;