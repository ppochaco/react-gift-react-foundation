import { css } from '@emotion/react';

import Image from '../Image';

interface RankedImageProps {
  rank: number;
  imageSrc: string;
  alt: string;
  ratio?: number | 'square';
  radius?: number | 'circle';
}

const rankingStyle = (rankingIndex: number) =>
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

const imageWrapperStyle = css({
  position: 'relative',
  width: '100%',
  height: 'auto',
  display: 'inline-block',
});

const RankedImage = ({
  rank,
  imageSrc,
  alt,
  ratio = 16 / 9,
  radius = 0,
}: RankedImageProps) => {
  return (
    <div css={imageWrapperStyle}>
      <div css={rankingStyle(rank)}>{rank}</div>
      <Image
        width="8rem"
        src={imageSrc}
        alt={alt}
        ratio={ratio}
        radius={radius}
      />
    </div>
  );
};

export default RankedImage;
