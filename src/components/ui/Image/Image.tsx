import { ImgHTMLAttributes } from 'react';

import { DEFAULT_RADIUS, DEFAULT_RATIO } from '@/constants/styles';

import { boxStyle, imageStyle, wrapperStyle } from './styles';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio?: number | 'square';
  radius?: number | 'circle';
  width: string;
}

export const Image = ({
  ratio = DEFAULT_RATIO,
  radius = DEFAULT_RADIUS,
  width,
  alt,
  ...props
}: ImageProps) => {
  return (
    <div css={boxStyle(width)}>
      <div css={wrapperStyle(ratio)}>
        <img css={imageStyle(radius)} alt={alt} {...props} />
      </div>
    </div>
  );
};
