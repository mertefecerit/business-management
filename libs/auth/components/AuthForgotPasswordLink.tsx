"use client";

import React from 'react';
import Link from "next/link";

const AuthSignInLink = () => {
    return (
        <Link
            href={"/auth/forgot-password"}
            className={"text-brand-500 font-medium hover:text-brand-600 text-sm"}
        >
            Forgot Password?
        </Link>
    );
};

export default AuthSignInLink;