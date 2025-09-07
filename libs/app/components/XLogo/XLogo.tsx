import React from 'react';
import Image from "next/image";
import Logo from "../../assets/images/butbecauselogo.webp";
import Link from "next/link";

const XLogo = () => {
    return (
        <Link href={"/"}><Image src={Logo} alt={"ButBecause Logo"} priority={true}/></Link>
    );
};

export default XLogo;