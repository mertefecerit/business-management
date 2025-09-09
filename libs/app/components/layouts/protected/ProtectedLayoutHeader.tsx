"use client";

import React from 'react';
import {useAppSelector} from "@/libs/app/store";
import useAuth from "@/libs/auth/hooks/useAuth";
import {useOnce} from "@/libs/core/hooks/useOnce";
import XButton from "@/libs/core/components/XButton/XButton";

const ProtectedLayoutHeader = () => {

    const user = useAppSelector((reducer) => reducer.Auth.user);
    const {onGetUserHandler, onLogoutHandler, isOnLogoutHandlerPending} = useAuth();

    useOnce(async () => {
        if (!user) await onGetUserHandler()
    })

    return (
        <header className={"flex items-center justify-between gap-2 bg-white px-4 h-16 border-b border-zinc-200"}>
            <span>{user?.name}</span>
            <XButton
                onClick={onLogoutHandler}
                isProcessing={isOnLogoutHandlerPending}
            >Logout</XButton>
        </header>
    );
};

export default ProtectedLayoutHeader;