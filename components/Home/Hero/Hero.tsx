import { Button, Container, Typography } from '@/components/common';
import { RocketLaunchIcon } from '@/components/icons';
import React from 'react';
import s from './Hero.module.css';

const Hero = () => {
  return (
    <Container className="tablet:flex tablet:items-start tablet:gap-x-7.5 tablet:px-18">
      <div className="tablet:space-y-5 desktop:space-y-7.5">
        <Typography size="h4" fontFamily="work-sans" className={s.title}>
          Discover digital art & Collect NFTs
        </Typography>
        <Typography fontFamily="work-sans" className="desktop:text-h5">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than
          20k NFT artists.
        </Typography>

        <div className="my-10 tablet:hidden rounded-brand overflow-hidden">
          <img src="/space-walking.png" alt="Space walking" />
          <div className="p-5 bg-dark-gray">
            <Typography size="h5" fontFamily="work-sans">
              Space Walking
            </Typography>
            <div className="mt-2.5 flex items-center gap-x-3">
              <img src="avatar/avatar-14.png" alt="Animakid" className="h-6 w-6 rounded-full" />
              <Typography fontFamily="work-sans">Animakid</Typography>
            </div>
          </div>
        </div>

        <Button className="gap-x-3 w-full tablet:w-auto">
          <RocketLaunchIcon className="h-5 w-5" />
          Get Started
        </Button>

        {/* Statistics */}
        <div className="mt-10 tablet:mt-5 flex items-center justify-between">
          <div className="desktop:mr-auto">
            <Typography size="h5" className="desktop:text-h4">
              240k+
            </Typography>
            <Typography fontFamily="work-sans" className="desktop:text-h5">
              Total Sale
            </Typography>
          </div>
          <div className="desktop:mr-auto">
            <Typography size="h5" className="desktop:text-h4">
              100k+
            </Typography>
            <Typography fontFamily="work-sans" className="desktop:text-h5">
              Auctions
            </Typography>
          </div>
          <div className="desktop:mr-auto">
            <Typography size="h5" className="desktop:text-h4">
              240k+
            </Typography>
            <Typography fontFamily="work-sans" className="desktop:text-h5">
              Artists
            </Typography>
          </div>
        </div>
      </div>

      <div className="hidden tablet:block tablet:basis-[330px] desktop:basis-[510px] tablet:flex-grow-1 tablet:flex-shrink-0 rounded-brand overflow-hidden">
        <img
          src="/space-walking.png"
          alt="Space walking"
          className="h-[221px] desktop:h-auto w-full object-cover"
        />
        <div className="p-5 bg-dark-gray">
          <Typography size="h5" fontFamily="work-sans">
            Space Walking
          </Typography>
          <div className="mt-2.5 flex items-center gap-x-3">
            <img src="avatar/avatar-14.png" alt="Animakid" className="h-6 w-6 rounded-full" />
            <Typography fontFamily="work-sans">Animakid</Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
