import { Button, TextField, Typography } from '@/components/common';
import {
  DiscordIcon,
  EnvelopeIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/components/icons';
import { Logo } from '@/components/ui';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-gray py-10 px-7.5">
      <div className="max-w-brand mx-auto">
        <div className="flex flex-col desktop:flex-row desktop:justify-between gap-y-7.5">
          <div>
            <Logo size="large" />
            <Typography
              fontFamily="work-sans"
              className="mt-5 text-light-gray desktop:max-w-[23ch]"
            >
              NFT marketplace UI created with Anima for Figma.
            </Typography>

            <Typography fontFamily="work-sans" className="mt-5 text-light-gray">
              Join our community
            </Typography>
            <div className="flex items-center mt-4 gap-x-2.5 text-label">
              <DiscordIcon />
              <YoutubeIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>

          <div>
            <Typography size="h5">Explore</Typography>
            <div className="mt-5 gap-y-5 flex flex-col text-light-gray">
              <Link href="/marketplace">
                <Typography fontFamily="work-sans">Marketplace</Typography>
              </Link>
              <Link href="/rankings">
                <Typography fontFamily="work-sans">Rankings</Typography>
              </Link>
              <Link href="/connect-wallet">
                <Typography fontFamily="work-sans">Connect a wallet</Typography>
              </Link>
            </div>
          </div>

          <div>
            <Typography size="h5" className="capitalize">
              Join our weekly digest
            </Typography>
            <Typography
              fontFamily="work-sans"
              className="text-light-gray mt-5 desktop:max-w-[30ch]"
            >
              Get exclusive promotions & updates straight to your inbox.
            </Typography>

            <div className="mt-5 tablet:flex tablet:items-center tablet:justify-start">
              <TextField
                size={{ base: 'small', tablet: 'medium' }}
                placeholder="Enter your email here"
                className="mt-5 tablet:mt-0 w-full tablet:w-72 tablet:focus:outline-none"
              />
              <Button
                size={{ base: 'small', tablet: 'medium' }}
                className="mt-4 tablet:mt-0 gap-x-3 w-full tablet:w-auto tablet:-ml-[72px]"
              >
                <EnvelopeIcon className="h-5 w-5" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-7.5 pt-5 border-t border-caption">
          <Typography size="caption" fontFamily="work-sans" className="text-light-gray">
            &copy; NFT Market
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
