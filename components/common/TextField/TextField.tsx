import { ComponentProps, FC } from 'react';
import classNames from 'classnames';
import s from './TextField.module.css';

type TextFieldSize = 'small' | 'medium' | 'large';

interface TextFieldProps extends Omit<ComponentProps<'input'>, 'size'> {
  size?:
    | TextFieldSize
    | {
        base: TextFieldSize;
        tablet?: TextFieldSize;
        desktop?: TextFieldSize;
      };
}

const TextField: FC<TextFieldProps> = ({ type = 'text', size = 'medium', className, ...props }) => {
  const hasSingleSize = typeof size === 'string';
  const textFieldClass = classNames(
    s.root,
    {
      [s.small]: hasSingleSize ? size === 'small' : size.base === 'small',
      [s.medium]: hasSingleSize ? size === 'medium' : size.base === 'medium',
      [s.large]: hasSingleSize ? size === 'large' : size.base === 'large',
      [s.tabletSmall]: !hasSingleSize && size.tablet === 'small',
      [s.desktopSmall]: !hasSingleSize && size.desktop === 'small',
      [s.tabletMedium]: !hasSingleSize && size.tablet === 'medium',
      [s.desktopMedium]: !hasSingleSize && size.desktop === 'medium',
      [s.tabletLarge]: !hasSingleSize && size.tablet === 'large',
      [s.desktopLarge]: !hasSingleSize && size.desktop === 'large',
    },
    className
  );

  return <input type={type} className={textFieldClass} {...props} />;
};

export default TextField;
