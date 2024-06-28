import { CSSObject, css } from '@emotion/react';

export const inputStateStyles: {
  [key in 'default' | 'invalid' | 'disabled']: CSSObject;
} = {
  default: {
    color: '#222222',
    '&:focus': {
      borderColor: '#000000',
    },
  },
  invalid: {
    borderColor: '#f99393',
    '&:focus': {
      borderColor: '#ff0000',
    },
  },
  disabled: {
    color: '#aaaaaa',
    backgroundColor: '#f5f5f5',
    cursor: 'not-allowed',
  },
};

export const inputSizeStyles: {
  [key in 'small' | 'large' | 'response']: CSSObject;
} = {
  small: {
    height: '2rem',
    fontSize: '0.875rem',
  },
  large: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  response: {
    height: '2rem',
    fontSize: '0.875rem',
    '@media (min-width: 768px)': {
      height: '2.25rem',
      fontSize: '1rem',
    },
    '@media (min-width: 1024px)': {
      width: '16rem',
    },
  },
};

export const inputStyle = ({
  size,
  invalid,
  disabled,
}: {
  size: 'small' | 'large' | 'response';
  invalid: boolean;
  disabled: boolean;
}) =>
  css({
    borderBottom: '1px solid #cccccc',
    outline: 'none',
    padding: '0 0.5rem',
    ...inputSizeStyles[size],
    ...(disabled && inputStateStyles.disabled),
    ...(invalid && inputStateStyles.invalid),
    ...(!disabled && !invalid && inputStateStyles.default),
  });
