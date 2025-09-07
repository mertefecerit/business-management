"use client";

import React from 'react';
import Image, {ImageProps} from "next/image";

interface IXAvatarProps extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> {
    avatar?: string;
}

const XAvatar = (props:IXAvatarProps) => {
    const { avatar, className, ...restProps } = props;

    return (
        avatar && <Image
            {...restProps}
            className={`rounded-full border-2 select-none pointer-events-none border-brand-500 ${className}`}
            src={avatar}
            priority={true}
            alt={'reported_user_avatar'}
            width={100}
            height={100}
        />
    );
};

export default XAvatar;