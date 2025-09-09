"use client";

import React from 'react';
import XAvatar from "@/libs/app/components/XAvatar/XAvatar";
import {useAppSelector} from "@/libs/app/store";
import XDropdown from "@/libs/core/components/XDropdown/XDropdown";
import useAuth from "@/libs/auth/hooks/useAuth";
import {useOnce} from "@/libs/core/hooks/useOnce";
import {GearIcon, SignOutIcon} from "@phosphor-icons/react";

const ProtectedLayoutHeaderUserMenu = () => {
    const user = useAppSelector((reducer) => reducer.Auth.user);
    const {onGetUserHandler, onLogoutHandler} = useAuth();

    useOnce(async () => {
        if (!user) await onGetUserHandler()
    })

    return ( user &&
        <XDropdown placement={"bottom-end"}>
            <XDropdown.Trigger>
                <div className={"cursor-pointer hover:brightness-95 flex items-center gap-2"}>
                    <div className={"text-xs flex flex-col items-end"}>
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                    </div>
                    <XAvatar avatar={user.avatar} className={"size-10"} />
                </div>
            </XDropdown.Trigger>
            <XDropdown.Menu>
                <div className={"space-y-1"}>
                    <XDropdown.MenuItem>
                        <GearIcon />
                        <span>Settings</span>
                    </XDropdown.MenuItem>
                    <XDropdown.MenuItem onClick={onLogoutHandler}>
                        <SignOutIcon />
                        <span>Sign Out</span>
                    </XDropdown.MenuItem>
                </div>
            </XDropdown.Menu>
        </XDropdown>
    );
};

export default ProtectedLayoutHeaderUserMenu;