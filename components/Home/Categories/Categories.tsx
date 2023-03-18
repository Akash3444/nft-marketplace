import { Container, Typography } from '@/components/common';
import {
  ArtIcon,
  CollectiblesIcon,
  MusicIcon,
  PhotographyIcon,
  SportIcon,
  UtilityIcon,
  VideoIcon,
  VirtualWorldsIcon,
} from '@/components/icons';
import React from 'react';

const categories = [
  {
    name: 'Art',
    icon: <ArtIcon />,
  },
  {
    name: 'Collectibles',
    icon: <CollectiblesIcon />,
  },
  {
    name: 'Music',
    icon: <MusicIcon />,
  },
  {
    name: 'Photography',
    icon: <PhotographyIcon />,
  },
  {
    name: 'Video',
    icon: <VideoIcon />,
  },
  {
    name: 'Utility',
    icon: <UtilityIcon />,
  },
  {
    name: 'Sport',
    icon: <SportIcon />,
  },
  {
    name: 'Virtual Worlds',
    icon: <VirtualWorldsIcon />,
  },
];

const Categories = () => {
  return (
    <Container>
      <Typography size="h4" fontFamily="work-sans" className="mb-10 desktop:text-h3">
        Browse Categories
      </Typography>

      <div className="grid grid-cols-2 tablet:grid-cols-4 gap-5 tablet:gap-7.5">
        {categories.map(({ name, icon }, index) => (
          <div key={name} className="rounded-brand overflow-hidden">
            <div className="relative">
              <img
                src={`/categories/category-${index + 1}.png`}
                alt={name}
                className="w-full h-auto blur-[7.5px]"
              />
              <div className="absolute inset-0 flex items-center justify-center">{icon}</div>
            </div>
            <div className="bg-dark-gray px-5 pt-5 pb-6 h-full">
              <Typography fontFamily="work-sans" className="font-semibold">
                {name}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
