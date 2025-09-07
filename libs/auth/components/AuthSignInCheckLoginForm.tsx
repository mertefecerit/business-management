"use client"

import React from 'react';
import XButton from "@/libs/core/components/XButton/XButton";
import XTextInput from "@/libs/core/components/XTextInput/XTextInput";
import AuthSignUpLink from "@/libs/auth/components/AuthSignUpLink";
import useAuthSignInCheck from "@/libs/auth/hooks/useAuthSignInCheck";
import {useAppSelector, useAppDispatch} from "@/libs/app/store";
import {setForm} from "@/libs/auth/slices/AuthSignInSlice";
import EnterKeyDown from "@/libs/core/utils/EnterKeyDown";
import {EnvelopeSimpleIcon} from "@phosphor-icons/react";

const AuthSignInCheckLoginForm = () => {

    const dispatch = useAppDispatch();
    const state = useAppSelector((reducer) => reducer.AuthWithPasswordCheckLogin);
    const {loginCheckHandler} = useAuthSignInCheck();

    return (
        <>
            <XTextInput
                label={"Email"}
                required={true}
                autoFocus={true}
                placeholder={"john.doe@butbecause.com"}
                value={state.form.email}
                startIcon={<EnvelopeSimpleIcon weight={"bold"}/>}
                onChange={(e) => dispatch(setForm({email:e.target.value}))}
                errors={state.errorBag.email}
                onKeyUp={(e) => EnterKeyDown(e, () => loginCheckHandler().then())}
            />
            <div className={"space-y-3"}>
                <XButton
                    onClick={loginCheckHandler}
                    className={"w-full"}
                    isProcessing={state.isPending}
                >
                    <span>Continue</span>
                </XButton>
                <AuthSignUpLink/>
            </div>
        </>
    );
};

export default AuthSignInCheckLoginForm;