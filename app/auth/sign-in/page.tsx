import React, {Suspense} from 'react';
import AuthSignInForm from "@/libs/auth/components/AuthSignInForm";

const Page = () => {
    return (
        <Suspense>
            <AuthSignInForm />
        </Suspense>
    );
};

export default Page;