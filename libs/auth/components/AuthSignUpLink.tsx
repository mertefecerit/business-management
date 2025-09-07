"use client";

import React from 'react';
import Link from "next/link";

const AuthSignUpLink = () => {
    return (
        <p
            className={"text-xs text-zinc-500 flex items-center gap-2 justify-center"}>
            Don&#39;t have an account?
            <Link href={"/auth/signup"}
                  className={"text-brand-500 font-medium hover:text-brand-600"}
            >
                Sign Up
            </Link>
        </p>
    );
};

export default AuthSignUpLink;