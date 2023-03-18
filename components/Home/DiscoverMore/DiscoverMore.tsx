import { Button, Container, Typography } from '@/components/common';
import { EyeIcon } from '@/components/icons';
import React from 'react';

const nftList = [
  {
    name: 'Distant Galaxy',
    artist: 'MoonDancer',
    price: '1.63 ETH',
    highestBid: '0.33 wETH',
    avatar: '/avatar/avatar-16.png',
  },
  {
    name: 'Life on Edena',
    artist: 'NebulaKid',
    price: '1.63 ETH',
    highestBid: '0.33 wETH',
    avatar: '/avatar/avatar-10.png',
  },
  {
    name: 'AstroFiction',
    artist: 'Spaceone',
    price: '1.63 ETH',
    highestBid: '0.33 wETH',
    avatar: '/avatar/avatar-15.png',
  },
];

const DiscoverMore = () => {
  return (
    <Container className="grid grid-cols-1 tablet:grid-cols-2">
      <div>
        <Typography fontFamily="work-sans" size="h4" className="desktop:text-h3">
          Discover More NFTs
        </Typography>
        <Typography fontFamily="work-sans" className="mt-2.5 desktop:text-h5">
          Explore new trending NFTs
        </Typography>
      </div>

      <div className="my-10 grid grid-cols-1 tablet:grid-cols-2 gap-7.5 tablet:col-span-2 desktop:grid-cols-3">
        {nftList.map(({ name, artist, price, highestBid, avatar }, index) => (
          <div key={index} className="rounded-brand overflow-hidden">
            <div className="w-full aspect-w-12 aspect-h-9">
              <img src={`/nft-${index + 1}.png`} alt="Space walking" className="object-cover" />
            </div>
            <div className="p-5 bg-dark-gray">
              <Typography size="h5" fontFamily="work-sans">
                {name}
              </Typography>
              <div className="mt-2.5 flex items-center gap-x-3">
                <img src={avatar} alt="Animakid" className="h-6 w-6 rounded-full" />
                <Typography>{artist}</Typography>
              </div>

              <div className="mt-6 flex items-start justify-between">
                <div className="text-left">
                  <Typography size="caption" className="mb-2 text-caption">
                    Price:
                  </Typography>
                  <Typography size="caption" className="text-white">
                    {price}
                  </Typography>
                </div>
                <div className="text-right">
                  <Typography size="caption" className="mb-2 text-caption">
                    Highest Bid:
                  </Typography>
                  <Typography size="caption" className="text-white">
                    {highestBid}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outlined"
        className="w-full tablet:w-auto gap-x-3 tablet:col-start-2 tablet:col-end-3 tablet:row-start-1 tablet:place-self-end tablet:self-end"
      >
        <EyeIcon className="h-5 w-5 text-primary" />
        See All
      </Button>
    </Container>
  );
};

export default DiscoverMore;
