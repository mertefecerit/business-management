"use client";

import React from 'react';
import {BellIcon} from "@phosphor-icons/react";
import ProtectedLayoutHeaderMenuItem
    from "@/libs/app/components/layouts/protected/ProtectedLayoutHeader/ProtectedLayoutHeaderMenuItem";

const ProtectedLayoutHeaderMenu = () => {
    return (
        <ProtectedLayoutHeaderMenuItem>
            <div className={"relative"}>
                <BellIcon />
                <div className={"absolute rounded-full size-2 bg-red-500 -bottom-2 -right-2"} />
            </div>
        </ProtectedLayoutHeaderMenuItem>
    );
};

export default ProtectedLayoutHeaderMenu;