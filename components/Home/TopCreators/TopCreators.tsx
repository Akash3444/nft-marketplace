import { Button, Container, Typography } from '@/components/common';
import { RocketLaunchIcon } from '@/components/icons';
import React from 'react';

const topCreators = [
  {
    name: 'Keepitreal',
    totalSales: '34.53 ETH',
  },
  {
    name: 'DigiLab',
    totalSales: '32.13 ETH',
  },
  {
    name: 'GravityOne',
    totalSales: '28.93 ETH',
  },
  {
    name: 'Juanie',
    totalSales: '25.30 ETH',
  },
  {
    name: 'BlueWhale',
    totalSales: '22.22 ETH',
  },
  {
    name: 'mr fox',
    totalSales: '22.22 ETH',
  },
  {
    name: 'Shroomie',
    totalSales: '22.22 ETH',
  },
  {
    name: 'robotica',
    totalSales: '22.22 ETH',
  },
  {
    name: 'RustyRobot',
    totalSales: '22.22 ETH',
  },
  {
    name: 'animakid',
    totalSales: '22.22 ETH',
  },
  {
    name: 'Dotgu',
    totalSales: '22.22 ETH',
  },
  {
    name: 'Ghiblier',
    totalSales: '22.22 ETH',
  },
];

const TopCreators = () => {
  return (
    <Container className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4">
      <div className="tablet:col-start-1 tablet:col-end-2 desktop:col-end-4">
        <Typography size="h4" fontFamily="work-sans" className="desktop:text-h3">
          Top creators
        </Typography>
        <Typography fontFamily="work-sans" className="mt-2.5 desktop:text-h5 capitalize">
          Checkout Top Rated Creators on the NFT Marketplace
        </Typography>
      </div>

      <div className="my-10 grid grid-cols-1 tablet:grid-cols-2 gap-5 tablet:gap-7.5 tablet:col-span-2 desktop:col-span-4 desktop:grid-cols-4">
        {topCreators.map(({ name, totalSales }, index) => (
          <div
            key={index}
            className="flex desktop:flex-col items-center gap-x-5 bg-dark-gray rounded-brand p-5"
          >
            <div
              className={`relative h-[60px] desktop:w-full desktop:h-auto aspect-square rounded-full`}
            >
              <img
                src={`/avatar/avatar-${index + 1}.png`}
                alt={name}
                className="block h-full w-full desktop:h-[120px] desktop:w-[120px] desktop:mx-auto"
              />
              <Typography className="absolute -left-2 -top-2 desktop:-left-0 desktop:top-0 h-7.5 w-7.5 flex items-center justify-center bg-dark text-caption rounded-full">
                {index + 1}
              </Typography>
            </div>
            <div className="desktop:mt-5 desktop:text-center">
              <Typography fontFamily="work-sans" size="h5" className="capitalize">
                {name}
              </Typography>
              <div className="mt-1 flex items-center">
                <Typography fontFamily="work-sans" className="text-caption">
                  Total Sales:
                </Typography>
                <Typography>&nbsp;{totalSales}</Typography>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outlined"
        className="w-full tablet:w-auto gap-x-3 tablet:col-start-2 tablet:col-end-3 desktop:col-start-4 desktop:col-end-5 tablet:self-end tablet:row-start-1 tablet:place-self-end"
      >
        <RocketLaunchIcon className="h-5 w-5 text-primary" />
        View Rankings
      </Button>
    </Container>
  );
};

export default TopCreators;
