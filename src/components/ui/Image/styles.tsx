import { css } from '@emotion/react';

export const boxStyle = (boxWidth: string) =>
  css({
    width: boxWidth,
    height: 'auto',
  });

export const getRatioPadding = (ratio: number | 'square'): string => {
  if (ratio === 'square') {
    return '100%';
  }
  return `${(1 / ratio) * 100}%`;
};

export const getBorderRadius = (radius: number | 'circle'): string => {
  if (radius === 'circle') {
    return '50%';
  }
  return `${radius}px`;
};

export const wrapperStyle = (ratio?: number | 'square') =>
  css({
    position: 'relative',
    width: '100%',
    paddingTop: ratio ? getRatioPadding(ratio) : 'auto',
    overflow: 'hidden',
  });

export const imageStyle = (radius?: number | 'circle') =>
  css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: radius !== undefined ? getBorderRadius(radius) : '0',
  });

export const rankingStyle = (rankingIndex: number) =>
  css({
    position: 'absolute',
    top: '0.25rem',
    left: '0.25rem',
    backgroundColor: rankingIndex <= 3 ? '#ff7788' : '#3d3d3d',
    color: '#ffffff',
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '0.25rem',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

export const rankingWrapperStyle = css({
  position: 'relative',
  width: '100%',
  height: 'auto',
  display: 'inline-block',
});
