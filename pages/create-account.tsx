import { Button, TextField, Typography } from '@/components/common';
import React from 'react';

const CreateAccount = () => {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2">
      <div className="aspect-w-16 aspect-h-10 tablet:aspect-[auto]">
        <img
          src="/create-account.png"
          alt="Create account"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="pt-7.5 px-7.5 pb-10 tablet:pl-10 tablet:pt-20 tablet:pr-18 desktop:pl-15 desktop:py-24 desktop:pr-36">
        <Typography size="h3" fontFamily="work-sans" className="capitalize desktop:text-h2">
          Create account
        </Typography>
        <Typography
          fontFamily="work-sans"
          className="mt-5 mb-7.5 tablet:mb-10 desktop:text-h5 capitalize"
        >
          Welcome! enter your details and start creating, collecting and selling NFTs.
        </Typography>

        <div className="max-w-xs">
          <div className="[&>*]:w-full space-y-4 mb-7.5">
            <TextField size="small" placeholder="Username" />
            <TextField size="small" placeholder="Email Address" />
            <TextField size="small" placeholder="Password" />
            <TextField size="small" placeholder="Confirm Password" />
          </div>
          <Button size="small" className="w-full">
            Create account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
