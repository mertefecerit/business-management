"use client";

import React from 'react';
import Link from "next/link";

const AuthSignInLink = () => {
    return (
        <p
            className={"text-xs text-zinc-500 flex items-center gap-2 justify-center"}>
            Already have an account?
            <Link href={"/auth/sign-in"}
                  className={"text-brand-500 font-medium hover:text-brand-600"}
            >
                Sign in
            </Link>
        </p>
    );
};

export default AuthSignInLink;