import { Button, Container, Typography } from '@/components/common';
import { EyeIcon } from '@/components/icons';
import React from 'react';
import NFTCard from '../NFTCard';

const nftList = [
  {
    name: 'Distant Galaxy',
    artist: {
      name: 'MoonDancer',
      avatar: '/avatar/avatar-16.png',
    },
    price: '1.63 ETH',
    highestBid: '0.33 wETH',
  },
  {
    name: 'Life on Edena',
    artist: {
      name: 'NebulaKid',
      avatar: '/avatar/avatar-10.png',
    },
    price: '1.63 ETH',
    highestBid: '0.33 wETH',
  },
  {
    name: 'AstroFiction',
    artist: {
      name: 'Spaceone',
      avatar: '/avatar/avatar-15.png',
    },
    price: '1.63 ETH',
    highestBid: '0.33 wETH',
  },
];

const DiscoverMore = () => {
  return (
    <Container className="grid grid-cols-1 tablet:grid-cols-2">
      <div>
        <Typography fontFamily="work-sans" size="h4" className="desktop:text-h3">
          Discover More NFTs
        </Typography>
        <Typography fontFamily="work-sans" className="mt-2.5 desktop:text-h5 capitalize">
          Explore new trending NFTs
        </Typography>
      </div>

      <div className="my-10 grid grid-cols-1 tablet:grid-cols-2 gap-7.5 tablet:col-span-2 desktop:grid-cols-3">
        {nftList.map((nft, index) => (
          <NFTCard key={index} {...nft} image={`/nft-${index + 1}.png`} />
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
