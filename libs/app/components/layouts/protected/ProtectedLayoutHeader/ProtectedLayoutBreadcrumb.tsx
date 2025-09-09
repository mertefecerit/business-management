"use client";
import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import BreadcrumbMaker from "@/libs/app/components/layouts/protected/ProtectedLayoutHeader/BreadcrumbMaker";
import {CaretRightIcon} from "@phosphor-icons/react";

const ProtectedLayoutBreadcrumb = () => {

    const pathname = usePathname();

    const breadcrumbs = BreadcrumbMaker(pathname)

    return (
        <div className={"flex items-center gap-2 text-sm"}>
            {
                breadcrumbs.map((breadcrumb, index) => (
                    <React.Fragment key={breadcrumb.href}>
                        {
                            index > 0 && (<CaretRightIcon className="text-gray-400"/>)
                        }
                        {
                            breadcrumb.isLast ?
                                <span className={"text-zinc-500"}>{breadcrumb.label}</span> :
                                <Link
                                    href={breadcrumb.href}
                                    className={"font-medium"}>{breadcrumb.label}
                                </Link>
                        }
                    </React.Fragment>
                ))
            }
        </div>
    );
};

export default ProtectedLayoutBreadcrumb;