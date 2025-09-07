"use client";

import React, {useEffect} from 'react';
import XTextInput from "@/libs/core/components/XTextInput/XTextInput";
import useAuthSignUp from "@/libs/auth/hooks/useAuthSignUp";
import XButton from "@/libs/core/components/XButton/XButton";
import XLogo from "@/libs/app/components/XLogo/XLogo";
import XCard from "@/libs/app/components/XCard/XCard";
import AuthSignInLink from "@/libs/auth/components/AuthSignInLink";
import {EnvelopeSimpleIcon, EyeIcon, KeyIcon, PhoneIcon, UserIcon} from "@phosphor-icons/react";

const AuthSignUpForm = () => {

    const {form, setForm, AuthSignUpClearAll, errorBag, isPending, onAuthSignUpHandler} = useAuthSignUp();

    useEffect(() => {
        return AuthSignUpClearAll;
    }, []);

    return (
        <XCard className={"space-y-6"} size={"md"}>
            <div className={"max-w-xs mx-auto"}>
                <XLogo/>
            </div>
            <XTextInput
                label={"Email"}
                required={true}
                autoFocus={true}
                placeholder={"john.doe@butbecause.com"}
                value={form.email}
                onChange={(e) => setForm('email', e.target.value)}
                errors={errorBag.email}
                startIcon={<EnvelopeSimpleIcon weight={"bold"}/>}
            />
            <XTextInput
                label={"Full Name"}
                required={true}
                placeholder={"John Doe"}
                value={form.name}
                onChange={(e) => setForm('name', e.target.value)}
                errors={errorBag.name}
                startIcon={<UserIcon weight={"bold"}/>}
            />
            <div className={"grid xl:grid-cols-2 grid-cols-1 gap-6"}>
                <XTextInput
                    label={"Username"}
                    required={true}
                    placeholder={"john_doe"}
                    value={form.username}
                    onChange={(e) => setForm('username', e.target.value)}
                    errors={errorBag.username}
                    startIcon={<UserIcon weight={"bold"}/>}
                />
                <XTextInput
                    label={"Mobile"}
                    required={true}
                    placeholder={"+1 XXX-XXXX"}
                    value={form.mobile}
                    onChange={(e) => setForm('mobile', e.target.value)}
                    errors={errorBag.mobile}
                    startIcon={<PhoneIcon weight={"bold"}/>}
                />
                <XTextInput
                    label={"Password"}
                    required={true}
                    type={"password"}
                    placeholder={"********"}
                    value={form.password}
                    onChange={(e) => setForm('password', e.target.value)}
                    errors={errorBag.password}
                    startIcon={<KeyIcon weight={"bold"}/>}
                />
                <XTextInput
                    label={"Confirm Password"}
                    required={true}
                    type={"password"}
                    placeholder={"********"}
                    value={form.confirmPassword}
                    onChange={(e) => setForm('confirmPassword', e.target.value)}
                    errors={errorBag.confirmPassword}
                    startIcon={<KeyIcon weight={"bold"}/>}
                />
            </div>
            <XButton onClick={onAuthSignUpHandler} isProcessing={isPending} className={"w-full"}>Complete</XButton>
            <AuthSignInLink/>
        </XCard>
    );
};

export default AuthSignUpForm;