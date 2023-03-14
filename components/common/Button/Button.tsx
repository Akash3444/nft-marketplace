import classNames from 'classnames';
import { ComponentProps, FC, PropsWithChildren } from 'react';
import s from './Button.module.css';

interface ButtonProps extends ComponentProps<'button'> {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'outlined';
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  size = 'medium',
  variant = 'primary',
  ...rest
}) => {
  const buttonClass = classNames(
    s.root,
    {
      [s.small]: size === 'small',
      [s.medium]: size === 'medium',
      [s.large]: size === 'large',
      [s.primary]: variant === 'primary',
      [s.outlined]: variant === 'outlined',
    },
    className
  );

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
