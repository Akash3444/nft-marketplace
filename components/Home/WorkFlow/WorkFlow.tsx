import { Container, Typography } from '@/components/common';
import React from 'react';

const workFlowSteps = [
  {
    title: 'Setup Your wallet',
    description:
      'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.',
    image: '/setup-wallet.png',
  },
  {
    title: 'Create Collection',
    description:
      'Upload your work and setup your collection. Add a description, social links and floor price.',
    image: '/create-collection.png',
  },
  {
    title: 'Start Earning',
    description:
      'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
    image: '/start-earning.png',
  },
];

const WorkFlow = () => {
  return (
    <Container>
      <Typography size="h4" fontFamily="work-sans" className="desktop:text-h3">
        How it works
      </Typography>
      <Typography fontFamily="work-sans" className="mt-2.5 desktop:text-h5 capitalize">
        Find out how to get started
      </Typography>
      <div className="mt-10 grid grid-cols-1 gap-5 tablet:gap-7.5 tablet:grid-cols-3">
        {workFlowSteps.map(({ title, description, image }, index) => (
          <div
            key={index}
            className="bg-dark-gray rounded-brand flex tablet:flex-col items-center gap-5 p-5 tablet:pb-7.5 desktop:p-7.5"
          >
            <div className="h-[100px] tablet:h-[160px] desktop:h-[208px] w-auto aspect-1">
              <img src={image} alt={title} className="h-full" />
            </div>
            <div className="tablet:text-center">
              <Typography fontFamily="work-sans" className="mb-2.5 font-semibold desktop:text-h5">
                {title}
              </Typography>
              <Typography
                fontFamily="work-sans"
                size="caption"
                className="leading-4 text-white desktop:text-base"
              >
                {description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WorkFlow;
