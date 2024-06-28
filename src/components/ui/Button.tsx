import { CSSObject, css } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';

const themeStyles: {
  [key in 'primary' | 'kakao' | 'ghost']: CSSObject;
} = {
  primary: {
    backgroundColor: '#222222',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#1a1a1a',
    },
  },
  kakao: {
    backgroundColor: '#FEE501',
    color: '#3C1D1E',
    '&:hover': {
      backgroundColor: '#f2da00',
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: '#222222',
    border: '1px solid #ececec',
    '&:hover': {
      backgroundColor: '#efefef',
    },
  },
};

const sizeStyles: {
  [key in 'sm' | 'md' | 'response']: CSSObject;
} = {
  sm: {
    height: '2rem',
    padding: '0 1rem',
  },
  md: {
    height: '2.25rem',
    padding: '0 2rem',
  },
  response: {
    padding: '0 1rem',
    height: '2rem',
    '@media (min-width: 768px)': {
      height: '2.5rem',
      padding: '0 2rem',
    },
    '@media (min-width: 1024px)': {
      padding: '0 4rem',
    },
  },
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'kakao' | 'ghost';
  size?: 'sm' | 'md' | 'response';
}

const Button = ({
  className = '',
  children,
  onClick,
  theme = 'primary',
  size = 'sm',
  ...props
}: ButtonProps) => {
  const buttonStyle = css({
    borderRadius: '0.25rem',
    ...themeStyles[theme],
    ...sizeStyles[size],
  });

  return (
    <button
      className={className}
      onClick={onClick}
      css={buttonStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
