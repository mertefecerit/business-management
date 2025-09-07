"use client";

import React from 'react';
import Link from "next/link";

const AuthSignInLink = () => {
    return (
        <Link
            href={"/auth/forgot-password"}
            className={"text-sky-500 font-medium hover:text-sky-600 text-sm"}
        >
            Forgot Password?
        </Link>
    );
};

export default AuthSignInLink;