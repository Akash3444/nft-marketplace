import { Button, Typography } from '@/components/common';
import { EyeIcon } from '@/components/icons';
import React from 'react';

const NFTCountDown = () => {
  return (
    <div
      className="bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/mushroom.png')" }}
    >
      <div className="pt-28 tablet:pt-80 px-7.5 tablet:px-20 pb-10 bg-gradient-to-b from-primary/5 via-primary/50 to-primary/50">
        <div className="bg-dark py-3 px-5 mt-2.5 flex items-center gap-x-3 max-w-max rounded-brand">
          <img src="avatar/avatar-7.png" alt="Shroomie" className="h-6 w-6 rounded-full" />
          <Typography fontFamily="work-sans">Shroomie</Typography>
        </div>

        <div className="tablet:mt-7.5 grid grid-rows-1 tablet:grid-rows-2 tablet:col-start-1 tablet:gap-x-5 tablet:max-h-min">
          <Typography size="h3" fontFamily="work-sans" className="my-7.5 tablet:my-0">
            Magic Mushrooms
          </Typography>

          {/* Countdown */}
          <div className="bg-dark-gray/50 p-7.5 rounded-brand tablet:row-span-full tablet:col-start-2">
            <Typography size="caption" className="text-white">
              Auction ends in:
            </Typography>
            <div className="flex items-start justify-between mt-2.5">
              <div>
                <Typography size="h3">59</Typography>
                <Typography size="caption" className="mt-1 text-white">
                  Hours
                </Typography>
              </div>
              <Typography size="h3" className="-mt-0.5">
                :
              </Typography>
              <div>
                <Typography size="h3">59</Typography>
                <Typography size="caption" className="mt-1 text-white">
                  Hours
                </Typography>
              </div>
              <Typography size="h3" className="-mt-0.5">
                :
              </Typography>
              <div>
                <Typography size="h3">59</Typography>
                <Typography size="caption" className="mt-1 text-white">
                  Hours
                </Typography>
              </div>
            </div>
          </div>

          <Button
            variant="inverted"
            className="gap-x-3 mt-7.5 tablet:mt-0 w-full tablet:w-auto tablet:row-start-2 tablet:row-end-3 tablet:place-self-start tablet:self-end"
          >
            <EyeIcon className="h-5 w-5 text-primary" />
            See NFT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NFTCountDown;
