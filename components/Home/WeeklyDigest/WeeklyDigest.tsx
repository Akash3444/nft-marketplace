import { Button, Container, TextField, Typography } from '@/components/common';
import { EnvelopeIcon } from '@/components/icons';
import React from 'react';

const WeeklyDigest = () => {
  return (
    <Container>
      <div className="tablet:bg-dark-gray flex flex-col tablet:flex-row tablet:gap-7.5 tablet:py-10 tablet:px-7.5 tablet:rounded-brand desktop:gap-20 desktop:p-15">
        <div className="mb-7.5 tablet:mb-0 w-full tablet:basis-[300px] tablet:flex-shrink-0 tablet:h-[280px] desktop:basis-[425px] aspect-h-12 aspect-w-15 tablet:aspect-h-[auto] rounded-brand overflow-hidden">
          <img src="/weekly-digest.png" alt="Weekly Digest" className="object-cover" />
        </div>

        <div className="">
          <Typography size="h4" fontFamily="work-sans" className="capitalize desktop:text-h3">
            Join our weekly digest
          </Typography>
          <Typography fontFamily="work-sans" className="mt-2.5 desktop:text-h5">
            Get exclusive promotions & updates straight to your inbox.
          </Typography>

          <div className="mt-10 desktop:flex desktop:items-center desktop:justify-start">
            <TextField
              size={{ base: 'small', desktop: 'medium' }}
              placeholder="Enter your email here"
              className="w-full desktop:w-72"
            />
            <Button
              size={{ base: 'small', desktop: 'medium' }}
              className="mt-4 desktop:mt-0 gap-x-3 w-full desktop:w-auto desktop:-ml-[72px]"
            >
              <EnvelopeIcon className="h-5 w-5" />
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WeeklyDigest;
