import { Button, Container, Typography } from '@/components/common';
import { RocketIcon, RocketLaunchIcon } from '@/components/icons';
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
];

const TopCreators = () => {
  return (
    <Container>
      <Typography size="h4" fontFamily="work-sans">
        Top creators
      </Typography>
      <Typography fontFamily="work-sans" className="mt-2.5">
        Checkout Top Rated Creators on the NFT Marketplace
      </Typography>

      <div className="my-10 flex flex-col gap-y-5">
        {topCreators.slice(0, 5).map(({ name, totalSales }, index) => (
          <div key={index} className="flex items-center gap-x-5 bg-dark-gray rounded-brand p-5">
            <div className="h-[60px] w-[60px] aspect-square rounded-full">
              <img src={`/avatar/avatar-${index + 1}.png`} alt={name} />
            </div>
            <div className="">
              <Typography fontFamily="work-sans" size="h5">
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

      <Button variant="outlined" className="w-full gap-x-3">
        <RocketLaunchIcon className="h-5 w-5 text-primary" />
        View Rankings
      </Button>
    </Container>
  );
};

export default TopCreators;
