import { Button } from '@/components/common';
import { MenuIcon, UserIcon } from '@/components/icons';
import { Logo } from '@/components/ui';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="h-14 desktop:h-[100px] flex items-center justify-between px-7.5 tablet:px-12">
      <Logo />

      <button className="desktop:hidden">
        <MenuIcon />
      </button>

      <div className="hidden desktop:flex items-center gap-x-2.5 font-work-sans">
        <Link href="/marketplace" className="px-5">
          Marketplace
        </Link>
        <Link href="/rankings" className="px-5">
          Rankings
        </Link>
        <Link href="/connect-wallet" className="px-5">
          Connect a wallet
        </Link>

        <Button className="gap-x-3">
          <UserIcon className="h-5 w-5" /> Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
