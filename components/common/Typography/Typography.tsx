import classNames from 'classnames';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'base' | 'caption';
  fontFamily?: 'space-mono' | 'work-sans';
}

const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  className,
  size = 'base',
  fontFamily = 'space-mono',
  ...rest
}) => {
  const typographyClass = classNames(
    {
      'text-h1': size === 'h1',
      'text-h2': size === 'h2',
      'text-h3': size === 'h3',
      'text-h4': size === 'h4',
      'text-h5': size === 'h5',
      'text-base': size === 'base',
      'text-caption': size === 'caption',
      'font-normal': size === 'base' || size === 'caption',
      'font-bold': size !== 'base' && size !== 'caption' && fontFamily === 'space-mono',
      'font-semibold': size !== 'base' && size !== 'caption' && fontFamily === 'work-sans',
      'font-space-mono': fontFamily === 'space-mono',
      'font-work-sans': fontFamily === 'work-sans',
    },
    className
  );

  return (
    <div className={typographyClass} {...rest}>
      {children}
    </div>
  );
};

export default Typography;
