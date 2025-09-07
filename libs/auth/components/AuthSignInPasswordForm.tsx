import React from 'react';
import XTextInput from "@/libs/core/components/XTextInput/XTextInput";
import XButton from "@/libs/core/components/XButton/XButton";
import useAuthSignIn from "@/libs/auth/hooks/useAuthSignIn";
import AuthSignUpLink from "@/libs/auth/components/AuthSignUpLink";
import {useAppDispatch, useAppSelector} from "@/libs/app/store";
import {setForm} from "@/libs/auth/slices/AuthSignInSlice";
import EnterKeyDown from "@/libs/core/utils/EnterKeyDown";
import AuthForgotPasswordLink from "@/libs/auth/components/AuthForgotPasswordLink";
import {KeyIcon} from "@phosphor-icons/react";

const AuthSignInPasswordForm = () => {
    const dispatch = useAppDispatch();
    const state = useAppSelector((reducer) => reducer.AuthWithPasswordCheckLogin);

    const {loginHandler} = useAuthSignIn();

    return (
        <>
            <div>{state.form.email}</div>
            <XTextInput
                label={"Password"}
                required={true}
                type={"password"}
                autoFocus={true}
                labelEnd={<AuthForgotPasswordLink/>}
                startIcon={<KeyIcon weight={"bold"}/>}
                placeholder={"********"}
                value={state.form.password}
                onChange={(e) => dispatch(setForm({password:e.target.value}))}
                onKeyUp={(e) => EnterKeyDown(e, () => loginHandler().then())}
                errors={state.errorBag.password}
            />
            <div className={"space-y-3"}>
                <XButton
                    onClick={loginHandler}
                    className={"w-full"}
                    isProcessing={state.isPending}
                >
                    <span>Sign In</span>
                </XButton>
                <AuthSignUpLink/>
            </div>
        </>
    );
};

export default AuthSignInPasswordForm;