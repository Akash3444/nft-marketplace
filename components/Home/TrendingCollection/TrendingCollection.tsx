import { Container, Typography } from '@/components/common';
import React from 'react';
import Collection from './Collection';

const TrendingCollection = () => {
  return (
    <Container>
      <Typography size="h4" fontFamily="work-sans" className="desktop:text-h3">
        Trending Collection
      </Typography>
      <Typography fontFamily="work-sans" className="mt-2.5 desktop:text-h5 capitalize">
        Checkout our weekly updated trending collection.
      </Typography>

      <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:gap-x-7.5 desktop:grid-cols-3">
        <Collection />
        <Collection />
        <Collection />
      </div>
    </Container>
  );
};

export default TrendingCollection;
