import React, { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className="py-10 px-7.5">{children}</div>;
};

export default Container;
