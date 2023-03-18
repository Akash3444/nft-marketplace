import classNames from 'classnames';
import { ComponentProps, FC, PropsWithChildren } from 'react';
import s from './Button.module.css';

type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ComponentProps<'button'> {
  size?:
    | ButtonSize
    | {
        base: ButtonSize;
        tablet?: ButtonSize;
        desktop?: ButtonSize;
      };
  variant?: 'primary' | 'outlined' | 'inverted';
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  size = 'medium',
  variant = 'primary',
  ...rest
}) => {
  const hasSingleSize = typeof size === 'string';

  const buttonClass = classNames(
    s.root,
    {
      [s.small]: hasSingleSize ? size === 'small' : size.base === 'small',
      [s.medium]: hasSingleSize ? size === 'medium' : size.base === 'medium',
      [s.large]: hasSingleSize ? size === 'large' : size.base === 'large',
      [s.primary]: variant === 'primary',
      [s.inverted]: variant === 'inverted',
      [s.outlined]: variant === 'outlined',
      [s.tabletSmall]: !hasSingleSize && size.tablet === 'small',
      [s.desktopSmall]: !hasSingleSize && size.desktop === 'small',
      [s.tabletMedium]: !hasSingleSize && size.tablet === 'medium',
      [s.desktopMedium]: !hasSingleSize && size.desktop === 'medium',
      [s.tabletLarge]: !hasSingleSize && size.tablet === 'large',
      [s.desktopLarge]: !hasSingleSize && size.desktop === 'large',
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
