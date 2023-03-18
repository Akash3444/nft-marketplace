import classNames from 'classnames';
import React, { ComponentProps, FC, PropsWithChildren } from 'react';

interface ContainerProps extends ComponentProps<'div'> {}

const Container: FC<PropsWithChildren<ContainerProps>> = ({ className, children, ...rest }) => {
  const containerClass = classNames(
    'py-10 px-7.5 tablet:px-18 desktop:px-0 desktop:max-w-[1050px] mx-auto',
    className
  );

  return (
    <div className={containerClass} {...rest}>
      {children}
    </div>
  );
};

export default Container;
