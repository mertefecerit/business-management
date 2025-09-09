"use client";

import React, {useState} from 'react';
import Link from "next/link";
import {CaretRightIcon} from "@phosphor-icons/react";

import {usePathname} from "next/navigation";
import {AnimatePresence, motion} from "motion/react";
import {IMenuItem} from "@/libs/app/components/layouts/protected/ProtectedLayoutSidebar/MenuItems";

const ProtectedLayoutSidebarMenuItem = ({item}: { item: IMenuItem }) => {
    const pathname = usePathname()
    const [subMenuStatus, setSubMenuStatus] = useState<boolean>(false)


    const isActive = subMenuStatus || pathname === item.href ? 'bg-zinc-100':'hover:bg-zinc-100'

    const isActiveChildRoute = (childHref:string) => {
        return subMenuStatus && pathname === childHref ? 'bg-zinc-100':'hover:bg-zinc-100'
    }

    return (
        item.children ?
            <>
                <div
                    className={`h-10 cursor-pointer px-4 font-medium text-sm flex items-center justify-between ${isActive}`}
                    onClick={() => setSubMenuStatus(!subMenuStatus)}
                >
                    <span>{item.label}</span>
                    <motion.div
                        animate={{ rotate: subMenuStatus ? 90 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <CaretRightIcon weight={"bold"} />
                    </motion.div>
                </div>

                <div className={"overflow-hidden"}>
                    <AnimatePresence>
                        {
                            subMenuStatus &&
                            <motion.div
                                className={"flex flex-col gap-[1px]"}
                            >
                                {
                                    item.children.map((child) => (
                                        <Link key={child.href} href={child.href} className={`indent-4 h-10 min-h-10 cursor-pointer px-4 font-medium text-sm flex items-center justify-between ${isActiveChildRoute(child.href)}`}>
                                            {child.label}
                                        </Link>
                                    ))
                                }
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            </>
            :
            <div className={`h-10 cursor-pointer px-4 font-medium text-sm ${isActive}`}>
                <Link href={item.href} className={"h-full flex items-center"}>
                    {item.label}
                </Link>
            </div>
    );
};

export default ProtectedLayoutSidebarMenuItem;