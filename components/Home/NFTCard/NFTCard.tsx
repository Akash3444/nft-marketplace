import { Typography } from '@/components/common';
import React, { FC } from 'react';

interface NFTCardProps {
  name: string;
  image: string;
  price: string;
  highestBid: string;
  artist: {
    name: string;
    avatar: string;
  };
}

const NFTCard: FC<NFTCardProps> = ({
  name,
  image,
  price,
  highestBid,
  artist: { name: artistName, avatar },
}) => {
  return (
    <div className="rounded-brand overflow-hidden">
      <div className="w-full aspect-w-12 aspect-h-9">
        <img src={image} alt="Space walking" className="object-cover" />
      </div>
      <div className="p-5 bg-dark-gray">
        <Typography size="h5" fontFamily="work-sans">
          {name}
        </Typography>
        <div className="mt-2.5 flex items-center gap-x-3">
          <img src={avatar} alt="Animakid" className="h-6 w-6 rounded-full" />
          <Typography>{artistName}</Typography>
        </div>

        <div className="mt-6 flex items-start justify-between">
          <div className="text-left">
            <Typography size="caption" className="mb-2 text-label">
              Price:
            </Typography>
            <Typography size="caption" className="tablet:text-base">
              {price}
            </Typography>
          </div>
          <div className="text-right">
            <Typography size="caption" className="mb-2 text-label">
              Highest Bid:
            </Typography>
            <Typography size="caption" className="tablet:text-base">
              {highestBid}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
