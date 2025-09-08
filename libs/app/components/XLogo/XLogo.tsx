import React from 'react';
import Image from "next/image";
import Logo from "../../assets/images/logo.webp";
import Link from "next/link";

const XLogo = () => {
    return (
        <Link href={"/"} className={"inline-block"}><Image src={Logo} alt={"ButBecause Logo"} priority={true}/></Link>
    );
};

export default XLogo;