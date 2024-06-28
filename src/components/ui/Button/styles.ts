import { CSSObject, css } from '@emotion/react';

import { Size, Theme } from '@/types/uiTypes';

export const themeStyles: {
  [key in 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray']: CSSObject;
} = {
  kakao: {
    backgroundColor: '#FEE501',
    color: '#3C1D1E',
    '&:hover': {
      backgroundColor: '#f2da00',
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: '#222222',
    border: '1.2px solid #e0e0e0',
    '&:hover': {
      backgroundColor: '#efefef',
    },
  },
  black: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#222222',
    },
  },
  lightGray: {
    backgroundColor: '#dddddd',
    color: '#000000',
    '&:hover': {
      backgroundColor: '#cccccc',
    },
  },
  darkGray: {
    backgroundColor: '#222222',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#1a1a1a',
    },
  },
};

export const sizeStyles: {
  [key in 'small' | 'large' | 'response']: CSSObject;
} = {
  small: {
    height: '2rem',
    padding: '0 1rem',
  },
  large: {
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

export const buttonStyle = (theme: Theme, size: Size) =>
  css({
    borderRadius: '0.25rem',
    ...themeStyles[theme],
    ...sizeStyles[size],
  });
