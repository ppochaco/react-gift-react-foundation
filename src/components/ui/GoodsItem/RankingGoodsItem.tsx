import { RankedImage } from '../Image/RankingImage';
import { BaseGoodsItem } from './BaseGoodsItem';

interface RankingGoodsItemProps {
  rank: number;
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: string;
}

export const RankingGoodsItem = ({
  rank,
  imageSrc,
  subtitle,
  title,
  amount,
}: RankingGoodsItemProps) => {
  return (
    <BaseGoodsItem
      imageComponent={
        <RankedImage
          rank={rank}
          imageSrc={imageSrc}
          alt={title}
          ratio="square"
          radius={5}
        />
      }
      subtitle={subtitle}
      title={title}
      amount={amount}
    />
  );
};
