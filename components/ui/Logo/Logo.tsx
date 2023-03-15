import { Typography } from '@/components/common';
import { StoreFrontIcon } from '@/components/icons';
import classNames from 'classnames';
import Link from 'next/link';
import React, { FC } from 'react';

interface LogoProps {
  size?: 'small' | 'large';
}

const Logo: FC<LogoProps> = ({ size = 'small' }) => {
  return (
    <Link href="/" className="flex items-center gap-x-2.5">
      <StoreFrontIcon
        className={classNames('text-primary', {
          'h-6 w-6': size === 'small',
          'h-8 w-8': size === 'large',
        })}
      />
      <Typography size={size === 'large' ? 'h5' : undefined} className="!font-bold">
        NFT Marketplace
      </Typography>
    </Link>
  );
};

export default Logo;
