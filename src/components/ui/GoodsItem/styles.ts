import { css } from '@emotion/react';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  width: '8rem',
  gap: '1rem',
  alignItems: 'center',
  backgroundColor: '#ffffff',
});

export const textContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '0.2rem',
});

export const titleStyle = css({
  fontSize: '0.9rem',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const subtitleStyle = css({
  fontSize: '0.9rem',
  color: '#757575',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const amountStyle = css({
  fontSize: '1.3rem',
  fontWeight: 'bold',
  color: '#000000',
  margin: '0',
  wordBreak: 'break-all',
});
