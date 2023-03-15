import { Button, Container, Typography } from '@/components/common';
import { RocketLaunchIcon } from '@/components/icons';
import React from 'react';

const Hero = () => {
  return (
    <Container>
      <Typography size="h4" fontFamily="work-sans" className="mb-2.5 capitalize">
        Discover digital art & Collect NFTs
      </Typography>
      <Typography fontFamily="work-sans">
        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than
        20k NFT artists.
      </Typography>

      <div className="my-10 rounded-brand overflow-hidden">
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

      <Button className="gap-x-3 w-full">
        <RocketLaunchIcon className="h-5 w-5" />
        Get Started
      </Button>

      {/* Statistics */}
      <div className="mt-10 flex items-center justify-between">
        <div>
          <Typography size="h5">240k+</Typography>
          <Typography fontFamily="work-sans">Total Sale</Typography>
        </div>
        <div>
          <Typography size="h5">100k+</Typography>
          <Typography fontFamily="work-sans">Auctions</Typography>
        </div>
        <div>
          <Typography size="h5">240k+</Typography>
          <Typography fontFamily="work-sans">Artists</Typography>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
