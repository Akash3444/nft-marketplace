import { Typography } from '@/components/common';
import React from 'react';

const Collection = () => {
  return (
    <div>
      <div className="mt-10 grid grid-cols-3 gap-4">
        <div className="col-span-3">
          <img
            src="/collections/dsgn-animals/primary.png"
            alt="DSGN Animals"
            className="rounded-brand object-cover block w-full max-w-full"
          />
        </div>
        <img
          src="/collections/dsgn-animals/secondary-1.png"
          alt="DSGN Animals"
          className="rounded-brand"
        />
        <img
          src="/collections/dsgn-animals/secondary-2.png"
          alt="DSGN Animals"
          className="rounded-brand"
        />
        <div className="bg-primary rounded-brand flex items-center justify-center font-bold font-space-mono">
          1025+
        </div>
      </div>

      {/* DUPLICATE FROM HERO */}
      <div className="mt-4">
        <Typography size="h5" fontFamily="work-sans">
          DSGN Animals
        </Typography>
        <div className="mt-2.5 flex items-center gap-x-3">
          <img src="avatar/avatar-6.png" alt="Animakid" className="h-6 w-6 rounded-full" />
          <Typography fontFamily="work-sans">MrFox</Typography>
        </div>
      </div>
    </div>
  );
};

export default Collection;
