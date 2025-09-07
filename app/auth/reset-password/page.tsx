import React, {Suspense} from 'react';
import AuthResetPasswordForm from "@/libs/auth/components/AuthResetPasswordForm";

const Page = () => {
    return (
        <Suspense>
            <AuthResetPasswordForm/>
        </Suspense>
    );
};

export default Page;