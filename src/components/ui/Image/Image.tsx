import { ImgHTMLAttributes } from 'react';

import { IMAGE_DEFAULT_RADIUS, IMAGE_DEFAULT_RATIO } from '@/constants/styles';

import { boxStyle, imageStyle, wrapperStyle } from './styles';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio?: number | 'square';
  radius?: number | 'circle';
  width: string;
}

export const Image = ({
  ratio = IMAGE_DEFAULT_RATIO,
  radius = IMAGE_DEFAULT_RADIUS,
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
