import { Button, Container, Typography } from '@/components/common';
import { NFTCard } from '@/components/Home';
import {
  CopyIcon,
  DiscordIcon,
  GlobeIcon,
  InstagramIcon,
  PlusIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/components/icons';
import React from 'react';

const nftList = [
  {
    name: 'Distant Galaxy',
    artist: {
      name: 'Animakid',
      avatar: '/avatar/avatar-14.png',
    },
    price: '1.63 ETH',
    highestBid: '0.33 wETH',
  },
  {
    name: 'Life on Edena',
    artist: {
      name: 'Animakid',
      avatar: '/avatar/avatar-14.png',
    },
    price: '1.63 ETH',
    highestBid: '0.33 wETH',
  },
  {
    name: 'AstroFiction',
    artist: {
      name: 'Animakid',
      avatar: '/avatar/avatar-14.png',
    },
    price: '1.63 ETH',
    highestBid: '0.33 wETH',
  },
];

const Artist = () => {
  return (
    <>
      <div>
        <div className="aspect-w-16 aspect-h-11 tablet:aspect-none tablet:w-full">
          <img
            src="/artist-cover.png"
            alt="Animekid cover image"
            className="object-cover tablet:w-full"
          />
        </div>

        <div className="tablet:px-18 desktop:px-0 desktop:max-w-[1050px] desktop:mx-auto">
          <div className="relative z-50 h-[120px] w-[120px] rounded-brand -mt-[60px] mx-auto tablet:ml-0 border-2 border-dark">
            <img src="/artist-avatar.png" alt="" className="h-full w-full" />
          </div>

          <div className="p-7.5 tablet:px-0">
            <div className="flex flex-col desktop:flex-row desktop:items-start desktop:justify-between">
              <Typography
                size="h4"
                fontFamily="work-sans"
                className="capitalize tablet:text-h3 desktop:text-h2"
              >
                animakid
              </Typography>

              <div className="mt-7.5 desktop:mt-0 flex flex-col tablet:flex-row tablet:items-start gap-5">
                <Button className="gap-x-3">
                  <CopyIcon className="h-5 w-5" />
                  0xc0E3...B79C
                </Button>
                <Button variant="outlined" className="gap-x-3">
                  <PlusIcon className="h-5 w-5 text-primary" />
                  Follow
                </Button>
              </div>
            </div>

            {/* TODO: Make statistics common */}
            <div className="mt-7.5 tablet:mt-5 max-w-lg flex items-center justify-between">
              <div className="desktop:mr-auto">
                <Typography size="h5" className="desktop:text-h4">
                  250k+
                </Typography>
                <Typography fontFamily="work-sans" className="desktop:text-h5">
                  Volume
                </Typography>
              </div>
              <div className="desktop:mr-auto">
                <Typography size="h5" className="desktop:text-h4">
                  50k+
                </Typography>
                <Typography fontFamily="work-sans" className="desktop:text-h5">
                  NFTs Sold
                </Typography>
              </div>
              <div className="desktop:mr-auto">
                <Typography size="h5" className="desktop:text-h4">
                  3000+
                </Typography>
                <Typography fontFamily="work-sans" className="desktop:text-h5">
                  Followers
                </Typography>
              </div>
            </div>

            <div className="mt-7.5">
              <Typography className="text-label desktop:text-h5">Bio</Typography>
              <Typography fontFamily="work-sans" className="mt-2.5 desktop:text-h5">
                The internet&apos;s friendliest designer kid.
              </Typography>
            </div>

            <div className="mt-7.5">
              <Typography className="text-label desktop:text-h5">Links</Typography>
              <div className="flex items-center mt-2.5 gap-x-2.5 text-label">
                <GlobeIcon className="h-6 desktop:h-8 w-6 desktop:w-8" />
                <DiscordIcon className="h-6 desktop:h-8 w-6 desktop:w-8" />
                <YoutubeIcon className="h-6 desktop:h-8 w-6 desktop:w-8" />
                <TwitterIcon className="h-6 desktop:h-8 w-6 desktop:w-8" />
                <InstagramIcon className="h-6 desktop:h-8 w-6 desktop:w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-dark-gray">
        <div className="flex justify-center px-7.5 tablet:px-18 desktop:px-0 desktop:max-w-[1050px] desktop:mx-auto">
          <div className="flex-1 flex items-center gap-x-4 justify-center py-5 border-b-2 border-label">
            <Typography fontFamily="work-sans" className="font-semibold desktop:text-h5">
              Created
            </Typography>
            <Typography
              size="caption"
              className="hidden desktop:text-base tablet:block py-1 px-2.5 bg-label rounded-brand"
            >
              302
            </Typography>
          </div>
          <div className="flex-1 flex items-center gap-x-4 justify-center py-5">
            <Typography fontFamily="work-sans" className="font-semibold desktop:text-h5 text-label">
              Owned
            </Typography>
            <Typography
              size="caption"
              className="hidden desktop:text-base tablet:block py-1 px-2.5 bg-dark-gray rounded-brand"
            >
              67
            </Typography>
          </div>
          <div className="flex-1 flex items-center gap-x-4 justify-center py-5">
            <Typography fontFamily="work-sans" className="font-semibold desktop:text-h5 text-label">
              Collection
            </Typography>
            <Typography
              size="caption"
              className="hidden desktop:text-base tablet:block py-1 px-2.5 bg-dark-gray rounded-brand"
            >
              4
            </Typography>
          </div>
        </div>
      </div>

      <Container>
        <div className="my-12 grid grid-cols-1 tablet:grid-cols-2 gap-7.5 tablet:col-span-2 desktop:grid-cols-3">
          {nftList.map((nft, index) => (
            <NFTCard key={index} {...nft} image={`/nft-${index + 1}.png`} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Artist;
