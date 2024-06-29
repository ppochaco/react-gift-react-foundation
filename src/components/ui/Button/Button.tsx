import { ButtonHTMLAttributes } from 'react';

import { BUTTON_DEFULT_SIZE, BUTTON_DEFULT_THEME } from '@/constants/styles';
import { Size, Theme } from '@/types/uiTypes';

import { buttonStyle } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Theme;
  size?: Size;
}

export const Button = ({
  children,
  onClick,
  theme = BUTTON_DEFULT_THEME,
  size = BUTTON_DEFULT_SIZE,
  ...props
}: ButtonProps) => {
  return (
    <button onClick={onClick} css={buttonStyle(theme, size)} {...props}>
      {children}
    </button>
  );
};
