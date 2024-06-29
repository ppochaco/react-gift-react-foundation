import { Image } from '@/components/ui/Image/Image';

import { Container } from '../Layout/Container';
import { rankingStyle, rankingWrapperStyle } from './styles';

type RankedImageProps = {
  rank: number;
  imageSrc: string;
  alt: string;
  ratio?: number | 'square';
  radius?: number | 'circle';
};

export const RankedImage = ({
  rank,
  imageSrc,
  alt,
  ratio = 16 / 9,
  radius = 0,
}: RankedImageProps) => {
  return (
    <div css={rankingWrapperStyle}>
      <Container
        justifyContent="center"
        alignItems="center"
        css={rankingStyle(rank)}
      >
        {rank}
      </Container>
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
